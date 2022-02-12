import { useState } from 'react';
import TextInput from './ui/TextInput';

const App = () => {
  const [state, setState] = useState('');

  console.log(state);
  return (
    <div>
      <h1>Hello world</h1>
      <TextInput name='state' type='text' state={state} setState={setState} />
    </div>
  );
};

export default App;
