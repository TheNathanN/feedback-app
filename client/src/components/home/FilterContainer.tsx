import TagButton from '../../ui/TagButton';
import { filterList } from '../../utils/filterList';

interface Props {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterContainer = ({ state, setState, setOpenNav }: Props) => {
  const handleClick = (item: string) => {
    setState(item);
    setOpenNav(false);
  };

  return (
    <div className='w-full bg-white rounded-md p-4 flex items-center justify-start flex-wrap '>
      {filterList.map(item => (
        <div
          key={filterList.indexOf(item)}
          onClick={() => handleClick(item)}
          className='m-1 '
        >
          <TagButton active={state === item ? true : false}>{item}</TagButton>
        </div>
      ))}
    </div>
  );
};

export default FilterContainer;
