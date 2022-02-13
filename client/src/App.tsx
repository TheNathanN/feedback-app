import { Routes, Route } from 'react-router-dom';
import Feedback from './pages/Feedback';
import Suggestions from './pages/Suggestions';

const App = () => {
  return (
    <div className='font-sans bg-whiteBlue2 min-w-screen min-h-screen '>
      <Routes>
        <Route path='/' element={<Suggestions />} />
        <Route path='/feedback/:id' element={<Feedback />} />
      </Routes>
    </div>
  );
};

export default App;
