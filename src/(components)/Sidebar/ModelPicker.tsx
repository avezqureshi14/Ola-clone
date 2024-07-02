import React from "react";
import style from "./sidebar.module.css";
import { productModels } from "@/(Utils)/data";
import Image, { StaticImageData } from "next/image";
import tick from "../../../public/images/tick.svg";
import info from "../../../public/images/InfoIconLight.svg";

export default function ModelPicker() {
  return (
    <div className={style.model_picker_container}>
      <h3>CHOOSE MODEL AND VARIANT</h3>
      <div className={style.mp_buttons}>
        {productModels.map((item: StaticImageData) => (
          <button key={String(item)}>
            <Image src={item} alt={String(item)} />
          </button>
        ))}
      </div>
      <div className={style.mp_note}>
        <Image src={tick} alt="checked tick" role="presentation" />
        <p>8 Year Battery Warranty included!</p>
        <button>
          <Image src={info} alt="info" role="presentation" />
        </button>
      </div>
    </div>
  );
}
