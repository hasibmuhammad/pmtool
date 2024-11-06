"use client";

import { Link } from "@phosphor-icons/react";
import UploadModal from "../UploadModal";
import { useState } from "react";

const LinkIcon = ({ id }: { id: string }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Link size={20} />
      </button>
      {isOpen && (
        <UploadModal isOpen={isOpen} setIsOpen={setIsOpen} taskId={id} />
      )}
    </>
  );
};

export default LinkIcon;
