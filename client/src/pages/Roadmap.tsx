import { useEffect, useState } from 'react';
import { FeedbackType, StatusType } from '../utils/type';
import { fetchSuggestions } from '../utils/utilFunctions';
import { roadmapLabels } from '../utils/labels';
import RoadmapAddFeedbackBar from '../components/roadmap/RoadmapAddFeedbackBar';
import RoadmapMobileNav from '../components/roadmap/RoadmapMobileNav';
import RoadmapContentContainer from '../components/roadmap/RoadmapContentContainer';

const Roadmap = () => {
  const [feedbackList, setFeedbackList] = useState<FeedbackType[]>();
  const [selectedStatus, setSelectedStatus] =
    useState<StatusType>('In-Progress');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchSuggestions('data.json', setFeedbackList, signal);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className='md:py-12 md:px-8 '>
      <div className='md:mb-6 '>
        <RoadmapAddFeedbackBar />
      </div>
      <div className='md:hidden '>
        <RoadmapMobileNav
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          feedback={feedbackList}
        />
        <div className='p-4 '>
          <RoadmapContentContainer
            selectedStatus={selectedStatus}
            feedbackList={feedbackList}
          />
        </div>
      </div>

      <div className='hidden md:flex '>
        {roadmapLabels.map((label, indx) => (
          <RoadmapContentContainer
            key={indx}
            selectedStatus={label.title}
            feedbackList={feedbackList}
          />
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
