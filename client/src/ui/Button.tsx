import React from 'react';

interface Props {
  children: React.ReactNode;
  color: 'purple' | 'blue' | 'navy' | 'red';
}

const Button = ({ children, color }: Props) => {
  const basicStyling = 'font-sans text-h4 font-bold text-white  px-10 py-2 rounded-md hover:opacity-80 transition-all '
  const purpleClass = basicStyling + 'bg-purple';
  const blueClass = basicStyling + 'bg-blue';
  const navyClass = basicStyling + 'bg-navy';
  const redClass = basicStyling + 'bg-red';

  return (
    <button className={
      color === 'purple' ? purpleClass :
        color === 'blue' ? blueClass :
          color === 'navy' ? navyClass :
            color === 'red' ? redClass : ''
    }>
      {children}
    </button>
  )
}

export default Button;