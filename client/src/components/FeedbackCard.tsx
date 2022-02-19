import CommentCount from '../ui/CommentCount';
import TagButton from '../ui/TagButton';
import UpvoteButton from '../ui/UpvoteButton';
import { FeedbackType } from '../utils/type';
import { getCommentCount } from '../utils/utilFunctions';
import { Link } from 'react-router-dom';

interface Props {
  feedback: FeedbackType;
}

const FeedbackCard = ({ feedback }: Props) => {
  const count = getCommentCount(feedback.comments);

  return (
    <div className='bg-white p-6 rounded-lg my-2  '>
      <div className='cursor-pointer '>
        <Link to={`/feedback/${feedback.id}`}>
          <h2 className='text-body3 font-bold text-navy '>{feedback.title}</h2>
          <p className='text-body3 text-lightNavy my-2 '>
            {feedback.description}
          </p>
        </Link>
      </div>

      <TagButton active={false}>{feedback.category}</TagButton>

      <div className='flex items-center justify-between mt-4 '>
        <UpvoteButton active={false} total={feedback.upvotes} />
        <div>
          <Link to={`/feedback/${feedback.id}`}>
            <CommentCount count={count} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
