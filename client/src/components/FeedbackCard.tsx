import CommentCount from '../ui/CommentCount';
import TagButton from '../ui/TagButton';
import UpvoteButton from '../ui/UpvoteButton';
import { FeedbackType } from '../utils/type';
import { getCommentCount } from '../utils/hooks';

interface Props {
  feedback: FeedbackType;
}

const FeedbackCard = ({ feedback }: Props) => {
  const count = getCommentCount(feedback.comments);

  return (
    <div className='bg-white p-6 rounded-lg my-2 '>
      <div className='cursor-pointer '>
        <h2 className='text-body3 font-bold text-navy '>{feedback.title}</h2>
        <p className='text-body3 text-lightNavy my-2 '>
          {feedback.description}
        </p>
      </div>

      <TagButton active={false}>{feedback.category}</TagButton>

      <div className='flex items-center justify-between mt-4 '>
        <UpvoteButton active={false} total={feedback.upvotes} />
        <div className='md:hidden'>
          <CommentCount count={count} />
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
