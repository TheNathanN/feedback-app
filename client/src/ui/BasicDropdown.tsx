import { useState } from 'react';
import DropdownMenu from './DropdownMenu';

interface Props {
  list: string[];
}

const BasicDropdown = ({ list }: Props) => {
  const [selected, setSelected] = useState(list[0]);
  const [active, setActive] = useState(false);

  const handleSelect = (item: string) => {
    setSelected(item);
    setActive(false);
  };

  return (
    <div className='relative font-sans '>
      <div
        className={`flex text-body2 items-center justify-between cursor-pointer bg-whiteBlue2 py-2 px-4 rounded-md ${
          active ? 'border-[1px] border-solid border-blue ' : ''
        } `}
        onClick={() => setActive(!active)}
      >
        <p className='text-navy '>{selected}</p>

        {!active ? (
          <svg width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1 1l4 4 4-4'
              stroke='#4661E6'
              strokeWidth='2'
              fill='none'
              fillRule='evenodd'
            />
          </svg>
        ) : (
          <svg width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1 6l4-4 4 4'
              stroke='#4661E6'
              strokeWidth='2'
              fill='none'
              fillRule='evenodd'
            />
          </svg>
        )}
      </div>

      {active && (
        <DropdownMenu
          list={list}
          selected={selected}
          handleSelect={handleSelect}
        />
      )}
    </div>
  );
};

export default BasicDropdown;
