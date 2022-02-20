export interface UserType {
  image: string;
  name: string;
  username: string;
}

export interface ReplyType {
  content: string;
  replyingTo: string;
  user: UserType;
}

export interface CommentType {
  id: number;
  content: string;
  user: UserType;
  replies?: ReplyType[];
}

export interface FeedbackType {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments?: CommentType[];
}

export type StatusType = 'Planned' | 'In-Progress' | 'Live';
