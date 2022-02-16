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
    window.scrollTo(0, 0);
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
      <div className='w-full h-full bg-whiteBlue2 px-4 pt-4 pb-8 '>
        <div className='flex flex-col items-center justify-center h-full w-full '>
          {feedbackList ? (
            feedbackList.map((feedback: FeedbackType) => (
              <div className='w-11/12 md:w-10/12' key={feedback.id}>
                <FeedbackCard feedback={feedback} />
              </div>
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
