import Image from "next/image";
import style from "./sidebar.module.css";
import React from "react";
import tag from "../../../public/images/tag_coupons_offer.svg";

export default function Footer() {
  return (
    <div className={style.footer_container}>
      <div className={style.footer_ad}>
        <Image src={tag} alt="tag" role="presentation" />
        <p>Exchange Value up to ₹40,000</p>
      </div>
      <div className={style.footer_container_details}>
        <div>
          <p>₹1,32,499 EMI</p> <p>starting from ₹3,099</p>
        </div>
        <button>continue</button>
      </div>
    </div>
  );
}
