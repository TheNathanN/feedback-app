import { FeedbackType } from '../../utils/type';
import { useAppSelector } from '../../redux/hooks';
import { getCommentCount } from '../../utils/utilFunctions';
import { sorterList } from '../../utils/labels';
import MobileNav from './MobileNav';
import AddFeedbackBar from './AddFeedbackBar';
import FeedbackCard from '../FeedbackCard';
import NoFeedbackCard from '../NoFeedbackCard';

interface Props {
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
  feedbackList?: FeedbackType[];
}

const Body = ({ openNav, setOpenNav, feedbackList }: Props) => {
  const filter = useAppSelector(state => state.filter.value);
  const sorter = useAppSelector(state => state.sorter.value);

  const filteredFeedback = feedbackList?.filter((feedback: FeedbackType) =>
    filter === 'All' ? feedback : feedback.category === filter
  );

  const sortFeedback = (feedbackA: FeedbackType, feedbackB: FeedbackType) => {
    const commentCountA = feedbackA.comments
      ? getCommentCount(feedbackA.comments)
      : 0;
    const commentCountB = feedbackB.comments
      ? getCommentCount(feedbackB.comments)
      : 0;

    if (sorter === sorterList[3]) {
      return commentCountA - commentCountB;
    } else if (sorter === sorterList[2]) {
      return commentCountB - commentCountA;
    } else if (sorter === sorterList[1]) {
      return feedbackA.upvotes - feedbackB.upvotes;
    } else {
      return feedbackB.upvotes - feedbackA.upvotes;
    }
  };

  return (
    <div className='w-full h-full relative z-10 lg:w-11/12 '>
      {openNav ? (
        <MobileNav setOpenNav={setOpenNav} feedbackList={feedbackList} />
      ) : (
        ''
      )}

      <div className='md:px-4 md:rounded-md lg:p-0 lg:mb-2 '>
        <AddFeedbackBar
          count={filteredFeedback ? filteredFeedback.length : 0}
        />
      </div>

      <div className='w-full h-full bg-whiteBlue2 px-4 pt-4 pb-8 lg:p-0 '>
        <div className='flex flex-col items-center justify-center h-full w-full lg:justify-start '>
          {feedbackList && filter === 'All' ? (
            feedbackList.sort(sortFeedback).map((feedback: FeedbackType) => (
              <div className='w-11/12 md:w-full' key={feedback.id}>
                <FeedbackCard feedback={feedback} />
              </div>
            ))
          ) : feedbackList &&
            filteredFeedback &&
            filteredFeedback.length > 0 ? (
            filteredFeedback
              .sort(sortFeedback)
              .map((feedback: FeedbackType) => (
                <div className='w-11/12 md:w-full' key={feedback.id}>
                  <FeedbackCard feedback={feedback} />
                </div>
              ))
          ) : (
            <NoFeedbackCard />
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
