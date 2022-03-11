import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  fetchComments,
  fetchReplies,
  fetchSuggestions,
} from '../utils/utilFunctions';
import { CommentType, FeedbackType, ReplyType } from '../utils/type';
import Header from '../components/home/Header';
import Body from '../components/home/Body';
import { setSuggestions } from '../redux/slices/suggestionsSlice';

const Home = () => {
  const [openNav, setOpenNav] = useState(false);

  const dispatch = useAppDispatch();
  const sorter = useAppSelector(state => state.sorter.value);

  useEffect(() => {
    window.scrollTo(0, 0);
    const controller = new AbortController();
    const signal = controller.signal;

    return () => {
      controller.abort();
    };
  }, [sorter]);

  return (
    <div
      className={`min-w-screen min-h-screen flex flex-col lg:items-center lg:justify-center lg:flex-row lg:pt-16 lg:pb-16  lg:pr-20 ${
        openNav
          ? 'max-w-screen max-h-screen overflow-hidden md:overflow-scroll lg:max-h-full lg:max-w-full '
          : ''
      } `}
    >
      <div className='max-w-[1110px] lg:flex '>
        <div className='lg:w-4/12 lg:h-full lg:flex lg:justify-end '>
          <Header
            openNav={openNav}
            setOpenNav={setOpenNav}
            feedbackList={feedbackList}
          />
        </div>

        <div className='lg:w-2/3 lg:h-full lg:flex lg:justify-center '>
          <Body
            openNav={openNav}
            setOpenNav={setOpenNav}
            feedbackList={feedbackList}
            commentList={commentList}
            replyList={replyList}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
