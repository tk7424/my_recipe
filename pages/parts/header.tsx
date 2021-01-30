import React, { useState } from 'react';
import Link from "next/link";
import Burger from "./menu/Burger";
import Nav from "./menu/Nav"

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <Link href="/">
        <a>Cuisine idee konkon</a>
      </Link>
      <Burger open={open} setOpen={setOpen} />
      <Nav open={open} setOpen={setOpen} />
    </header>
  );
};

  export default Header;