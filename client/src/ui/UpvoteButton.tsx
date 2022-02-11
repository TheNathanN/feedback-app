import React from 'react'

interface Props {
  active: boolean;
  total: number;
}

const UpvoteButton = ({ active, total }: Props) => {
  const defaultStyles = 'text-darkNavy bg-whiteBlue hover:bg-whiteBlue3 flex flex-col items-center justify-center text-h4 font-bold font-sans py-2 px-2 rounded-md stroke-blue cursor-pointer transition-all ';
  const activeStyles = 'text-white hover:text-darkNavy bg-blue hover:bg-whiteBlue3 flex flex-col items-center justify-center text-h4 font-bold font-sans py-2 px-2 rounded-md stroke-white hover:stroke-blue cursor-pointer transition-all ';

  return (
    <div className={active ? activeStyles : defaultStyles}>
      <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 6l4-4 4 4" strokeWidth="2" fill="none" fillRule="evenodd" />
      </svg>

      <p className='mt-1'>{total}</p>
    </div>
  )
}

export default UpvoteButton