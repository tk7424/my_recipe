import styles from "../../components/Header/header.module.scss";
// import Image from 'next/image'
import React, { useState } from 'react';
import Link from "next/link";
import Burger from "./menu/Burger";
import Nav from "./menu/Nav"

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <Link href="/">
        <img src="/title_logo.png" alt="タイトルロゴ" />
      </Link>
      <Burger open={open} setOpen={setOpen} />
      <Nav open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header