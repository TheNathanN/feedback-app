import { Routes, Route } from 'react-router-dom';
import Suggestions from './pages/Suggestions';

const App = () => {
  return (
    <div className='font-sans bg-whiteBlue2 min-w-screen min-h-screen '>
      <Routes>
        <Route path='/' element={<Suggestions />} />
      </Routes>
    </div>
  );
};

export default App;
