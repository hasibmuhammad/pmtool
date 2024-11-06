// import { ITaskInfoItem } from "@/types";

// export const taskInfoItems: ITaskInfoItem[] = [
//   // Incomplete Tasks
//   ...Array.from<ITaskInfoItem, ITaskInfoItem>({ length: 10 }, (_, i) => ({
//     id: i + 1,
//     clientName: `Client ${i + 1}`,
//     assignedTo: `User ${i + 1}`,
//     description: "Task description for incomplete status.",
//     totalCheckList: 5,
//     markedChecked: 2,
//     dueDate: "07-11-2024",
//     attachments: [],
//     commentCount: 3,
//     assignedAvatar:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar2_xvk8ow.png",
//     clientAvatar:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar1_w69qnv.png",
//     otherMemberAvatar1:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar1_w69qnv.png",
//     otherMemberAvatar2:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar2_xvk8ow.png",
//     otherMemberCount: 2,
//     taskStatus: "Incomplete",
//   })),
//   // To Do Tasks
//   ...Array.from<ITaskInfoItem, ITaskInfoItem>({ length: 10 }, (_, i) => ({
//     id: i + 11,
//     clientName: `Client ${i + 11}`,
//     assignedTo: `User ${i + 11}`,
//     description: "Task description for to-do status.",
//     totalCheckList: 4,
//     markedChecked: 1,
//     dueDate: "08-11-2024",
//     attachments: [],
//     commentCount: 2,
//     assignedAvatar:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar2_xvk8ow.png",
//     clientAvatar:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar1_w69qnv.png",
//     otherMemberAvatar1:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar1_w69qnv.png",
//     otherMemberAvatar2:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar2_xvk8ow.png",
//     otherMemberCount: 1,
//     taskStatus: "To Do",
//   })),
//   // Doing Tasks
//   ...Array.from<ITaskInfoItem, ITaskInfoItem>({ length: 10 }, (_, i) => ({
//     id: i + 21,
//     clientName: `Client ${i + 21}`,
//     assignedTo: `User ${i + 21}`,
//     description: "Task description for doing status.",
//     totalCheckList: 3,
//     markedChecked: 1,
//     dueDate: "09-11-2024",
//     attachments: [],
//     commentCount: 4,
//     assignedAvatar:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar2_xvk8ow.png",
//     clientAvatar:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar1_w69qnv.png",
//     otherMemberAvatar1:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar1_w69qnv.png",
//     otherMemberAvatar2:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar2_xvk8ow.png",
//     otherMemberCount: 3,
//     taskStatus: "Doing",
//   })),
//   // Under Review Tasks
//   ...Array.from<ITaskInfoItem, ITaskInfoItem>({ length: 10 }, (_, i) => ({
//     id: i + 31,
//     clientName: `Client ${i + 31}`,
//     assignedTo: `User ${i + 31}`,
//     description: "Task description for under review status.",
//     totalCheckList: 5,
//     markedChecked: 5,
//     dueDate: "10-11-2024",
//     attachments: [],
//     commentCount: 6,
//     assignedAvatar:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar2_xvk8ow.png",
//     clientAvatar:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar1_w69qnv.png",
//     otherMemberAvatar1:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar1_w69qnv.png",
//     otherMemberAvatar2:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar2_xvk8ow.png",
//     otherMemberCount: 4,
//     taskStatus: "Under Review",
//   })),
//   // Completed Tasks
//   ...Array.from<ITaskInfoItem, ITaskInfoItem>({ length: 10 }, (_, i) => ({
//     id: i + 41,
//     clientName: `Client ${i + 41}`,
//     assignedTo: `User ${i + 41}`,
//     description: "Task description for completed status.",
//     totalCheckList: 6,
//     markedChecked: 6,
//     dueDate: "11-11-2024",
//     attachments: [],
//     commentCount: 5,
//     assignedAvatar:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar2_xvk8ow.png",
//     clientAvatar:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar1_w69qnv.png",
//     otherMemberAvatar1:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar1_w69qnv.png",
//     otherMemberAvatar2:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar2_xvk8ow.png",
//     otherMemberCount: 3,
//     taskStatus: "Completed",
//   })),
//   // Overdue Tasks
//   ...Array.from<ITaskInfoItem, ITaskInfoItem>({ length: 10 }, (_, i) => ({
//     id: i + 51,
//     clientName: `Client ${i + 51}`,
//     assignedTo: `User ${i + 51}`,
//     description: "Task description for overdue status.",
//     totalCheckList: 5,
//     markedChecked: 0,
//     dueDate: "06-11-2024",
//     attachments: [],
//     commentCount: 4,
//     assignedAvatar:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar2_xvk8ow.png",
//     clientAvatar:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar1_w69qnv.png",
//     otherMemberAvatar1:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar1_w69qnv.png",
//     otherMemberAvatar2:
//       "https://res.cloudinary.com/hasibmuhammad/image/upload/v1730895015/pmtool/avatar2_xvk8ow.png",
//     otherMemberCount: 1,
//     taskStatus: "Overdue",
//   })),
// ];
