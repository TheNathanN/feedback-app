import React from 'react';
import BackButton from '../../ui/BackButton';

interface Props {
  children: React.ReactNode;
}

const FeedbackForm = ({ children }: Props) => {
  return (
    <div className='min-h-screen min-w-screen w-full h-full px-6 pt-6 pb-14 '>
      <div className='mb-10 '>
        <BackButton color='white' />
      </div>

      {children}
    </div>
  );
};

export default FeedbackForm;
