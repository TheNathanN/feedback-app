import React from 'react';

interface Props {
  header: string;
  children: React.ReactNode;
  title: string;
  category: string;
  detail: string;
  status?: string;
}

const FeedbackFormContainer = ({
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
    status: status ? status : '',
  };

  return (
    <div className='bg-white w-full h-full rounded-lg p-4 '>
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
