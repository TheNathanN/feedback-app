import React, { useState } from 'react';

interface Props {
  name: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const TextInput = ({ name, state, setState }: Props) => {
  const [focused, setFocused] = useState(false);

  const changeHandler = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setState(e.currentTarget.value);

  const basicStyling =
    'appearance-none bg-whiteBlue outline-none px-4 py-2 rounded-sm w-full text-body2 text-navy focus:border-[1px]  ';
  const validFocusStyling = 'focus:border-blue ';
  const invalidFocusStyling = 'focus:border-red ';

  if (state === '') {
    return (
      <div className='font-sans' onClick={() => setFocused(true)}>
        <input
          type='text'
          name={name}
          value={state}
          onChange={changeHandler}
          className={basicStyling + invalidFocusStyling}
        />
        {focused ? <p className='text-h4 text-red '>Can't be empty</p> : ''}
      </div>
    );
  }

  return (
    <div className='font-sans'>
      <input
        type='text'
        name={name}
        value={state}
        onChange={changeHandler}
        className={basicStyling + validFocusStyling}
      />
    </div>
  );
};

export default TextInput;
