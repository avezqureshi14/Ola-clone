"use client";

import React, { useState } from "react";
import style from "./productmain.module.css";
import Image from "next/image";
import leftArrow from "../../../public/images/banner-left-arrow.svg";
import rightArrow from "../../../public/images/banner-right-arrow.svg";
import { productBikeImages } from "@/(Utils)/data";

export default function Product() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  function next() {
    setSelectedIndex((prev) => {
      if (prev === productBikeImages?.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  }
  function previous() {
    setSelectedIndex((prev) => {
      if (prev === 0) {
        return productBikeImages?.length - 1;
      }
      return prev - 1;
    });
  }

  return (
    <section className={style.product_page_main}>
      <button onClick={previous} className={style.arrow_button_left}>
        <Image src={leftArrow} alt="<" role="presentation" />
      </button>
      <button onClick={next} className={style.arrow_button_right}>
        <Image src={rightArrow} alt="<" role="presentation" />
      </button>
      <div className={style.image_container}>
        <Image src={productBikeImages[selectedIndex]} alt="bike image" className={style.image_container_image} />
      </div>
    </section>
  );
}
