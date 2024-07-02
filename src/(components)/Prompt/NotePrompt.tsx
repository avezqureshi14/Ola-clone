import React from "react";
import style from "./promt.module.css";
import Image from "next/image";
import info from "../../../public/images/InfoImage.svg";
import { createPortal } from "react-dom";

interface INoteProps {
  onClose: () => void;
}

export default function NotePrompt(props: INoteProps) {
  const { onClose } = props;

  function JSX() {
    return (
      <div className={style.backdrop} onClick={onClose}>
        <div
          className={style.note_container}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={style.note_title}>
            <h3 style={{ color: "#000" }} >The delivery timeline mentioned is subject to</h3>
            <Image src={info} alt="info" role="presentation" />
          </div>
          <ul className={style.note_list}>
            <li>
              - Uploading of requisite documents within the same day of payment.
            </li>
            <li>
              - Availability of stock at the designated fulfillment center.
            </li>
            <li>- Insurance bought from Ola at the time of purchase.</li>
            <li>- Opt-in to pickup at Experience Center, if applicable.</li>
            <li>
              - For Financing cases, time taken for bank approval will be
              additional.
            </li>
          </ul>
          <button className={style.p_container_card_button} onClick={onClose}>
            Okay, Got it
          </button>
        </div>
      </div>
    );
  }
  return createPortal(<JSX />, document.body);
}
