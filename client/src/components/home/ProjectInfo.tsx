import React from 'react';

interface Props {
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectInfo = ({ openNav, setOpenNav }: Props) => {
  const toggleNav = () => setOpenNav(!openNav);

  return (
    <div className='bg-gradient-to-tr from-lightBlue via-purple to-[#E84D70] flex justify-between items-center p-4 w-full h-full md:rounded-md '>
      <div className='text-white md:w-full md:h-full '>
        <h1 className='text-body2 font-bold '>Project Name</h1>
        <p className='text-body3 font-medium '>Feedback Board</p>
      </div>

      <div className='cursor-pointer md:hidden ' onClick={toggleNav}>
        {!openNav ? (
          <svg width='20' height='17' xmlns='http://www.w3.org/2000/svg'>
            <g fill='#FFF' fillRule='evenodd'>
              <path d='M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z' />
            </g>
          </svg>
        ) : (
          <svg width='18' height='17' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z'
              fill='#FFF'
              fillRule='evenodd'
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default ProjectInfo;
