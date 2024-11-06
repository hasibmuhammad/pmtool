export interface ITaskInfoItem {
  id: number;
  clientName: string;
  clientAvatar: string;
  assignedTo: string;
  assignedAvatar: string;
  description: string;
  totalCheckList: number;
  markedChecked: number;
  dueDate: string;
  attachmentCount: number;
  commentCount: number;
  otherMemberAvatar1: string;
  otherMemberAvatar2: string;
  otherMemberCount: number;
  taskStatus:
    | "Incomplete"
    | "To Do"
    | "Doing"
    | "Under Review"
    | "Completed"
    | "Overdue";
}
