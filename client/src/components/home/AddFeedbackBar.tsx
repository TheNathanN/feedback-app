import SortingDropdown from './SortingDropdown';
import AddFeedbackBtn from './AddFeedbackBtn';
import SuggestionsIcon from '../svg/SuggestionsIcon';

const AddFeedbackBar = () => {
  return (
    <div className='flex bg-navy items-center justify-between py-2 px-4 md:py-6 md:rounded-md '>
      <div className='flex items-center justify-start w-full '>
        <div className='hidden md:flex w-4/12  '>
          <div className='mr-4 '>
            <SuggestionsIcon />
          </div>

          <p className='font-bold text-white text-h3 '>6 Suggestions</p>
        </div>

        <div className='md:w-4/12 '>
          <SortingDropdown />
        </div>
      </div>

      <AddFeedbackBtn />
    </div>
  );
};

export default AddFeedbackBar;
