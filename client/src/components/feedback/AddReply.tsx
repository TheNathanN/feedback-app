import { useState, useEffect } from 'react';
import Button from '../../ui/Button';
import TextArea from '../../ui/TextArea';
import { fetchUser } from '../../utils/utilFunctions';
import { ReplyType, UserType } from '../../utils/type';

interface Props {
  user: UserType;
  replyUser?: UserType;
}

const AddReply = ({ user, replyUser }: Props) => {
  const [currentUser, setCurrentUser] = useState<UserType>();
  const [inputState, setInputState] = useState('');

  useEffect(() => {
    if (!currentUser) {
      fetchUser('../../data.json', setCurrentUser);
    }
    setInputState(replyUser ? `@${replyUser.username}` : `@${user.username}`);
  }, [replyUser, replyUser?.username, user.username, currentUser]);

  const handleSubmit = () => {
    if (currentUser) {
      const reply: ReplyType = {
        content: inputState,
        replyingTo: replyUser ? `@${replyUser.username}` : `@${user.username}`,
        user: currentUser,
      };
      alert(
        `Reply to ${
          replyUser ? `@${replyUser.username}` : `@${user.username}`
        }: '${reply.content}'`
      );
    }
  };

  return (
    <div>
      <form
        className='flex flex-col items-start justify-center md:flex-row md:justify-between '
        onSubmit={handleSubmit}
      >
        <div className='md:w-10/12 '>
          <TextArea
            name='reply'
            state={inputState}
            setState={setInputState}
            cols={400}
            rows={4}
          />
        </div>

        <div className='mt-1 mb-2 md:mt-0 '>
          <Button color='purple' type='submit'>
            Post Reply
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddReply;
