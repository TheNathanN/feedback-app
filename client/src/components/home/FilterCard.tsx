import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changeFilter } from '../../redux/slices/filterSlice';
import TagButton from '../../ui/TagButton';
import { filterList } from '../../utils/labels';

interface Props {
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterCard = ({ setOpenNav }: Props) => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(state => state.filter.value);

  const handleClick = (item: string) => {
    dispatch(changeFilter(item));
    setOpenNav(false);
  };

  return (
    <div className='w-11/12 bg-white rounded-md p-4 flex items-center justify-start flex-wrap '>
      {filterList.map((item, index) => (
        <div key={index} onClick={() => handleClick(item)} className='m-2 '>
          <TagButton active={filter === item ? true : false}>{item}</TagButton>
        </div>
      ))}
    </div>
  );
};

export default FilterCard;
