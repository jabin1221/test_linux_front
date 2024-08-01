import { useState } from "react";

const Modal_Frame = ({ children, onClose, onClick }) => {
  const [selectedButton, setSelectedButton] = useState("은행");

  const buttons = [
    { name: "은행", value: 1 },
    { name: "증권사", value: 2 },
    { name: "국세납부", value: 3 },
    { name: "지방세납부", value: 4 },
  ];
  const clickHandler = (event) => {
    onClick(event);
  };
  return (
    <>
      <div
        className="bg-purple-950 p-2 m-0  text-xl text-white "
        onClick={clickHandler}
      >
        <h2>
          <p>기관선택</p>
        </h2>
      </div>
      <div className="flex justify-center p-3">
        {buttons.map((button) => {
          return (
            <button
              key={button.value}
              className={`border bg-slate-200 border-[#f2f2f2] w-36 h-20
                ${
                  selectedButton === button.name
                    ? "bg-white text-black border-t border-l border-r"
                    : "bg-gray-200 text-gray-700 border"
                }
                ${selectedButton === button.name ? "border-b-0" : "border-b"}`}
              value={button.value}
              onClick={(event) => {
                onClick(event);
                setSelectedButton(button.name);
              }}
            >
              {button.name}
            </button>
          );
        })}
      </div>
      <div className="flex flex-row flex-wrap m-3 max-w-156">{children}</div>
      <div className="flex justify-center ">
        <button className="border w-48 h-20 m-2" onClick={onClose}>
          닫기
        </button>
      </div>
    </>
  );
};

export default Modal_Frame;
