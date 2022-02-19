import { FeedbackType } from '../../utils/type';
import { roadmapLabels } from '../../utils/labels';
import RoadmapLabel from './RoadmapLabel';
import { Link } from 'react-router-dom';

interface Props {
  feedbackList?: FeedbackType[];
}

const RoadmapCard = ({ feedbackList }: Props) => {
  return (
    <div className='w-11/12 bg-white rounded-md p-4 flex items-center justify-start flex-wrap mt-4 '>
      <div className='flex items-center justify-between w-full '>
        <h2 className='font-bold text-h3 text-navy '>Roadmap</h2>
        <Link to='/roadmap'>
          <button
            type='button'
            className='text-blue text-body3 font-semibold hover:underline '
          >
            View
          </button>
        </Link>
      </div>
      <div className='w-full mt-4 '>
        {roadmapLabels.map((label, indx) => (
          <RoadmapLabel key={indx} status={label} feedbackList={feedbackList} />
        ))}
      </div>
    </div>
  );
};

export default RoadmapCard;
