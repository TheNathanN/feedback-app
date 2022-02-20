import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputContainer from '../components/feedbackForm/InputContainer';
import FeedbackForm from '../components/FeedbackForm';
import Button from '../ui/Button';
import FeedbackFormContainer from './pageTemplates/FeedbackFormContainer';
import {
  categories,
  categoryLabels,
  detailLabels,
  titleLabels,
} from '../utils/formElements';

const NewFeedback = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [detail, setDetail] = useState('');

  return (
    <FeedbackFormContainer>
      <FeedbackForm
        type='new'
        title={title}
        category={category}
        detail={detail}
        header='Create New Feedback'
      >
        <InputContainer
          heading={titleLabels.heading}
          description={titleLabels.description}
          name='title'
          type='text'
          state={title}
          setState={setTitle}
        />
        <InputContainer
          heading={categoryLabels.heading}
          description={categoryLabels.description}
          name='category'
          type='dropdown'
          state={category}
          setState={setCategory}
          list={categories}
        />
        <InputContainer
          heading={detailLabels.heading}
          description={detailLabels.description}
          name='detail'
          type='textarea'
          state={detail}
          setState={setDetail}
        />

        <div className='md:w-full md:flex md:flex-row-reverse md:justify-start md:mb-4 '>
          <div className='my-4 md:my-0 md:pl-4 '>
            <Button color='purple' full={true} type='submit'>
              Add Feedback
            </Button>
          </div>

          <Link to='/'>
            <Button color='navy' type='button' full={true}>
              Cancel
            </Button>
          </Link>
        </div>
      </FeedbackForm>
    </FeedbackFormContainer>
  );
};

export default NewFeedback;
