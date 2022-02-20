import { FeedbackType, StatusType } from '../../utils/type';
import RoadmapNavLabel from './RoadmapNavLabel';

interface Props {
  selectedStatus: StatusType;
  setSelectedStatus: React.Dispatch<React.SetStateAction<StatusType>>;
  feedback?: FeedbackType[];
}

const RoadmapMobileNav = ({
  selectedStatus,
  setSelectedStatus,
  feedback,
}: Props) => {
  return (
    <div className='flex text-center border-b-[1px] border-navy border-opacity-25 '>
      <RoadmapNavLabel
        status='Planned'
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        feedback={feedback}
      />
      <RoadmapNavLabel
        status='In-Progress'
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        feedback={feedback}
      />
      <RoadmapNavLabel
        status='Live'
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        feedback={feedback}
      />
    </div>
  );
};

export default RoadmapMobileNav;
