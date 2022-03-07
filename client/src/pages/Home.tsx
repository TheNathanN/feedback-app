import { useState, useEffect } from 'react';
import { useAppSelector } from '../redux/hooks';
import { fetchSuggestions } from '../utils/utilFunctions';
import { FeedbackType } from '../utils/type';
import Header from '../components/home/Header';
import Body from '../components/home/Body';

const Home = () => {
  const [openNav, setOpenNav] = useState(false);
  const [feedbackList, setFeedbackList] = useState<FeedbackType[]>();

  const sorter = useAppSelector(state => state.sorter.value);

  useEffect(() => {
    window.scrollTo(0, 0);
    const controller = new AbortController();
    const signal = controller.signal;

    fetchSuggestions(setFeedbackList, signal);

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
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
