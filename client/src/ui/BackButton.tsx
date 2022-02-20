import { useNavigate } from 'react-router-dom';

interface Props {
  color: 'white' | 'navy';
}

const BackButton = ({ color }: Props) => {
  const basicStyling =
    'text-h4 font-bold rounded-md flex items-center justify-center hover:underline transition-all cursor-pointer ';
  const whiteClass = basicStyling + 'text-lightNavy bg-blueWhite ';
  const navyClass = basicStyling + 'text-white bg-darkNavy ';

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)}>
      <button
        className={
          color === 'white' ? whiteClass : color === 'navy' ? navyClass : ''
        }
        type='button'
      >
        <svg width='7' height='10' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M6 9L2 5l4-4'
            stroke={
              color === 'white' ? '#4661E6' : color === 'navy' ? '#ffffff' : ''
            }
            strokeWidth='2'
            fill='none'
            fillRule='evenodd'
          />
        </svg>

        <p className='ml-4'>Go Back</p>
      </button>
    </div>
  );
};

export default BackButton;
