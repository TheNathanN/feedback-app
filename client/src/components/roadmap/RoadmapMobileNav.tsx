import { FeedbackType } from '../../utils/type';
import { getStatusCount } from '../../utils/utilFunctions';

interface Props {
  feedback?: FeedbackType[];
}

const RoadmapMobileNav = ({ feedback }: Props) => {
  return (
    <div className='flex text-center border-b-[1px] border-navy border-opacity-25 '>
      <div className='w-1/3 py-6 text-body3 font-bold text-navy text-opacity-30 '>
        <p>Planned ({getStatusCount('Planned', feedback)})</p>
      </div>

      <div className='w-1/3 py-6 text-body3 font-bold text-navy text-opacity-30 '>
        <p>In-Progress ({getStatusCount('In-Progress', feedback)})</p>
      </div>

      <div className='w-1/3 py-6 text-body3 font-bold text-navy text-opacity-30 '>
        <p>Live ({getStatusCount('Live', feedback)})</p>
      </div>
    </div>
  );
};

export default RoadmapMobileNav;
