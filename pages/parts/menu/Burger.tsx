import React from 'react';

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
      <div className="burger_menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span />
      </div>
      <div className="back_ground" aria-expanded={open} onClick={() => setOpen(!open)}></div>
    </>
  );
};

export default Burger