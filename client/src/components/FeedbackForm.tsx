import React from 'react';
import MobileEditFeedbackIcon from './svg/MobileEditFeedbackIcon';
import MobileNewFeedbackIcon from './svg/MobileNewFeedbackIcon';
import NewFeedbackIcon from './svg/NewFeedbackIcon';
import EditFeedbackIcon from './svg/EditFeedbackIcon';
import { useNavigate } from 'react-router-dom';

interface Props {
  type: 'new' | 'edit';
  header: string;
  children: React.ReactNode;
  title: string;
  category: string;
  detail: string;
  status?: string;
  id?: string;
}

const FeedbackFormContainer = ({
  type,
  header,
  children,
  title,
  category,
  detail,
  status,
  id,
}: Props) => {
  const navigate = useNavigate();
  const formInput = {
    title: title,
    category: category,
    detail: detail,
    status: status ? status : 'Suggestion',
  };

  return (
    <div className='bg-white w-full h-full rounded-lg p-4 relative md:w-[540px] '>
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
            `
            Title: ${formInput.title} 
            Category: ${formInput.category} 
            Status: ${formInput.status}
            Details: ${formInput.detail}`
          );
          navigate(id ? `/feedback/${id}` : '/');
        }}
      >
        {children}
      </form>
    </div>
  );
};

export default FeedbackFormContainer;
