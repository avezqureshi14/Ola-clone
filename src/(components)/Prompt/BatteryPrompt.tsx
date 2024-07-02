import React from "react";
import style from "./promt.module.css";
import { createPortal } from "react-dom";
import Image from "next/image";
import tick from "../../../public/images/tick2.svg";

interface IBatteryPrompt {
  onClose: () => void;
}

export default function BatteryPrompt(props: IBatteryPrompt) {
  const { onClose } = props;
  function JSX() {
    return (
      <div className={style.backdrop} onClick={onClose}>
        <div
          className={style.note_container}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={style.note_title}>
            <h3>8 Year Battery Warranty included</h3>
            <Image src={tick} alt="tick" role="presentation" />
          </div>
          <p>
            With this warranty, coverage up to 80,000 kms or 8 years, whichever
            comes first. <a href="#"> Know more.</a>
          </p>
          <button className={style.p_container_card_button} onClick={onClose}>
            Got it
          </button>
        </div>
      </div>
    );
  }
  return createPortal(<JSX />, document.body);
}
