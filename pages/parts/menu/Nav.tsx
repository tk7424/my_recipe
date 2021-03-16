import React from 'react';
import Link from "next/link";
import Category from './Category';
import styles from "../../../components/Header/nav.module.scss";

type Props = {
    open: boolean;
    setOpen: Function;
};

const Nav: React.FC<Props> = ({ open, setOpen }) => {
    return (
        <nav className={styles.nav_menu} aria-expanded={open}>
            <Link href="/"><h3 aria-expanded={open} onClick={() => setOpen(!open)}>ホーム</h3></Link>
            <Link href="/news"><h3 aria-expanded={open} onClick={() => setOpen(!open)}>NEWS一覧</h3></Link>
            <Link href="/tags"><h3 aria-expanded={open} onClick={() => setOpen(!open)}>タグ一覧</h3></Link>
            <h4>カテゴリー一覧</h4>
            <ul>
                <Category open={open} setOpen={setOpen} />
            </ul>
        </nav>
    );
};

export default Nav