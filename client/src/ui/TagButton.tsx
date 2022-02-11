import React from "react";

interface Props {
  children: React.ReactNode;
  active: boolean;
}

const TagButton = ({ children, active }: Props) => {
  const defaultStyles =
    "text-darkNavy bg-whiteBlue hover:bg-whiteBlue3 flex flex-col items-center justify-center text-h4 font-bold font-sans py-2 px-2 rounded-md stroke-blue cursor-pointer transition-all ";
  const activeStyles =
    "text-white hover:text-darkNavy bg-blue hover:bg-whiteBlue3 flex flex-col items-center justify-center text-h4 font-bold font-sans py-2 px-2 rounded-md stroke-white hover:stroke-blue cursor-pointer transition-all ";

  return (
    <div className={active ? activeStyles : defaultStyles}>{children}</div>
  );
};

export default TagButton;
