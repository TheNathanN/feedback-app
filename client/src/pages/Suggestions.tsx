import { useState } from 'react';
import FeedbackCard from '../components/FeedbackCard';
import NoFeedbackCard from '../components/NoFeedbackCard';
import AddFeedbackBar from '../components/suggestions/AddFeedbackBar';
import Nav from '../components/suggestions/Nav';

const Suggestions = () => {
  const [openNav, setOpenNav] = useState(false);
  const [feedbackList, setFeedbackList] = useState([]);

  return (
    <div className='w-full h-full flex flex-col '>
      <Nav openNav={openNav} setOpenNav={setOpenNav} />
      <AddFeedbackBar />
      <div className='w-full h-full bg-whiteBlue2 '>
        <div className='flex flex-col items-center justify-center h-full w-full '>
          {feedbackList[0] ? <FeedbackCard /> : <NoFeedbackCard />}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
