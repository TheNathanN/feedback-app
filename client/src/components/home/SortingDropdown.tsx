import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changeSorter } from '../../redux/slices/sorterSlice';
import DropdownMenu from '../../ui/DropdownMenu';

const SortingDropdown = () => {
  const list = [
    'Most Upvotes',
    'Least Upvotes',
    'Most Comments',
    'Least Comments',
  ];

  const sorter = useAppSelector(state => state.sorter.value);
  const dispatch = useAppDispatch();

  const [active, setActive] = useState(false);

  const handleSelect = (item: string) => {
    dispatch(changeSorter(item));
    setActive(false);
  };

  return (
    <div className='bg-navy text-sans relative w-full h-full '>
      <div
        className='flex items-center cursor-pointer '
        onClick={() => setActive(!active)}
      >
        <p
          className={`text-h4 
        ${active ? 'text-whiteBlue' : 'text-white'} `}
        >
          Sort By: <span className='font-bold inline-block '>{sorter}</span>
        </p>

        {!active ? (
          <svg
            className='mx-2'
            width='10'
            height='7'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 1l4 4 4-4'
              stroke='#fff'
              strokeWidth='2'
              fill='none'
              fillRule='evenodd'
            />
          </svg>
        ) : (
          <svg
            className='mx-2'
            width='10'
            height='7'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 6l4-4 4 4'
              stroke='#fff'
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
          handleSelect={handleSelect}
          selected={sorter}
        />
      )}
    </div>
  );
};

export default SortingDropdown;
