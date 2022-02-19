import { FeedbackType } from '../../utils/type';
import { roadmapLabels } from '../../utils/labels';
import RoadmapLabel from './RoadmapLabel';

interface Props {
  feedbackList?: FeedbackType[];
}

const RoadmapCard = ({ feedbackList }: Props) => {
  return (
    <div className='w-full bg-white rounded-md p-4 flex items-center justify-start flex-wrap mt-4 '>
      <div className='flex items-center justify-between w-full '>
        <h2 className='font-bold text-h3 text-navy '>Roadmap</h2>
        <button
          type='button'
          className='text-blue text-body3 font-semibold hover:underline '
        >
          View
        </button>
      </div>
      <div className='w-full mt-4 '>
        {roadmapLabels.map(label => (
          <RoadmapLabel status={label} feedbackList={feedbackList} />
        ))}
      </div>
    </div>
  );
};

export default RoadmapCard;
