import { ReplyType } from '../../utils/type';
import UserCard from './UserCard';

interface Props {
  reply: ReplyType;
  replyState: boolean;
  setReplyState: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReplyContainer = ({ reply, replyState, setReplyState }: Props) => {
  const { user, content, replyingTo } = reply;

  return (
    <div>
      <UserCard
        user={user}
        replyState={replyState}
        setReplyState={setReplyState}
      />
      <p className='text-body3 text-lightNavy my-4 md:pl-16 '>
        <span className='font-bold text-purple '>@{replyingTo} </span>
        {content}
      </p>
    </div>
  );
};

export default ReplyContainer;
