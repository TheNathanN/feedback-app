import React from 'react';
import Button from '../../ui/Button';
import SortingDropdown from '../../ui/SortingDropdown';

const AddFeedbackBar = () => {
  return (
    <div className='flex bg-navy items-center justify-between py-2 px-4 '>
      <div>
        <SortingDropdown />
      </div>

      <div className='w-32 h-9 '>
        <Button color='purple'>
          <svg
            width='9'
            height='9'
            xmlns='http://www.w3.org/2000/svg'
            className='mr-1 '
          >
            <text
              transform='translate(-24 -20)'
              fill='#F2F4FE'
              fillRule='evenodd'
              fontFamily='Jost-Bold, Jost'
              fontSize='14'
              fontWeight='bold'
            >
              <tspan x='24' y='27.5'>
                +
              </tspan>
            </text>
          </svg>
          Add Feedback
        </Button>
      </div>
    </div>
  );
};

export default AddFeedbackBar;
