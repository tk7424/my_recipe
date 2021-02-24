import React from 'react';
import Link from "next/link";
import Category from './Category';

type Props = {
    open: boolean;
    setOpen: Function;
};

const Nav: React.FC<Props> = ({ open, setOpen }) => {
    return (
        <>
            <nav className="nav_menu" aria-expanded={open}>
                <Link href="/"><h3 aria-expanded={open} onClick={() => setOpen(!open)}>ホーム</h3></Link>
                <Link href="/news"><h3 aria-expanded={open} onClick={() => setOpen(!open)}>NEWS一覧</h3></Link>
                <Link href="/tags"><h3 aria-expanded={open} onClick={() => setOpen(!open)}>タグ一覧</h3></Link>
                <h4>カテゴリー一覧</h4>
                <ul>
                    <Category open={open} setOpen={setOpen} />
                </ul>
            </nav>
            <style jsx>{`
            h3 {
            margin: 0 0 40px 40px;
            font-size: 1rem;
            color: #383838;
            font-weight: normal;
            border-bottom: solid 1px #383838;
            }
            h3:active {
                background-color: #c3c3c3;
            }
            `}</style>
        </>
    );
};

export default Nav