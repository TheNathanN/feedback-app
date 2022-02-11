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
    <div>
      <p
        className='cursor-pointer'
        onClick={() => setActive(!active)}
      >
        Sort By: <span>{selected}</span>
      </p>

      {active && (
        <div>
          <ul>
            {list.map(item => (
              <li key={list.indexOf(item)}
                className='cursor-pointer'
                onClick={() => handleSelect(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default FilterDropdown