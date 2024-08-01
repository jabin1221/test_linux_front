"use client";
import { createPortal } from "react-dom";
import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import Modal_Frame from "./Modal_Frame";
import { banks, type } from "./dummy_data";

export default function BankSelect({bankName, setBank}) {
  const [openModal, open] = useState(false);
  const [buttonType, changeButton] = useState("1");
  const closeModal = () => open(false);
  const clickHeader = (event) => {
    changeButton(event.target.value);
  };
  const buttonHandler = (event) => {
    setBank(event.currentTarget.id);
  };
  return (
    <>
      <button type="button" className="w-full h-full" onClick={() => open(true)}>
        <div className="flex justify-center items-center">
          {bankName}
        </div>
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
                    onClose={closeModal}
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
    </>
  );
}
