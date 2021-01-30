import React from 'react';

type Props = {
    open: boolean;
    setOpen: Function;
  };
  
export const Nav: React.FC<Props> = ({
    open,
}) => {  
    return (
        <nav className="nav_menu" aria-expanded={open}>
            <ul>
                <li><a href="">HOME</a></li>
                <li><a href="">HOME</a></li>
                <li><a href="">HOME</a></li>
                <li><a href="">HOME</a></li>
          </ul>
        </nav>
    );
};

export default Nav;