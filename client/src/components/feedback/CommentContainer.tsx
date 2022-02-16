import { useState } from 'react';
import { CommentType } from '../../utils/type';
import ReplyContainer from './ReplyContainer';
import UserCard from './UserCard';
import AddReply from './AddReply';

interface Props {
  comment: CommentType;
}

const CommentContainer = ({ comment }: Props) => {
  const { user, content, replies } = comment;

  const [mainReply, setMainReply] = useState(false);
  const [replyReply, setReplyReply] = useState(false);

  return (
    <div className='h-full w-full'>
      <UserCard
        user={user}
        replyState={mainReply}
        setReplyState={setMainReply}
      />
      <p className='text-body3 text-lightNavy my-4 md:ml-14 '>{content}</p>
      {replies ? (
        <div className='relative h-full w-full '>
          <div className='border-l-[1px] border-whiteBlue h-4/6 md:h-60 absolute md:-top-12 md:left-4  '></div>
          {replies.map(reply => (
            <div key={replies.indexOf(reply)} className='ml-6 md:ml-8 '>
              <ReplyContainer
                replyState={replyReply}
                setReplyState={setReplyReply}
                reply={reply}
              />
            </div>
          ))}
          <div className='ml-6 md:ml-8 md:pl-16 '>
            {replyReply ? <AddReply /> : ''}
          </div>
        </div>
      ) : (
        ''
      )}

      <div className='md:ml-14 '>{mainReply ? <AddReply /> : ''}</div>
    </div>
  );
};

export default CommentContainer;
