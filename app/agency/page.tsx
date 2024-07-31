"use client";
import { createPortal } from "react-dom";
import { useState } from "react";
import Modal from "./Modal";
import Bank from "./Bank";
import Modal_Frame from "./Modal_Frame";
import Securities from "./Securities";
import { banks, securities } from "./dummy_data";
export default function Page() {
  const [openModal, open] = useState(false);
  const [buttonType, changeButton] = useState("1");
  const [buttonValue, changeValue] = useState("");
  const closeModal = () => open(false);
  const clickHeader = (event) => {
    changeButton(event.target.value);
  };
  const buttonHandler = (event) => {
    console.log(event.target.value);
    changeValue(event.target.value);
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
              {buttonType === "1" ? (
                <div className="flex flex-row flex-wrap m-3 max-w-156">
                  {banks.map((bank) => (
                    <Bank
                      key={bank.id}
                      src={bank.src}
                      name={bank.name}
                      onClick={buttonHandler}
                    />
                  ))}
                </div>
              ) : (
                ""
              )}
              {buttonType === "2" ? (
                <div className="flex flex-row flex-wrap m-3 max-w-156">
                  {securities.map((securitie) => (
                    <Securities
                      key={securitie.id}
                      src={securitie.src}
                      name={securitie.name}
                      onClick={buttonHandler}
                    />
                  ))}
                </div>
              ) : (
                ""
              )}
              {buttonType === "3" ? "" : ""}
              {buttonType === "4" ? "" : ""}
            </Modal_Frame>
          </Modal>,
          document.body
        )}
    </div>
  );
}
