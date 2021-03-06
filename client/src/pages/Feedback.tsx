import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FeedbackType } from '../utils/type';
import { fetchSuggestions } from '../utils/utilFunctions';
import FeedbackCard from '../components/FeedbackCard';
import BackButton from '../ui/BackButton';
import Button from '../ui/Button';
import CommentCard from '../components/feedback/CommentCard';
import AddCommentCard from '../components/feedback/AddCommentCard';

const Feedback = () => {
  const { id } = useParams();
  const [feedbackList, setFeedbackList] = useState<FeedbackType[]>();
  const feedback = feedbackList?.filter(item => `${item.id}` === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    const controller = new AbortController();
    const signal = controller.signal;

    fetchSuggestions('../data.json', setFeedbackList, signal);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className='min-h-screen min-w-screen px-6 py-6 w-full flex items-center justify-center md:py-16 '>
      <div className='max-w-[730px] md:flex md:flex-col md:items-center md:justify-center '>
        <div className='w-full flex items-center justify-between '>
          <BackButton color='white' />
          <Link to={`/feedback/${id}/edit`}>
            <Button type='button' color='blue'>
              Edit Feedback
            </Button>
          </Link>
        </div>

        {feedback ? (
          <div>
            <div className='my-6 '>
              <FeedbackCard feedback={feedback[0]} />
            </div>

            <CommentCard comments={feedback[0].comments} />

            <AddCommentCard comments={feedback[0].comments} />
          </div>
        ) : (
          <div className='flex items-center justify-center w-screen h-screen '>
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
