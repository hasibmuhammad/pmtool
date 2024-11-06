"use client";
import CalendarDotsIcon from "@/components/ui/CalendarDotsIcon";
import ChatsCircleIcon from "@/components/ui/ChatsCircleIcon";
import ClipboardTextIcon from "@/components/ui/ClipboardTextIcon";
import LinkIcon from "@/components/ui/LinkIcon";
import Loader from "@/components/ui/Loader";
import StackIcon from "@/components/ui/StackIcon";
import { ITaskInfoItem } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";
import { useEffect } from "react";

const Home = (): JSX.Element => {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ["fetchTasks"],
    queryFn: async () => {
      const res: AxiosResponse<{ tasks: ITaskInfoItem[] }> = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/tasks`
      );

      return res.data;
    },
    refetchOnWindowFocus: false,
  });

  const tasks = data?.tasks || [];

  const taskStatusCounts = tasks.reduce<Record<string, number>>((acc, task) => {
    acc[task.taskStatus] = (acc[task.taskStatus] || 0) + 1;
    return acc;
  }, {});

  const taskStatuses = [
    { name: "Incomplete", color: "bg-red-600" },
    { name: "To Do", color: "bg-[#00B5FF]" },
    { name: "Doing", color: "bg-[#FFE700]" },
    { name: "Under Review", color: "bg-[#FFC107]" },
    { name: "Completed", color: "bg-green-500" },
    { name: "Overdue", color: "bg-gray-600" },
  ];

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <div className="w-full flex gap-4">
          {taskStatuses.map(({ name, color }) => {
            const currentCard = tasks.filter(
              (item) => item.taskStatus === name
            );
            return (
              <div
                key={name}
                className="flex-shrink-0 bg-slate-100 min-w-[350px] px-4 py-4"
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
                                  loading="lazy"
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
                                  loading="lazy"
                                />
                              </div>
                              <p className="text-sm">{item?.assignedTo}</p>
                            </div>
                          </div>

                          <div className="my-2 flex justify-between">
                            <div className="flex gap-1 items-center justify-center">
                              <StackIcon />
                              <p className="text-sm max-w-[150px] truncate">
                                {item?.description}
                              </p>
                            </div>
                            <div className="flex justify-center gap-[1px] items-center bg-slate-100 p-2 rounded-md">
                              <ClipboardTextIcon />
                              <p className="text-sm max-w-[150px] truncate">
                                {item?.markedChecked}/{item?.totalCheckList}
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between">
                            <div className="flex gap-1">
                              <div className="w-[30px] h-[30px] rounded-full">
                                <Image
                                  src={item?.otherMemberAvatar1}
                                  alt={item?.assignedTo}
                                  width={100}
                                  height={100}
                                  className="w-full h-full rounded-full object-cover"
                                />
                              </div>
                              <div className="w-[30px] h-[30px] rounded-full">
                                <Image
                                  src={item?.otherMemberAvatar2}
                                  alt={item?.assignedTo}
                                  width={100}
                                  height={100}
                                  className="w-full h-full rounded-full object-cover"
                                />
                              </div>
                              <div className="bg-slate-100 w-[30px] h-[30px] rounded-full flex justify-center items-center text-sm">
                                {item?.otherMemberCount}+
                              </div>
                            </div>

                            <div className="flex gap-1 items-center">
                              <ChatsCircleIcon />
                              <p className="text-sm">{item?.commentCount}</p>
                            </div>
                            <div className="flex gap-1 items-center">
                              <LinkIcon
                                handleRefetch={() => refetch()}
                                id={item?._id.toString()}
                              />
                              <p className="text-sm">
                                {item?.attachments?.length}
                              </p>
                            </div>
                            <div className="flex gap-1 items-center">
                              <CalendarDotsIcon />
                              <p className="text-sm">{item?.dueDate}</p>
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
      )}
    </>
  );
};

export default Home;
