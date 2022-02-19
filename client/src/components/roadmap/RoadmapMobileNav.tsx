import { FeedbackType } from '../../utils/type';
import RoadmapNavLabel from './RoadmapNavLabel';

interface Props {
  selectedStatus: 'Planned' | 'In-Progress' | 'Live';
  setSelectedStatus: React.Dispatch<
    React.SetStateAction<'Planned' | 'In-Progress' | 'Live'>
  >;
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
