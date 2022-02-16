import React from 'react';
import MobileEditFeedbackIcon from './svg/MobileEditFeedbackIcon';
import MobileNewFeedbackIcon from './svg/MobileNewFeedbackIcon';
import NewFeedbackIcon from './svg/NewFeedbackIcon';
import EditFeedbackIcon from './svg/EditFeedbackIcon';

interface Props {
  type: 'new' | 'edit';
  header: string;
  children: React.ReactNode;
  title: string;
  category: string;
  detail: string;
  status?: string;
}

const FeedbackFormContainer = ({
  type,
  header,
  children,
  title,
  category,
  detail,
  status,
}: Props) => {
  const formInput = {
    title: title,
    category: category,
    detail: detail,
    status: status ? status : 'Suggestion',
  };

  return (
    <div className='bg-white w-full h-full rounded-lg p-4 relative '>
      <div className='absolute -top-5 md:hidden '>
        {type === 'new' ? (
          <MobileNewFeedbackIcon />
        ) : (
          <MobileEditFeedbackIcon />
        )}
      </div>
      <div className='absolute -top-7 hidden md:block '>
        {type === 'new' ? <NewFeedbackIcon /> : <EditFeedbackIcon />}
      </div>

      <h1 className='text-h3 font-bold text-navy my-6 '>{header}</h1>
      <form
        onSubmit={() => {
          alert(
            `${formInput.title}, ${formInput.category}, ${formInput.detail}`
          );
        }}
      >
        {children}
      </form>
    </div>
  );
};

export default FeedbackFormContainer;
