import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FeedbackType } from '../utils/type';
import { fetchSuggestions } from '../utils/hooks';
import FeedbackCard from '../components/FeedbackCard';
import BackButton from '../ui/BackButton';
import Button from '../ui/Button';
import CommentCard from '../components/feedback/CommentCard';

const Feedback = () => {
  const { id } = useParams();
  const [feedbackList, setFeedbackList] = useState<
    FeedbackType[] | undefined
  >();
  const feedback = feedbackList?.filter(item => `${item.id}` === id);

  useEffect(() => {
    try {
      fetchSuggestions('../data.json', setFeedbackList);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className='min-h-screen min-w-screen px-6 py-6 w-full '>
      <div className='w-full flex items-center justify-between'>
        <BackButton color='white' />
        <Button color='blue'>Edit Feedback</Button>
      </div>

      {feedback ? (
        <div>
          <div className='my-6 '>
            <FeedbackCard feedback={feedback[0]} />
          </div>

          <CommentCard comments={feedback[0].comments} />
        </div>
      ) : (
        <div className='flex items-center justify-center w-full h-full '>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Feedback;
