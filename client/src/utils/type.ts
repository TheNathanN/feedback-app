export interface UserType {
  image: string;
  name: string;
  username: string;
  id?: number;
}

export interface ReplyType {
  content: string;
  replying_to: string;
  user_id: number;
  comment_id: number;
}

export interface CommentType {
  content: string;
  user_id: number;
  feedback_id: number;
  id?: number;
}

export interface FeedbackType {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
}

export type StatusType = 'Planned' | 'In-Progress' | 'Live';
