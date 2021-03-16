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
          <Link href="/category/APPETIZER"><li aria-expanded={open} onClick={() => setOpen(!open)}><a>前菜</a></li></Link>
          <Link href="/category/MAIN"><li aria-expanded={open} onClick={() => setOpen(!open)}><a>メイン料理</a></li></Link>
          <Link href="/category/DESERT"><li aria-expanded={open} onClick={() => setOpen(!open)}><a>デザート</a></li></Link>
          <Link href="/category/1DISH"><li aria-expanded={open} onClick={() => setOpen(!open)}><a>1品料理</a></li></Link>
          <Link href="/category/ALONEFOOD"><li aria-expanded={open} onClick={() => setOpen(!open)}><a>一人暮らし飯</a></li></Link>
        </>
)}

export default Category