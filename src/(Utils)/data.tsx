import image1 from "../../public/images/productFront.webp";
import image2 from "../../public/images/productfrobnt2.webp";
import image3 from "../../public/images/productfront3.webp";
import image4 from "../../public/images/productfront4.webp";
import ad1 from "../../public/images/productad-slide1.svg";
import ad2 from "../../public/images/productad-slide2.svg";
import color1 from "../../public/images/amitist.png";
import color2 from "../../public/images/steller+blue.png";
import color3 from "../../public/images/Rectangle+3643.png";
import color4 from "../../public/images/jet_black_circle.png";
import color5 from "../../public/images/midnight_blue_circle.png";
import model1 from "../../public/images/ola-s1-pro-icon.svg";
import model2 from "../../public/images/ola-s1-air-icon.svg";
import model3 from "../../public/images/s1X_img.svg";
import morL1 from "../../public/images/delivery-icon.svg";
import moreL2 from "../../public/images/compare-models-icon.svg";

import { StaticImageData } from "next/image";

export const productBikeImages: StaticImageData[] = [
  image1,
  image2,
  image3,
  image4,
];
export const productAdImages: StaticImageData[] = [ad1, ad2];

export interface IProductsColors {
  img: StaticImageData;
  title: string;
}

export const productColors: IProductsColors[] = [
  { img: color1, title: "Amethys" },
  { img: color2, title: "Steller blue" },
  { img: color3, title: "Matt White" },
  { img: color4, title: "jet Black" },
  { img: color5, title: "Midnight Blue" },
];

export const productModels: StaticImageData[] = [model1, model2, model3];

export type TMoreLinks = {
  icon: StaticImageData;
  title: string;
  subtitle: string;
};

export const moreLinks: TMoreLinks[] = [
  {
    icon: morL1,
    title: "DELIVERING TO",
    subtitle: "Select location",
  },
  {
    icon: moreL2,
    title: "COMPARE MODELS",
    subtitle: "View full spec sheet",
  },
];
