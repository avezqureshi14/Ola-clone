import React from "react";
import style from "./sidebar.module.css";
import { productModels } from "@/(Utils)/data";
import Image, { StaticImageData } from "next/image";
import tick from "../../../public/images/tick.svg";
import info from "../../../public/images/InfoIconLight.svg";
import BatteryPrompt from "../Prompt/BatteryPrompt";
import useModel from "@/(hooks)/useModel";

export default function ModelPicker() {
  const { open, onOpen, onClose } = useModel();

  return (
    <div className={style.model_picker_container}>
      <h3>CHOOSE MODEL AND VARIANT</h3>
      <div className={style.mp_buttons}>
        {productModels.map((item: StaticImageData) => (
          <button style={{ margin: '4px' }} key={String(item)}>
            <Image src={item} alt={String(item)} />
          </button>
        ))}
      </div>
      <div style={{ marginTop: '1rem' }} className={style.mp_note}>
        <Image src={tick} alt="checked tick" role="presentation" />
        <p style={{ color: "#000" }} >8 Year Battery Warranty included!</p>
        <button onClick={onOpen}>
          <Image src={info} alt="info" role="presentation" />
        </button>
      </div>
      {open && <BatteryPrompt onClose={onClose} />}
    </div>
  );
}
