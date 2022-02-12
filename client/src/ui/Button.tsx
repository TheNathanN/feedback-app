import React from 'react';

interface Props {
  children: React.ReactNode;
  color: 'purple' | 'blue' | 'navy' | 'red';
}

const Button = ({ children, color }: Props) => {
  const basicStyling =
    'font-sans text-center text-body3 font-bold text-white w-full h-full rounded-md hover:opacity-80 transition-all cursor-pointer flex items-center justify-center ';
  const purpleClass = basicStyling + 'bg-purple';
  const blueClass = basicStyling + 'bg-blue';
  const navyClass = basicStyling + 'bg-navy';
  const redClass = basicStyling + 'bg-red';

  return (
    <div
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
    </div>
  );
};

export default Button;
