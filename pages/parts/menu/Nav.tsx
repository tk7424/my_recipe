import React from 'react';
// import Category from './Category';

type Props = {
    open: boolean;
    setOpen: Function;
  };
  
export const Nav: React.FC<Props> = ({open}) => {  
    return (
        <nav className="nav_menu" aria-expanded={open}>
            <ul>
                {/* <li><Category /></li> */}
                {/* <li><a href="">{recipes.category.category}</a></li> */}
                {/* <li><a href="">{recipes.title}</a></li> */}
                <li><a href="">HOME</a></li>
                <li><a href="">HOME</a></li>
          </ul>
        </nav>
    );
};

export default Nav;