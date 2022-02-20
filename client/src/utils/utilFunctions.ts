import { CommentType, FeedbackType } from './type';

export const fetchSuggestions = async (
  db: string,
  setState: React.Dispatch<any>,
  signal: AbortSignal
) => {
  try {
    const response = await fetch(db, { signal: signal });
    const data = await response.json();
    setState(data.productRequests);
  } catch (err) {
    console.log(err);
  }
};

export const fetchUser = async (db: string, setState: React.Dispatch<any>) => {
  const response = await fetch(db);
  const data = await response.json();
  setState(data.currentUser);
};

export const getCommentCount = (comments?: CommentType[]) => {
  let commentCount: number;
  let replyCount: number;
  let totalCount: number;

  if (comments) {
    const commentsWithReplies = comments.filter(comment => comment.replies);
    const replies = commentsWithReplies.map(comment => comment.replies);

    replyCount = replies[0] ? replies[0].length : 0;
    commentCount = comments.length;
    totalCount = commentCount + replyCount;

    return totalCount;
  }
  return 0;
};

export const getStatusCount = (
  status: string,
  feedbackList?: FeedbackType[]
) => {
  let count = 0;

  if (feedbackList) {
    for (let i = 0; i < feedbackList.length; i++) {
      feedbackList[i].status === status ? (count += 1) : (count += 0);
    }
  }

  return count;
};

export const pluralCheck = (count: number) => {
  if (count > 1 || count === 0) {
    return 's';
  }

  return;
};
