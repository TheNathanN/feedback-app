import { roadmapLabels } from '../../utils/labels';
import { FeedbackType } from '../../utils/type';
import { getStatusCount } from '../../utils/utilFunctions';
import StatusCard from './StatusCard';

interface Props {
  selectedStatus: string;
  feedbackList?: FeedbackType[];
}

const RoadmapContentContainer = ({ selectedStatus, feedbackList }: Props) => {
  return (
    <div className='md:w-1/3 md:mx-1 '>
      <div>
        <h2 className='text-h3 font-bold text-navy '>
          {selectedStatus} ({getStatusCount(selectedStatus, feedbackList)})
        </h2>
        <p className='text-body3 text-lightNavy my-1 '>
          {roadmapLabels
            .filter(label => label.title === selectedStatus)
            .map(label => label.description)}
        </p>
      </div>

      <div>
        {feedbackList
          ?.filter(feedback => feedback.status === selectedStatus)
          .map((feedback, indx) => (
            <StatusCard
              key={indx}
              selectedStatus={selectedStatus}
              feedback={feedback}
            />
          ))}
      </div>
    </div>
  );
};

export default RoadmapContentContainer;
