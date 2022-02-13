import { CommentType } from '../../utils/type';
import { getCommentCount, pluralCheck } from '../../utils/hooks';
import CommentContainer from './CommentContainer';

interface Props {
  comments?: CommentType[];
}

const CommentCard = ({ comments }: Props) => {
  const count = getCommentCount(comments);

  return (
    <div className='bg-white p-6 rounded-lg '>
      <div>
        <p className='text-h3 font-bold text-navy '>
          {count} Comment{pluralCheck(count)}
        </p>
      </div>
      <CommentContainer />
    </div>
  );
};

export default CommentCard;
