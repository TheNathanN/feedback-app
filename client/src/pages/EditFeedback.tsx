import { useState } from 'react';
import { useParams } from 'react-router-dom';
import FeedbackFormContainer from '../components/FeedbackFormContainer';
import FeedbackForm from './pageTemplates/FeedbackForm';

const EditFeedback = () => {
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

  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [detail, setDetail] = useState('');

  return (
    <FeedbackForm backLink={`/feedback/${id}`}>
      <FeedbackFormContainer
        type='edit'
        header={`Editing '${id}'`}
        title={title}
        category={category}
        detail={detail}
      >
        <div>EditFeedback {id}</div>
      </FeedbackFormContainer>
    </FeedbackForm>
  );
};

export default EditFeedback;
