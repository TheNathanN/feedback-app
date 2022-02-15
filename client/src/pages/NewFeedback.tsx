import { useState } from 'react';
import InputContainer from '../components/feedbackForm/InputContainer';
import FeedbackFormContainer from '../components/FeedbackFormContainer';
import BackButton from '../ui/BackButton';
import Button from '../ui/Button';
import FeedbackForm from './pageTemplates/FeedbackForm';

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
    <FeedbackForm backLink='/'>
      <FeedbackFormContainer
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
    </FeedbackForm>
  );
};

export default NewFeedback;
