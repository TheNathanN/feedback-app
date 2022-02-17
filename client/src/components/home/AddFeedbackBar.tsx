import { Link } from 'react-router-dom';
import SortingDropdown from '../../ui/SortingDropdown';
import AddFeedbackBtn from './AddFeedbackBtn';

const AddFeedbackBar = () => {
  return (
    <div className='flex bg-navy items-center justify-between py-2 px-4 '>
      <div>
        <SortingDropdown />
      </div>

      <Link to='/feedback/new'>
        <AddFeedbackBtn />
      </Link>
    </div>
  );
};

export default AddFeedbackBar;
