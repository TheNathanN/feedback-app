import { useState } from 'react';
import FeedbackCard from '../components/FeedbackCard';
import NoFeedbackCard from '../components/NoFeedbackCard';
import AddFeedbackBar from '../components/suggestions/AddFeedbackBar';
import Nav from '../components/suggestions/Nav';

const Suggestions = () => {
  const [openNav, setOpenNav] = useState(false);
  const [feedbackList, setFeedbackList] = useState([]);

  return (
    <div>
      <Nav openNav={openNav} setOpenNav={setOpenNav} />
      <div>
        <AddFeedbackBar />

        <div className='flex flex-col items-center justify-center '>
          {feedbackList[0] ? <FeedbackCard /> : <NoFeedbackCard />}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
