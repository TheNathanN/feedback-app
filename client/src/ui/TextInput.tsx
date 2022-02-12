import React from 'react';

interface Props {
  name: string;
  state: string;
  type: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  cols?: number;
  rows?: number;
}

const TextInput = ({ name, type, state, setState, cols, rows }: Props) => {
  const changeHandler = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setState(e.currentTarget.value);

  if (type === 'text') {
    return (
      <input
        type={type}
        name={name}
        value={state}
        onChange={changeHandler}
        className='bg-whiteBlue '
      />
    );
  } else {
    return (
      <textarea
        name={name}
        value={state}
        onChange={changeHandler}
        cols={cols}
        rows={rows}
        className='bg-whiteBlue '
      />
    );
  }
};

export default TextInput;
