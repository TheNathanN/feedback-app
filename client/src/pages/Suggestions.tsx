import { useState, useEffect } from 'react';
import FeedbackCard from '../components/FeedbackCard';
import NoFeedbackCard from '../components/NoFeedbackCard';
import AddFeedbackBar from '../components/suggestions/AddFeedbackBar';
import Nav from '../components/suggestions/Nav';
import { Feedback } from '../utils/type';

const Suggestions = () => {
  const [openNav, setOpenNav] = useState(false);
  const [feedbackList, setFeedbackList] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('data.json');
      const data = await response.json();
      setFeedbackList(data.productRequests);
    };

    fetchData();
  }, []);

  return (
    <div className='w-full h-full flex flex-col '>
      <Nav openNav={openNav} setOpenNav={setOpenNav} />
      <AddFeedbackBar />
      <div className='w-full h-full bg-whiteBlue2 py-6 '>
        <div className='flex flex-col items-center justify-center h-full w-full '>
          {feedbackList ? (
            feedbackList.map((feedback: Feedback) => (
              <FeedbackCard
                key={feedback.id}
                title={feedback.title}
                category={feedback.category}
                upvotes={feedback.upvotes}
                description={feedback.description}
                comments={feedback.comments}
              />
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
