import { ReplyType, UserType } from '../../utils/type';
import UserCard from './UserCard';

interface Props {
  reply: ReplyType;
  replyState: boolean;
  setReplyState: React.Dispatch<React.SetStateAction<boolean>>;
  setReplyUser?: React.Dispatch<React.SetStateAction<UserType | undefined>>;
}

const ReplyContainer = ({
  reply,
  replyState,
  setReplyState,
  setReplyUser,
}: Props) => {
  const { user, content, replyingTo } = reply;

  return (
    <div>
      <UserCard
        user={user}
        replyState={replyState}
        setReplyState={setReplyState}
        setReplyUser={setReplyUser}
      />
      <p className='text-body3 text-lightNavy my-4 md:pl-16 '>
        <span className='font-bold text-purple '>@{replyingTo} </span>
        {content}
      </p>
    </div>
  );
};

export default ReplyContainer;
