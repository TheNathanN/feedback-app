import React from 'react';
import { UserType } from '../../utils/type';

interface Props {
  user: UserType;
  replyState: boolean;
  setReplyState: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserCard = ({ user, replyState, setReplyState }: Props) => {
  const { image, name, username } = user;

  return (
    <div className='flex items-center justify-between text-body3 mt-4 '>
      <img className='rounded-full w-11 mr-4 ' src={`.${image}`} alt={name} />
      <div className='w-full '>
        <p className='font-bold text-navy '>{name}</p>
        <p className='text-lightNavy '>@{username}</p>
      </div>
      <p
        className='font-semibold text-blue cursor-pointer hover:underline underline-offset-1 '
        onClick={() => setReplyState(!replyState)}
      >
        Reply
      </p>
    </div>
  );
};

export default UserCard;
