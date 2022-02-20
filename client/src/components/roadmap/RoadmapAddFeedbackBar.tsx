import { Link } from 'react-router-dom';
import AddFeedbackBtn from '../home/AddFeedbackBtn';
import BackButton from '../../ui/BackButton';

const RoadmapAddFeedbackBar = () => {
  return (
    <div className='bg-darkNavy p-6 md:rounded-lg '>
      <Link to='/'>
        <BackButton color='navy' />
      </Link>
      <div className='flex items-end justify-between '>
        <h1 className='text-white text-h3 font-bold '>Roadmap</h1>
        <AddFeedbackBtn />
      </div>
    </div>
  );
};

export default RoadmapAddFeedbackBar;
