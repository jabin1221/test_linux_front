"use client";
import { createPortal } from "react-dom";
import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import Modal_Frame from "./Modal_Frame";
import Securities from "./Securities";
import { banks, securities, nationalTax, localTax } from "./dummy_data";
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
              {buttonType === "1"
                ? banks.map((bank) => (
                    <Button
                      key={bank.id}
                      src={bank.src}
                      name={bank.name}
                      onClick={buttonHandler}
                    />
                  ))
                : ""}
              {buttonType === "2"
                ? securities.map((securitie) => (
                    <Button
                      key={securitie.id}
                      src={securitie.src}
                      name={securitie.name}
                      onClick={buttonHandler}
                    />
                  ))
                : ""}
              {buttonType === "3"
                ? nationalTax.map((tax) => (
                    <Button
                      key={tax.id}
                      src={tax.src}
                      name={tax.name}
                      onClick={buttonHandler}
                    />
                  ))
                : ""}
              {buttonType === "4"
                ? localTax.map((tax) => (
                    <Button
                      key={tax.id}
                      src={tax.src}
                      name={tax.name}
                      onClick={buttonHandler}
                    />
                  ))
                : ""}
            </Modal_Frame>
          </Modal>,
          document.body
        )}
    </div>
  );
}
