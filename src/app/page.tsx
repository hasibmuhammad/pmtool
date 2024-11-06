"use client";
import { taskInfoItems } from "@/data";
import { ClipboardText, Stack } from "@phosphor-icons/react";
import Image from "next/image";

const Home = (): JSX.Element => {
  const taskStatusCounts = taskInfoItems.reduce<Record<string, number>>(
    (acc, task) => {
      acc[task.taskStatus] = (acc[task.taskStatus] || 0) + 1;
      return acc;
    },
    {}
  );

  const taskStatuses = [
    { name: "Incomplete", color: "bg-red-600" },
    { name: "To Do", color: "bg-[#00B5FF]" },
    { name: "Doing", color: "bg-[#FFE700]" },
    { name: "Under Review", color: "bg-[#FFC107]" },
    { name: "Completed", color: "bg-green-500" },
    { name: "Overdue", color: "bg-gray-600" },
  ];

  return (
    <div className="w-full flex gap-4">
      {taskStatuses.map(({ name, color }) => {
        const currentCard = taskInfoItems.filter(
          (item) => item.taskStatus === name
        );
        return (
          <div
            key={name}
            className="flex-shrink-0 bg-slate-100 min-w-[276px] px-4 py-4"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className={`${color} w-6 h-6 rounded-l-full`}></div>
                <h1>{name}</h1>
              </div>
              <p>{taskStatusCounts[name] || 0}</p>
            </div>

            {currentCard && (
              <div className="space-y-2 mt-4 h-[660px] overflow-x-auto">
                {currentCard?.map((item) => {
                  return (
                    <div
                      className="bg-white px-2 rounded-md py-2"
                      key={item?.id}
                    >
                      <div className="flex justify-between">
                        <div className="flex items-center gap-1">
                          <div className="w-[30px] h-[30px] rounded-full">
                            <Image
                              src={item?.clientAvatar}
                              alt={item?.clientName}
                              width={100}
                              height={100}
                              className="w-full h-full rounded-full object-cover"
                            />
                          </div>
                          <p className="text-sm">{item?.clientName}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-[30px] h-[30px] rounded-full">
                            <Image
                              src={item?.assignedAvatar}
                              alt={item?.assignedTo}
                              width={100}
                              height={100}
                              className="w-full h-full rounded-full object-cover"
                            />
                          </div>
                          <p className="text-sm">{item?.assignedTo}</p>
                        </div>
                      </div>

                      <div className="my-4 flex justify-between">
                        <div className="flex gap-1 items-center justify-center">
                          <Stack />
                          <p className="text-sm max-w-[150px] truncate">
                            {item?.description}
                          </p>
                        </div>
                        <div className="flex justify-center gap-[1px] items-center bg-slate-100 p-2 rounded-md">
                          <ClipboardText />
                          <p className="text-sm max-w-[150px] truncate">
                            {item?.markedChecked}/{item?.totalCheckList}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
