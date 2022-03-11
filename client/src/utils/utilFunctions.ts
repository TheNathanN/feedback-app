import React from 'react';
import { CommentType, FeedbackType, ReplyType } from './type';

export const fetchSuggestions = async (signal?: AbortSignal) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/feedback`, {
      signal: signal,
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const fetchUsers = async (setState: React.Dispatch<any>) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users`);
  const data = await response.json();
  setState(data.users);
};

export const fetchUser = async (setState: React.Dispatch<any>) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/user`);
  const data = await response.json();
  setState(data.currentUser);
};

export const fetchComments = async (setState: React.Dispatch<any>) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/comment`);
  const commentsArray = await response.json();
  const comments = commentsArray.comments;
  setState(comments);
};

export const fetchReplies = async (setState: React.Dispatch<any>) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/reply`);
  const replyArray = await response.json();
  const replies = replyArray.replies;
  setState(replies);
};

export const getCommentCount = (
  comments?: CommentType[],
  replies?: ReplyType[],
  feedback?: FeedbackType
) => {
  let commentCount = 0;
  let replyCount = 0;
  let totalCount = 0;

  if (comments && feedback && replies) {
    const commentsOnFeedback = comments.filter(
      comment => comment.feedback_id === feedback.id
    );

    const commentReplies = commentsOnFeedback.filter(comment => {
      const hasReply = replies.find(reply => reply.comment_id === comment.id);
      if (hasReply) {
        return true;
      } else {
        return false;
      }
    });

    if (commentsOnFeedback.length < 1) {
      totalCount = 0;
    } else if (commentReplies.length < 1) {
      totalCount = commentsOnFeedback.length;
    } else {
      commentCount = commentsOnFeedback.length;
      replyCount = commentReplies.length;
      totalCount = commentCount + replyCount;
    }
  }

  return totalCount;
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
