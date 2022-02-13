import CommentCount from '../ui/CommentCount';
import TagButton from '../ui/TagButton';
import UpvoteButton from '../ui/UpvoteButton';
import { Comment } from '../utils/type';

interface Props {
  title: string;
  category: string;
  upvotes: number;
  description: string;
  comments: Comment[];
}

const FeedbackCard = ({
  title,
  category,
  upvotes,
  description,
  comments,
}: Props) => {
  const getCount = () => {
    let commentCount: number;
    let replyCount: number;
    let totalCount: number;

    if (comments) {
      const commentsWithReplies = comments.filter(comment => comment.replies);
      const replies = commentsWithReplies.map(comment => comment.replies);

      replyCount = replies[0] ? replies[0].length : 0;
      commentCount = comments.length;
      totalCount = commentCount + replyCount;

      return totalCount;
    }
    return 0;
  };

  const count = getCount();

  return (
    <div className='bg-white p-6 rounded-lg w-11/12 my-2 '>
      <div className='cursor-pointer '>
        <h2 className='text-body3 font-bold text-navy '>{title}</h2>
        <p className='text-body3 text-lightNavy my-2 '>{description}</p>
      </div>

      <TagButton active={false}>{category}</TagButton>

      <div className='flex items-center justify-between mt-4 '>
        <UpvoteButton active={false} total={upvotes} />
        <div className='md:hidden'>
          <CommentCount count={count} />
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
