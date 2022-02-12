import React, { useState } from 'react';

interface Props {
  name: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  rows: number;
}

const TextArea = ({ name, state, setState, rows }: Props) => {
  const [focused, setFocused] = useState(false);

  const basicStyling =
    'appearance-none bg-whiteBlue outline-none px-4 py-2 rounded-sm w-full text-body2 text-navy focus:border-[1px]  ';
  const validFocusStyling = 'focus:border-blue ';
  const invalidFocusStyling = 'focus:border-red ';

  const changeHandler = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setState(e.currentTarget.value);

  if (state === '') {
    return (
      <div onClick={() => setFocused(true)}>
        <textarea
          name={name}
          value={state}
          onChange={changeHandler}
          className={basicStyling + invalidFocusStyling}
          rows={rows}
        />
        {focused ? <p className='text-h4 text-red '>Can't be empty</p> : ''}
      </div>
    );
  }

  return (
    <div>
      <textarea
        name={name}
        value={state}
        onChange={changeHandler}
        className={basicStyling + validFocusStyling}
        rows={rows}
      />
    </div>
  );
};

export default TextArea;
