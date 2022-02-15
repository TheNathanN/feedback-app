import { Routes, Route } from 'react-router-dom';
import EditFeedback from './pages/EditFeedback';
import Feedback from './pages/Feedback';
import NewFeedback from './pages/NewFeedback';
import Suggestions from './pages/Suggestions';

const App = () => {
  return (
    <div className='font-sans bg-whiteBlue2 min-w-screen min-h-screen w-full h-full '>
      <Routes>
        <Route path='/' element={<Suggestions />} />
        <Route path='/feedback/:id' element={<Feedback />} />
        <Route path='/feedback/:id/edit' element={<EditFeedback />} />
        <Route path='/feedback/new' element={<NewFeedback />} />
      </Routes>
    </div>
  );
};

export default App;
