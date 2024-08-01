import Image from "next/image";
import { useState } from "react";
const Button = ({ id, src, name, onClick, onClose, isSelected }) => {
  const clickHandler = (event) => {
    onClick(event);
    onClose();
  };
  return (
    <button
      id={id}
      className={`flex p-3 ${
        isSelected === true ? "bg-slate-500" : ""
      } items-center border text-xl w-52 bank_img  hover:bg-orange-300`}
      value={name}
      onClick={clickHandler}
    >
      <Image src={src} width={30} height={30} alt={name}></Image>
      {name}
    </button>
  );
};

export default Button;
