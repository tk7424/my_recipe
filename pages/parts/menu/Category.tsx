import Link from "next/link";
type Props = {
  open: boolean;
  setOpen: Function;
};

const Category: React.FC<Props> = ({
  open,
  setOpen,
}) => {
return (
        <>
          <Link href="/category/APPETIZER"><li aria-expanded={open} onClick={() => setOpen(!open)}><h3>前菜</h3></li></Link>
          <Link href="/category/MAIN"><li aria-expanded={open} onClick={() => setOpen(!open)}><h3>メイン料理</h3></li></Link>
          <Link href="/category/DESERT"><li aria-expanded={open} onClick={() => setOpen(!open)}><h3>デザート</h3></li></Link>
          <Link href="/category/1DISH"><li aria-expanded={open} onClick={() => setOpen(!open)}><h3>1品料理</h3></li></Link>
          <Link href="/category/ALONEFOOD"><li aria-expanded={open} onClick={() => setOpen(!open)}><h3>一人暮らし飯</h3></li></Link>
        </>
)}

export default Category