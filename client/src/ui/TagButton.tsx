import React from 'react';

interface Props {
  children: React.ReactNode;
  active: boolean;
}

const TagButton = ({ children, active }: Props) => {
  const defaultStyles =
    'text-blue bg-whiteBlue hover:bg-whiteBlue3 flex flex-col items-center justify-center text-h4 font-bold font-sans py-1 px-3 rounded-lg stroke-blue cursor-pointer transition-all ';
  const activeStyles =
    'text-white hover:text-blue bg-blue hover:bg-whiteBlue3 flex flex-col items-center justify-center text-h4 font-bold font-sans py-1 px-3 rounded-lg stroke-white hover:stroke-blue cursor-pointer transition-all ';

  const capitalizeFirstLetter = (string: React.ReactNode) => {
    const phrase = string?.toString();

    if (phrase) {
      return phrase[0].toUpperCase() + phrase.slice(1);
    }

    return string;
  };

  return (
    <button className={active ? activeStyles : defaultStyles}>
      <p>{capitalizeFirstLetter(children)}</p>
    </button>
  );
};

export default TagButton;
