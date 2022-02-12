import { useState } from 'react';
import DropdownMenu from './DropdownMenu';

const SortingDropdown = () => {
  const list = [
    'Most Upvotes',
    'Least Upvotes',
    'Most Comments',
    'Least Comments',
  ];

  const [selected, setSelected] = useState(list[0]);
  const [active, setActive] = useState(false);
  const handleSelect = (item: string) => {
    setSelected(item);
    setActive(false);
  };

  return (
    <div className='bg-navy text-sans relative px-2 py-2 '>
      <div
        className='flex items-center cursor-pointer '
        onClick={() => setActive(!active)}
      >
        <p
          className={`text-h4 mx-2 
        ${active ? 'text-whiteBlue' : 'text-white'} `}
        >
          Sort By: <span className='font-bold '>{selected}</span>
        </p>

        {!active ? (
          <svg width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1 1l4 4 4-4'
              stroke='#fff'
              stroke-width='2'
              fill='none'
              fill-rule='evenodd'
            />
          </svg>
        ) : (
          <svg width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1 6l4-4 4 4'
              stroke='#fff'
              stroke-width='2'
              fill='none'
              fill-rule='evenodd'
            />
          </svg>
        )}
      </div>

      {active && (
        <DropdownMenu
          list={list}
          handleSelect={handleSelect}
          selected={selected}
        />
      )}
    </div>
  );
};

export default SortingDropdown;
