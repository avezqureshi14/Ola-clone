"use client";

import React, { useState } from "react";
import style from "./sidebar.module.css";
import { IProductsColors, productColors } from "@/(Utils)/data";
import Image from "next/image";

export default function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState<string>("Amethys");

  function handleColorChange(color: string) {
    setSelectedColor(color);
  }

  return (
    <div className={style.color_selector}>
      <div className={style.color_selector_title_container}>
        <span>Color</span> . <span>{selectedColor}</span>
      </div>
      <div className={style.buttons_list}>
        {productColors.map((item: IProductsColors) => (
          <button
            key={String(item)}
            className={`${style.color_button}  ${
              selectedColor === item.title ? style.color_button_active : ""
            }`}
            onClick={() => handleColorChange(item.title)}
          >
            <Image
              src={item.img}
              alt={item.title}
              role="presentation"
              className={style.color_button_image}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
