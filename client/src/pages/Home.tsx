import { useState, useEffect } from 'react';
import { useAppSelector } from '../redux/hooks';
import { fetchSuggestions, getCommentCount } from '../utils/utilFunctions';
import { FeedbackType } from '../utils/type';
import { sorterList } from '../utils/labels';
import FeedbackCard from '../components/FeedbackCard';
import NoFeedbackCard from '../components/NoFeedbackCard';
import AddFeedbackBar from '../components/home/AddFeedbackBar';
import ProjectInfo from '../components/home/ProjectInfo';
import MobileNav from '../components/home/MobileNav';
import FilterCard from '../components/home/FilterCard';
import RoadmapCard from '../components/home/RoadmapCard';

const Home = () => {
  const [openNav, setOpenNav] = useState(false);
  const [feedbackList, setFeedbackList] = useState<FeedbackType[]>();

  const filter = useAppSelector(state => state.filter.value);
  const sorter = useAppSelector(state => state.sorter.value);

  const filteredFeedback = feedbackList?.filter(
    (feedback: FeedbackType) => feedback.category === filter
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

  useEffect(() => {
    window.scrollTo(0, 0);
    const controller = new AbortController();
    const signal = controller.signal;

    fetchSuggestions('data.json', setFeedbackList, signal);

    return () => {
      controller.abort();
    };
  }, [sorter]);

  return (
    <div
      className={`min-w-screen min-h-screen flex flex-col ${
        openNav
          ? 'max-w-screen max-h-screen overflow-hidden md:overflow-scroll '
          : ''
      } `}
    >
      <div className='flex w-full h-full py-8 '>
        <div className='w-full md:w-1/3 md:p-4 '>
          <ProjectInfo openNav={openNav} setOpenNav={setOpenNav} />
        </div>

        <div className='hidden md:flex w-1/3 p-4 '>
          <FilterCard />
        </div>

        <div className='hidden md:flex w-1/3 p-4 '>
          <RoadmapCard />
        </div>
      </div>

      <div className='w-full h-full relative z-10 '>
        {openNav ? (
          <MobileNav setOpenNav={setOpenNav} feedbackList={feedbackList} />
        ) : (
          ''
        )}

        <div className='md:px-4 '>
          <AddFeedbackBar />
        </div>

        <div className='w-full h-full bg-whiteBlue2 px-4 pt-4 pb-8 '>
          <div className='flex flex-col items-center justify-center h-full w-full '>
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
                  <div className='w-11/12 md:w-10/12' key={feedback.id}>
                    <FeedbackCard feedback={feedback} />
                  </div>
                ))
            ) : (
              <NoFeedbackCard />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
