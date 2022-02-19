import { CommentType } from '../../utils/type';
import { getCommentCount, pluralCheck } from '../../utils/utilFunctions';
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

      {comments
        ? comments.map(comment => (
            <div
              key={comment.id}
              className='border-b-[1px] border-whiteBlue last:border-0 '
            >
              <CommentContainer comment={comment} />
            </div>
          ))
        : ''}
    </div>
  );
};

export default CommentCard;
