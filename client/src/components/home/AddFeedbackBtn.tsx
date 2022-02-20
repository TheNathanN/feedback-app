import { Link } from 'react-router-dom';
import Button from '../../ui/Button';

const AddFeedbackBtn = () => {
  return (
    <Link to='/feedback/new'>
      <div className='w-32 h-9 md:w-36 md:h-12 '>
        <Button type='button' color='purple' full={true}>
          <svg
            width='9'
            height='9'
            xmlns='http://www.w3.org/2000/svg'
            className='mr-1 '
          >
            <text
              transform='translate(-24 -20)'
              fill='#F2F4FE'
              fillRule='evenodd'
              fontFamily='Jost-Bold, Jost'
              fontSize='14'
              fontWeight='bold'
            >
              <tspan x='24' y='27.5'>
                +
              </tspan>
            </text>
          </svg>
          Add Feedback
        </Button>
      </div>
    </Link>
  );
};

export default AddFeedbackBtn;
