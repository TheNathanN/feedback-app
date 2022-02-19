import { useEffect, useState } from 'react';
import { FeedbackType } from '../utils/type';
import { fetchSuggestions } from '../utils/utilFunctions';
import RoadmapAddFeedbackBar from '../components/roadmap/RoadmapAddFeedbackBar';
import RoadmapMobileNav from '../components/roadmap/RoadmapMobileNav';

const Roadmap = () => {
  const [feedbackList, setFeedbacklist] = useState<FeedbackType[]>();
  const [selectedStatus, setSelectedStatus] = useState<
    'Planned' | 'In-Progress' | 'Live'
  >('Planned');

  useEffect(() => {
    fetchSuggestions('data.json', setFeedbacklist);
  }, []);

  return (
    <div>
      <RoadmapAddFeedbackBar />
      <div className='md:hidden '>
        <RoadmapMobileNav
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          feedback={feedbackList}
        />
      </div>
    </div>
  );
};

export default Roadmap;
