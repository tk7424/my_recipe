import React from 'react';
import Category from './Category';

type Props = {
    open: boolean;
    setOpen: Function;
  };
  
export const Nav: React.FC<Props> = ({open}) => {  
    return (
        <nav className="nav_menu" aria-expanded={open}>
            <h4>カテゴリー一覧</h4>
            <ul>
                <Category />
            </ul>
        </nav>
    );
};