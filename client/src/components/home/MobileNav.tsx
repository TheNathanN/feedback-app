import React from 'react';
import FilterCard from './FilterCard';
import RoadmapCard from './RoadmapCard';

interface Props {
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = ({ setOpenNav }: Props) => {
  return (
    <div className='absolute top-0 w-screen h-screen z-30 bg-black bg-opacity-60 flex justify-end '>
      <div className='w-9/12 h-full bg-whiteBlue flex flex-col items-center p-4 '>
        <FilterCard setOpenNav={setOpenNav} />
        <RoadmapCard />
      </div>
    </div>
  );
};

export default MobileNav;
