import { ReplyType } from '../../utils/type';
import UserCard from './UserCard';

interface Props {
  reply: ReplyType;
}

const ReplyContainer = ({ reply }: Props) => {
  const { user, content, replyingTo } = reply;

  return (
    <div>
      <UserCard user={user} />
      <p className='text-body3 text-lightNavy my-4 '>
        <span className='font-bold text-purple '>@{replyingTo} </span>
        {content}
      </p>
    </div>
  );
};

export default ReplyContainer;
