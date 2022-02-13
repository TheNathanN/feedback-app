import React from 'react';
import AddFeedbackBtn from './suggestions/AddFeedbackBtn';
import EmptyIllustration from './svg/EmptyIllustration';

const NoFeedbackCard = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center bg-white rounded-lg pb-10 my-2 h-full '>
      <div className='my-10 '>
        <EmptyIllustration />
      </div>
      <div className='flex flex-col items-center px-8 '>
        <h2 className='text-h3 font-bold text-navy '>
          There is no feedback yet.
        </h2>
        <p className='text-body3 text-lightNavy my-4 '>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <AddFeedbackBtn />
      </div>
    </div>
  );
};

export default NoFeedbackCard;
