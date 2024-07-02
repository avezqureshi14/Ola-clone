import React from "react";
import style from "./sidebar.module.css";
import Image from "next/image";
import info from "../../../public/images/InfoIconLight.svg";
import useModel from "@/(hooks)/useModel";
import NotePrompt from "../Prompt/NotePrompt";

export default function ProductDetails() {
  const { open, onOpen, onClose } = useModel();

  return (
    <div className={style.model_details_container}>
      <p className={style.model_details_title}>S1 Pro 2nd Generation</p>
      <div className={style.model_details_cols}>
        <div className={style.model_details_col}>
          <p>CERTIFIED RANGE</p>
          <p>195km</p>
        </div>
        <div className={style.model_details_col}>
          <p>TOP SPEED</p>
          <p>120 km/h</p>
        </div>
        <div className={style.model_details_col}>
          <p>0-40 km/h</p>
          <p>2.9sec</p>
        </div>
      </div>
      <div className={style.model_details_note_bottom}>
        <p>Estimated delivery by 14th Jul 2024!</p>
        <button onClick={onOpen}>
          <Image src={info} alt="info" />
        </button>
      </div>
      {open && <NotePrompt onClose={onClose} />}
    </div>
  );
}
