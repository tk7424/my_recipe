import React from 'react';
import styles from "../../../components/Header/burger.module.scss";

type Props = {
  open: boolean;
  setOpen: Function;
};

const Burger: React.FC<Props> = ({
  open,
  setOpen,
}) =>  {
  return (
    <>
      <div className={styles.burger_menu} aria-expanded={open} onClick={() => setOpen(!open)}>
        <span />
      </div>
      <div className={styles.back_ground} aria-expanded={open} onClick={() => setOpen(!open)}></div>
    </>
  );
};

export default Burger