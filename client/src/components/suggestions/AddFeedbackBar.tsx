import SortingDropdown from '../../ui/SortingDropdown';
import AddFeedbackBtn from './AddFeedbackBtn';

const AddFeedbackBar = () => {
  return (
    <div className='flex bg-navy items-center justify-between py-2 px-4 '>
      <div>
        <SortingDropdown />
      </div>

      <AddFeedbackBtn />
    </div>
  );
};

export default AddFeedbackBar;
