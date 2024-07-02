import React from "react";
import style from "./sidebar.module.css";
import { productColors } from "@/(Utils)/data";
import Image, { StaticImageData } from "next/image";

export default function ColorSelector() {
  return (
    <div className={style.color_selector}>
      <div className={style.color_selector_title_container}>
        <span>Color</span> . <span>Dark Black</span>
      </div>
      <div className={style.buttons_list}>
        {productColors.map((item: StaticImageData) => (
          <button key={String(item)} className={style.color_button}>
            <Image
              src={item}
              alt={String(item)}
              role="presentation"
              className={style.color_button_image}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
