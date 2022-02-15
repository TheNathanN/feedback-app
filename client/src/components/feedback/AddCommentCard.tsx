import { useState } from 'react';
import Button from '../../ui/Button';
import TextArea from '../../ui/TextArea';

const AddCommentCard = () => {
  const [newComment, setNewComment] = useState('');
  const maxLength = 250;

  return (
    <div className='bg-white flex flex-col items-start justify-center my-6 p-4 rounded-lg '>
      <p className='text-navy font-bold text-h3 '>Add Comment</p>

      <form>
        <div className='my-4 '>
          <TextArea
            name='comment'
            rows={3}
            cols={400}
            state={newComment}
            setState={setNewComment}
            placeholder='Type your comment here'
          />
        </div>

        <div className='flex items-center justify-between w-full mb-2 '>
          <div>
            <p className='text-body3 text-lightNavy '>
              {maxLength - newComment.length} Characters Left
            </p>
          </div>
          <Button type='submit' color='purple'>
            Post Comment
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddCommentCard;
