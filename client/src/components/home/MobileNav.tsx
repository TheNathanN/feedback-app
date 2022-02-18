import React from 'react';
import FilterContainer from './FilterContainer';

interface Props {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = ({ state, setState, setOpenNav }: Props) => {
  return (
    <div className='absolute top-0 w-screen h-screen z-30 bg-black bg-opacity-60 flex justify-end '>
      <div className='w-9/12 h-full bg-whiteBlue flex flex-col items-center p-4 '>
        <FilterContainer
          state={state}
          setState={setState}
          setOpenNav={setOpenNav}
        />
      </div>
    </div>
  );
};

export default MobileNav;
