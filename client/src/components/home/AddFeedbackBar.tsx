import SortingDropdown from './SortingDropdown';
import AddFeedbackBtn from './AddFeedbackBtn';
import SuggestionsIcon from '../svg/SuggestionsIcon';
import { pluralCheck } from '../../utils/utilFunctions';

interface Props {
  count?: number;
}

const AddFeedbackBar = ({ count }: Props) => {
  return (
    <div className='flex bg-navy items-center justify-between py-2 px-4 md:py-6 md:rounded-md '>
      <div className='flex items-center justify-start w-full '>
        <div className='hidden md:flex w-4/12 lg:w-80  '>
          <div className='mr-4 '>
            <SuggestionsIcon />
          </div>

          <p className='font-bold text-white text-h3 '>
            {count} Suggestion{count ? pluralCheck(count) : 's'}
          </p>
        </div>

        <div className='md:w-5/12 lg:w-full '>
          <SortingDropdown />
        </div>
      </div>

      <AddFeedbackBtn />
    </div>
  );
};

export default AddFeedbackBar;
