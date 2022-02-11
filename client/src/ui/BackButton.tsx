import React from 'react'

interface Props {
  color: 'white' | 'navy';
}

const BackButton = ({ color }: Props) => {
  const basicStyling = 'text-h4 font-bold py-3 px-7 rounded-md flex items-center justify-between hover:underline transition-all '
  const whiteClass = basicStyling + 'text-lightNavy bg-white ';
  const navyClass = basicStyling + 'text-white bg-darkNavy ';

  return (
    <button className={
      color === 'white' ? whiteClass :
        color === 'navy' ? navyClass : ''
    }>
      <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke={
        color === 'white' ? '#4661E6' :
          color === 'navy' ? '#ffffff' : ''
      } stroke-width="2" fill="none" fill-rule="evenodd" /></svg>

      <span className='ml-4'>
        Go Back
      </span>
    </button>
  )
}

export default BackButton