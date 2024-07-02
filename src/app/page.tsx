"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Product from "@/(components)/Product/Product";
import Sidebar from "@/(components)/Sidebar/Sidebar";
import logo from "../../public/images/logo.svg";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={logo}
        alt="logo"
        role="presentation"
        className={styles.logo}
      />
      <div className={styles.image_slider}>
        <Product />
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
    </main>
  );
}
