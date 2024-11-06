import { CircleNotch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

interface UploadModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  taskId: string;
}

const UploadModal = ({
  isOpen,
  setIsOpen,
  taskId,
}: UploadModalProps): JSX.Element | null => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleUpload = async () => {
    setUploading(true);

    const uploadedFilesData: {
      fileName: string;
      url: string;
      extension: string;
    }[] = [];

    for (const file of files) {
      const base64 = await convertToBase64(file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ file: base64 }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data: { fileName: string; url: string; extension: string } =
        await response.json();

      if (data.url) {
        uploadedFilesData.push({
          fileName: data.fileName,
          url: data.url,
          extension: data.extension,
        });
      }
    }

    // Now update MongoDB with the taskId and the uploaded file details
    const updateResponse = await fetch("/api/update-task", {
      method: "PATCH",
      body: JSON.stringify({ taskId, uploadedFiles: uploadedFilesData }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const updateData = await updateResponse.json();
    console.log("Task update response:", updateData);

    setUploading(false);
    setIsOpen(false);
    setFiles([]);
    router.push("/");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-[600px] space-y-4">
        <h2 className="text-xl font-semibold">Upload Files</h2>

        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="p-2 block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring focus:ring-blue-500"
        />

        <div className="flex gap-4">
          <button
            onClick={handleUpload}
            className="flex justify-center items-center bg-blue-500 text-white w-[120.94px] h-[40px] rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            disabled={uploading}
          >
            {uploading ? (
              <CircleNotch className="animate-spin" size={24} />
            ) : (
              "Upload Files"
            )}
          </button>

          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 underline"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
