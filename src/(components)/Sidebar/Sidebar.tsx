import style from "./sidebar.module.css";
import arrowBack from "../../../public/images/back_arrow_icon.svg";
import Image from "next/image";
import ColorSelector from "./ColorSelector";
import ModelPicker from "./ModelPicker";
import ProductDetails from "./ProductDetails";
import MoreLinks from "./MoreLinks";
import Footer from "./Footer";
import useModel from "@/(hooks)/useModel";
import PinCodePrompt from "../Prompt/PinCodePrompt";

export default function Sidebar() {
  const { open, onOpen, onClose } = useModel();

  return (
    <section className={style.sidebar_main_container}>
      <div className={style.sidebar_main_container_inner}>
        <div className={style.sb_top_section}>
          <button className={style.sb_arrow_button}>
            <Image src={arrowBack} alt="back button" />
          </button>
          <label
            htmlFor="pincode"
            className={style.pincode_select}
            onClick={onOpen}
          >
            <span>DELIVERING TO</span>
            <select
              disabled
              name="pincode"
              id="pincode"
              className={style.select}
            >
              <option value="null">Pincode</option>
            </select>
          </label>
        </div>
        <ColorSelector />
        <ModelPicker />
        <ProductDetails />
        <MoreLinks />
      </div>
      <Footer />
      {open && <PinCodePrompt onClose={onClose} />}
    </section>
  );
}
