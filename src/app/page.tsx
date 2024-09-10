"use client";

import React from "react";
import Image from "next/image";
import styles from "@/styles/page.module.css";
import Search from "@/app/components/search";

export default function Home() {
  // TODO create Search component on Main page
  return (
    <React.Fragment>
      <section className={styles.home}>
        <h1>FlickMate</h1>
        <Search />
      </section>
    </React.Fragment>
  );
}
