import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputContainer from '../components/feedbackForm/InputContainer';
import FeedbackFormContainer from '../components/FeedbackFormContainer';
import BackButton from '../ui/BackButton';
import Button from '../ui/Button';

const NewFeedback = () => {
  const categories = ['Feature', 'UI', 'UX', 'Enhancment', 'Bug'];
  const titleLabels = {
    heading: 'Feedback Title',
    description: 'Add a short, descriptive headline',
  };
  const categoryLabels = {
    heading: 'Category',
    description: 'Choose a category for your feedback',
  };
  const detailLabels = {
    heading: 'Feedback Detail',
    description:
      'Include any specific comments on what should be improved, added, etc.',
  };

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [detail, setDetail] = useState('');

  const resetForm = () => {
    setTitle('');
    setCategory(categories[0]);
    setDetail('');
  };

  return (
    <div className='min-h-screen min-w-screen w-full h-full px-6 pt-6 pb-14 '>
      <div className='mb-10 '>
        <Link to='/'>
          <BackButton color='white' />
        </Link>
      </div>

      <FeedbackFormContainer
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

        <div>
          <div className='my-4 '>
            <Button color='purple' full={true} type='submit'>
              Add Feedback
            </Button>
          </div>

          <div onClick={resetForm}>
            <Button color='navy' type='button' full={true}>
              Cancel
            </Button>
          </div>
        </div>
      </FeedbackFormContainer>
    </div>
  );
};

export default NewFeedback;
