import { CommentType } from '../../utils/type';
import ReplyContainer from './ReplyContainer';
import UserCard from './UserCard';

interface Props {
  comment: CommentType;
}

const CommentContainer = ({ comment }: Props) => {
  const { user, content, replies } = comment;

  return (
    <div className='h-full w-full'>
      <UserCard user={user} />
      <p className='text-body3 text-lightNavy my-4 md:ml-14 '>{content}</p>
      {replies ? (
        <div className='relative h-full w-full '>
          <div className='border-l-[1px] border-whiteBlue h-4/6 md:h-60 w-full absolute md:-top-12  '></div>
          {replies.map(reply => (
            <div key={replies.indexOf(reply)} className='ml-6 md:ml-8 '>
              <ReplyContainer reply={reply} />
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default CommentContainer;
