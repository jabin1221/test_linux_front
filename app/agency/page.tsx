"use client";
import { createPortal } from "react-dom";
import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import Modal_Frame from "./Modal_Frame";
import { banks, type } from "./dummy_data";
export default function Page() {
  const [openModal, open] = useState(false);
  const [buttonType, changeButton] = useState("1");
  const [buttonValue, changeValue] = useState("");
  const [selectedButton, setSelectedButton] = useState("");
  const closeModal = () => open(false);
  const clickHeader = (event) => {
    changeButton(event.target.value);
  };
  const buttonHandler = (event) => {
    changeValue(event.target.value);
    setSelectedButton(event.target.id.toString());
  };
  return (
    <div>
      <input type="text" value={buttonValue} readOnly />{" "}
      <button type="button" onClick={() => open(true)}>
        기관선택
      </button>
      {openModal &&
        createPortal(
          <Modal onClose={closeModal}>
            <Modal_Frame onClose={closeModal} onClick={clickHeader}>
              {banks.map((bank) =>
                buttonType === type[bank.type] ? (
                  <Button
                    key={bank.id}
                    src={bank.src}
                    name={bank.name}
                    onClick={buttonHandler}
                    isSelected={selectedButton === bank.id.toString()}
                    id={bank.id}
                  />
                ) : (
                  ""
                )
              )}
            </Modal_Frame>
          </Modal>,
          document.body
        )}
    </div>
  );
}
