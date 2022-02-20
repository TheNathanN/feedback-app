import CommentCount from '../ui/CommentCount';
import TagButton from '../ui/TagButton';
import UpvoteButton from '../ui/UpvoteButton';
import { FeedbackType } from '../utils/type';
import { getCommentCount } from '../utils/utilFunctions';
import { Link } from 'react-router-dom';

interface Props {
  feedback?: FeedbackType;
  statusCard?: true;
}

const FeedbackCard = ({ feedback, statusCard }: Props) => {
  const count = getCommentCount(feedback?.comments);

  return (
    <div
      className={`bg-white rounded-lg my-2 md:flex md:justify-between ${
        statusCard ? '' : 'p-6'
      }  `}
    >
      <div className='cursor-pointer md:flex '>
        <div className='hidden md:block ml-2 mr-10 '>
          <UpvoteButton active={false} total={feedback?.upvotes} />
        </div>

        <div>
          <Link to={`/feedback/${feedback?.id}`}>
            <h2 className='text-body3 font-bold text-navy md:text-h3 '>
              {feedback?.title}
            </h2>
            <p className='text-body3 text-lightNavy my-2 md:text-body1 '>
              {feedback?.description}
            </p>
          </Link>

          <TagButton active={false}>{feedback?.category}</TagButton>
        </div>
      </div>

      <div className='flex items-center justify-between mt-4 md:mt-0 '>
        <div className='md:hidden '>
          <UpvoteButton active={false} total={feedback?.upvotes} />
        </div>

        <div>
          <Link to={`/feedback/${feedback?.id}`}>
            <CommentCount count={count} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
