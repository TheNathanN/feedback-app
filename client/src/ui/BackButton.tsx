import React from 'react';

interface Props {
  color: 'white' | 'navy';
}

const BackButton = ({ color }: Props) => {
  const basicStyling =
    'text-h4 font-bold py-3 px-7 rounded-md flex items-center justify-center hover:underline transition-all cursor-pointer ';
  const whiteClass = basicStyling + 'text-lightNavy bg-white ';
  const navyClass = basicStyling + 'text-white bg-darkNavy ';

  return (
    <div
      className={
        color === 'white' ? whiteClass : color === 'navy' ? navyClass : ''
      }
    >
      <svg width='7' height='10' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M6 9L2 5l4-4'
          stroke={
            color === 'white' ? '#4661E6' : color === 'navy' ? '#ffffff' : ''
          }
          strokeWidth='2'
          fill='none'
          fillRule='evenodd'
        />
      </svg>

      <p className='ml-4'>Go Back</p>
    </div>
  );
};

export default BackButton;
