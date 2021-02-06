import React from 'react';
import Category from './Category';

type Props = {
    open: boolean;
    setOpen: Function;
  };
  
const Nav: React.FC<Props> = ({open, setOpen}) => {  
    return (
        <nav className="nav_menu" aria-expanded={open}>
            <h4>カテゴリー一覧</h4>
            <ul>
                <Category open={open} setOpen={setOpen} />
            </ul>
        </nav>
    );
};

export default Nav