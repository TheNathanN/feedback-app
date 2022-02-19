import { useEffect, useState } from 'react';
import { FeedbackType } from '../utils/type';
import { fetchSuggestions } from '../utils/utilFunctions';
import RoadmapAddFeedbackBar from '../components/roadmap/RoadmapAddFeedbackBar';
import RoadmapMobileNav from '../components/roadmap/RoadmapMobileNav';

const Roadmap = () => {
  const [feedbackList, setFeedbacklist] = useState<FeedbackType[]>();

  useEffect(() => {
    fetchSuggestions('data.json', setFeedbacklist);
  }, []);

  return (
    <div>
      <RoadmapAddFeedbackBar />
      <RoadmapMobileNav feedback={feedbackList} />
    </div>
  );
};

export default Roadmap;
