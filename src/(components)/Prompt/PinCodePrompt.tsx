"use client";

import React, { ChangeEvent, useState } from "react";
import style from "./promt.module.css";
import { createPortal } from "react-dom";

interface IPinCodePrompts {
  onClose: () => void;
}

export default function PinCodePrompt(props: IPinCodePrompts) {
  const { onClose } = props;

  function JSX() {
    const [pinCode, setPinCode] = useState<string>("");

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
      const value = event.target.value;
      setPinCode(value);
    }

    return (
      <div className={style.backdrop} onClick={onClose}>
        <div
          className={style.p_container_card}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={style.p_container_card_title}>
            <h3>Enter your registration PIN Code</h3>
            <h4>
              Scooter price depends on PIN Code. For registration, PIN Code
              should be as per your address proofs
            </h4>
          </div>
          <input
            value={pinCode}
            onChange={handleChange}
            type="text"
            placeholder="PIN Code"
            className={style.p_input}
            autoFocus
          />
          <button className={style.p_container_card_button} disabled={!pinCode}>
            Continue
          </button>
        </div>
      </div>
    );
  }

  return createPortal(<JSX />, document.body);
}
