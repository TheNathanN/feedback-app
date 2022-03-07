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
    id,
    title,
    category,
    detail,
    status: status ? status : 'Suggestion',
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const createdForm = await fetch(
      `${process.env.REACT_APP_API_URL}/feedback`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formInput),
      }
    );

    const response = await createdForm.json();
    alert(response);
    navigate(id ? `/feedback/${id}` : '/');
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
      <form onSubmit={handleSubmit}>{children}</form>
    </div>
  );
};

export default FeedbackFormContainer;
