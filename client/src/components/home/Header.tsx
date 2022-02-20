import ProjectInfo from './ProjectInfo';
import FilterCard from './FilterCard';
import RoadmapCard from './RoadmapCard';
import { FeedbackType } from '../../utils/type';

interface Props {
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
  feedbackList?: FeedbackType[];
}

const Header = ({ openNav, setOpenNav, feedbackList }: Props) => {
  return (
    <div className='flex w-full h-full md:pt-8 md:pb-4 lg:flex-col lg:py-0 lg:w-2/3 '>
      <div className='w-full md:w-1/3 md:p-4 lg:w-full lg:p-0 lg:mb-2 lg:h-36 '>
        <ProjectInfo openNav={openNav} setOpenNav={setOpenNav} />
      </div>

      <div className='hidden md:flex w-1/3 p-4 lg:w-full lg:p-0 lg:my-2 '>
        <FilterCard />
      </div>

      <div className='hidden md:flex w-1/3 p-4 lg:w-full lg:p-0 lg:my-2 '>
        <RoadmapCard feedbackList={feedbackList} />
      </div>
    </div>
  );
};

export default Header;
