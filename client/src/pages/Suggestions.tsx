import { useState, useEffect } from 'react';
import FeedbackCard from '../components/FeedbackCard';
import NoFeedbackCard from '../components/NoFeedbackCard';
import AddFeedbackBar from '../components/suggestions/AddFeedbackBar';
import Nav from '../components/suggestions/Nav';
import { FeedbackType } from '../utils/type';
import { fetchSuggestions } from '../utils/hooks';

const Suggestions = () => {
  const [openNav, setOpenNav] = useState(false);
  const [feedbackList, setFeedbackList] = useState<any>();

  useEffect(() => {
    try {
      fetchSuggestions('data.json', setFeedbackList);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className='min-w-screen min-h-screen flex flex-col '>
      <Nav openNav={openNav} setOpenNav={setOpenNav} />
      <AddFeedbackBar />
      <div className='w-full h-full bg-whiteBlue2 px-4 py-4 '>
        <div className='flex flex-col items-center justify-center h-full w-full '>
          {feedbackList ? (
            feedbackList.map((feedback: FeedbackType) => (
              <FeedbackCard key={feedback.id} feedback={feedback} />
            ))
          ) : (
            <NoFeedbackCard />
          )}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
