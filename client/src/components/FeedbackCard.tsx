import CommentCount from '../ui/CommentCount';
import TagButton from '../ui/TagButton';
import UpvoteButton from '../ui/UpvoteButton';
import { CommentType, FeedbackType } from '../utils/type';
import { getCommentCount } from '../utils/utilFunctions';
import { Link } from 'react-router-dom';

interface Props {
  feedback?: FeedbackType;
  statusCard?: true;
  comments?: CommentType[];
}

const FeedbackCard = ({ feedback, statusCard, comments }: Props) => {
  const commentsOnCurrentFeedback = comments?.filter(
    comment => comment.feedback_id === feedback?.id
  );
  const count = getCommentCount(commentsOnCurrentFeedback);

  return (
    <div
      className={`bg-white rounded-lg my-2 ${
        !statusCard ? 'p-6 md:flex md:justify-between' : ''
      }`}
    >
      <div className={`cursor-pointer ${!statusCard ? 'md:flex' : ''} `}>
        <div className={`hidden ${!statusCard ? 'md:block ml-2 mr-10' : ''} `}>
          <UpvoteButton active={false} total={feedback?.upvotes} />
        </div>

        <div>
          <Link to={`/feedback/${feedback?.id}`}>
            <h2
              className={`text-body3 font-bold text-navy ${
                !statusCard ? 'md:text-h3' : ''
              } `}
            >
              {feedback?.title}
            </h2>
            <p
              className={`text-body3 text-lightNavy my-2 ${
                !statusCard ? 'md:text-body1' : ''
              } `}
            >
              {feedback?.description}
            </p>
          </Link>

          <TagButton active={false}>{feedback?.category}</TagButton>
        </div>
      </div>

      <div
        className={`flex items-center justify-between mt-4 ${
          !statusCard ? 'md:mt-0' : ''
        } `}
      >
        <div className={!statusCard ? 'md:hidden ' : ''}>
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
