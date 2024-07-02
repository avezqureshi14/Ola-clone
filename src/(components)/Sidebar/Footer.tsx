import Image from "next/image";
import style from "./sidebar.module.css";
import React from "react";
import tag from "../../../public/images/tag_coupons_offer.svg";
import useModel from "@/(hooks)/useModel";
import PinCodePrompt from "../Prompt/PinCodePrompt";

export default function Footer() {
  const { open, onOpen, onClose } = useModel();

  return (
    <>
      <div className={style.footer_container}>
        <div className={style.footer_ad}>
          <Image src={tag} alt="tag" role="presentation" />
          <p>Exchange Value up to ₹40,000</p>
        </div>
        <div className={style.footer_container_details}>
          <div>
            <p>₹1,32,499 EMI</p> <p style={{ color: "#5d5d5d" }}  >starting from ₹3,099</p>
          </div>
          <button onClick={onOpen}>Continue</button>
        </div>
      </div>
      {open && <PinCodePrompt onClose={onClose} />}
    </>
  );
}
