import React from "react";
import style from "./sidebar.module.css";
import Image from "next/image";
import info from "../../../public/images/InfoIconLight.svg";

export default function ProductDetails() {
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
        <Image src={info} alt="info" />
      </div>
    </div>
  );
}
