import React from "react";
import style from "./sidebar.module.css";
import { TMoreLinks, moreLinks } from "@/(Utils)/data";
import Image from "next/image";
import arrowRight from "../../../public/images/rightArrow.svg";

export default function MoreLinks() {
  return (
    <div className={style.moreLinks}>
      {moreLinks.map((item: TMoreLinks) => (
        <div key={item.title} className={style.moreLinks_item}>
          <div className={style.moreLinks_item_inner1}>
            <Image src={item.icon} alt="icon" role="presentation" />
            <div className={style.moreLinks_details}>
              <p>{item.title}</p>
              <p>{item.subtitle}</p>
            </div>
          </div>
          <div className={style.moreLinks_arrow}>
            <Image src={arrowRight} alt="arrow" role="presentation" />
          </div>
        </div>
      ))}
    </div>
  );
}
