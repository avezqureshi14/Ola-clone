import React from "react";
import style from "./sidebar.module.css";
import { TMoreLinks, moreLinks } from "@/(Utils)/data";
import Image from "next/image";
import arrowRight from "../../../public/images/rightArrow.svg";
import useModel from "@/(hooks)/useModel";
import PinCodePrompt from "../Prompt/PinCodePrompt";

export default function MoreLinks() {
  const { open, onOpen, onClose } = useModel();
  function handleOnClick(item: TMoreLinks) {
    if (item.title === "DELIVERING TO") {
      onOpen();
      return;
    }
  }
  return (
    <div className={style.moreLinks}>
      {moreLinks.map((item: TMoreLinks) => (
        <div
          key={item.title}
          className={style.moreLinks_item}
          onClick={() => handleOnClick(item)}
          style={{
            marginBottom: '-1rem'
          }}
        >
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
      {open && <PinCodePrompt onClose={onClose} />}
    </div>
  );
}
