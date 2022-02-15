import React from 'react';

interface Props {
  children: React.ReactNode;
  color: 'purple' | 'blue' | 'navy' | 'red';
  type: 'button' | 'submit';
  full?: boolean;
}

const Button = ({ children, color, type, full }: Props) => {
  const basicStyling = `font-sans text-center text-body3 font-bold text-white rounded-md hover:opacity-80 transition-all cursor-pointer flex items-center justify-center py-2 px-3 ${
    full ? 'w-full' : ''
  } `;
  const purpleClass = basicStyling + 'bg-purple';
  const blueClass = basicStyling + 'bg-blue';
  const navyClass = basicStyling + 'bg-navy';
  const redClass = basicStyling + 'bg-red';

  return (
    <button
      type={type}
      className={
        color === 'purple'
          ? purpleClass
          : color === 'blue'
          ? blueClass
          : color === 'navy'
          ? navyClass
          : color === 'red'
          ? redClass
          : ''
      }
    >
      {children}
    </button>
  );
};

export default Button;
