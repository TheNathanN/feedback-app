interface Props {
  list: string[];
  selected: string;
  handleSelect: (item: string) => void;
}

const DropdownMenu = ({ list, selected, handleSelect }: Props) => {
  return (
    <div className='absolute w-full shadow-2xl text-lightNavy rounded-lg text-body2 top-[3.25rem] z-10 bg-white '>
      <ul className='w-full'>
        {list.map(item => (
          <li
            key={list.indexOf(item)}
            className='cursor-pointer hover:text-purple border-b-[1px] border-b-gray border-opacity-25 last:border-none h-10 w-full flex items-center justify-between px-4 '
            onClick={() => handleSelect(item)}
          >
            {item}
            {item === selected && (
              <svg xmlns='http://www.w3.org/2000/svg' width='13' height='11'>
                <path
                  fill='none'
                  stroke='#AD1FEA'
                  strokeWidth='2'
                  d='M1 5.233L4.522 9 12 1'
                />
              </svg>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
