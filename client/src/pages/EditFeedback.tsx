import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchSuggestions } from '../utils/hooks';
import { FeedbackType } from '../utils/type';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackFormContainer from './pageTemplates/FeedbackFormContainer';
import InputContainer from '../components/feedbackForm/InputContainer';
import Button from '../ui/Button';
import {
  categories,
  statusList,
  categoryLabels,
  detailLabels,
  titleLabels,
  statusLabels,
} from '../utils/formElements';

const EditFeedback = () => {
  const { id } = useParams();

  const [feedbackList, setFeedbackList] = useState<
    FeedbackType[] | undefined
  >();
  const feedback = feedbackList?.filter(item => `${item.id}` === id);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [detail, setDetail] = useState('');
  const [status, setStatus] = useState(statusList[0]);

  useEffect(() => {
    if (!feedbackList) {
      try {
        fetchSuggestions('../../data.json', setFeedbackList);
      } catch (err) {
        console.log(err);
      }
    }
    const setEditDefault = () => {
      const feedback = feedbackList?.filter(item => `${item.id}` === id);
      setTitle(feedback ? feedback[0].title : '');
      setCategory(feedback ? feedback[0].category : categories[0]);
      setDetail(feedback ? feedback[0].description : '');
      setStatus(feedback ? feedback[0].status : statusList[0]);
    };

    setEditDefault();
  }, [feedbackList, id]);

  const resetForm = () => {
    setTitle('');
    setCategory(categories[0]);
    setDetail('');
    setStatus(statusList[0]);
  };

  return (
    <FeedbackFormContainer backLink={`/feedback/${id}`}>
      <FeedbackForm
        type='edit'
        header={`${feedback ? `Editing '${feedback[0].title}'` : ''}`}
        title={title}
        category={category}
        detail={detail}
        status={status}
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
          heading={statusLabels.heading}
          description={statusLabels.description}
          name='status'
          type='dropdown'
          state={status}
          setState={setStatus}
          list={statusList}
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

          <Link to={`/feedback/${id}`}>
            <Button color='navy' type='button' full={true}>
              Cancel
            </Button>
          </Link>

          <div className='mt-4' onClick={resetForm}>
            <Button color='red' type='button' full={true}>
              Delete
            </Button>
          </div>
        </div>
      </FeedbackForm>
    </FeedbackFormContainer>
  );
};

export default EditFeedback;
