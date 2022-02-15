import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../ui/BackButton';

interface Props {
  children: React.ReactNode;
  backLink: string;
}

const FeedbackForm = ({ children, backLink }: Props) => {
  return (
    <div className='min-h-screen min-w-screen w-full h-full px-6 pt-6 pb-14 '>
      <div className='mb-10 '>
        <Link to={backLink}>
          <BackButton color='white' />
        </Link>
      </div>

      {children}
    </div>
  );
};

export default FeedbackForm;
