import React from 'react';
import BackButton from '../../ui/BackButton';

interface Props {
  children: React.ReactNode;
}

const FeedbackForm = ({ children }: Props) => {
  return (
    <div className='min-h-screen min-w-screen w-full h-full px-6 pt-6 pb-14 md:pt-12 md:flex md:flex-col md:items-center md:justify-center '>
      <div className='mb-10 md:w-[540px] md:mb-16 '>
        <BackButton color='white' />
      </div>

      <div className='md:flex  md:justify-center md:w-full '>{children}</div>
    </div>
  );
};

export default FeedbackForm;
