import { FeedbackType } from '../../utils/type';
import FeedbackCard from '../FeedbackCard';

interface Props {
  selectedStatus: string;
  feedback: FeedbackType;
}

const StatusCard = ({ selectedStatus, feedback }: Props) => {
  return (
    <div
      className={`bg-white border-t-4 rounded-md my-4 p-4 ${
        selectedStatus === 'Planned'
          ? 'border-orange'
          : selectedStatus === 'In-Progress'
          ? 'border-purple'
          : 'border-lightBlue'
      }
     `}
    >
      <div className='flex items-center '>
        <div
          className={`w-2 h-2 rounded-full ${
            selectedStatus === 'Planned'
              ? 'bg-orange'
              : selectedStatus === 'In-Progress'
              ? 'bg-purple'
              : 'bg-lightBlue'
          }  `}
        />
        <p className='text-body3 text-lightNavy mx-2 '>{feedback.status}</p>
      </div>
      <FeedbackCard feedback={feedback} statusCard={true} />
    </div>
  );
};

export default StatusCard;
