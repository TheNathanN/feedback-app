import React, { useState } from 'react'

const FilterDropdown = () => {
  const list = [
    'Most Upvotes',
    'Least Upvotes',
    'Most Comments',
    'Least Comments'
  ];

  const [selected, setSelected] = useState(list[0]);
  const [active, setActive] = useState(true);
  const handleSelect = (item: string) => {
    setSelected(item);
    setActive(false);
  };

  return (
    <div className='bg-navy text-sans relative flex items-center px-2 py-4 '>
      <p
        className={`cursor-pointer text-h4 mx-2 
        ${active ? 'text-whiteBlue' : 'text-white'} `}
        onClick={() => setActive(!active)}
      >
        Sort By: <span className='font-bold ' >{selected}</span>
      </p>

      {!active ? (
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1l4 4 4-4" stroke="#fff" stroke-width="2" fill="none" fill-rule="evenodd" />
        </svg>
      ) : (
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 6l4-4 4 4" stroke="#fff" stroke-width="2" fill="none" fill-rule="evenodd" />
        </svg>
      )}

      {active && (
        <div className='absolute shadow-2xl text-lightNavy rounded-lg text-body1 top-16 '>
          <ul>
            {list.map(item => (
              <li key={list.indexOf(item)}
                className='cursor-pointer hover:text-purple border-b-[1px] border-b-gray border-opacity-25 last:border-none h-10 w-52 flex items-center justify-between px-4 '
                onClick={() => handleSelect(item)}
              >
                {item}
                {
                  item === selected && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11">
                      <path fill="none" stroke="#AD1FEA" stroke-width="2" d="M1 5.233L4.522 9 12 1" />
                    </svg>
                  )
                }
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default FilterDropdown