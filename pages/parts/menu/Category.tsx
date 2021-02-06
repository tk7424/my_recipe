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
          {/* 後から動的に変更したい */}
          <Link href="/category/APPETIZER"><li aria-expanded={open} onClick={() => setOpen(!open)}><a>前菜</a></li></Link>
          <Link href="/category/MAIN"><li aria-expanded={open} onClick={() => setOpen(!open)}><a>メイン料理</a></li></Link>
          <Link href="/category/DESERT"><li aria-expanded={open} onClick={() => setOpen(!open)}><a>デザート</a></li></Link>
          <Link href="/category/1DISH"><li aria-expanded={open} onClick={() => setOpen(!open)}><a>1品料理</a></li></Link>
          <Link href="/category/ALONEFOOD"><li aria-expanded={open} onClick={() => setOpen(!open)}><a>一人暮らし飯</a></li></Link>
          <style jsx>{`
          li {
            font-size: 0.9rem;
          }
          `}</style>
        </>
)}

export default Category

/* 動的にする際の処理 */
// export const getStaticProps: GetStaticProps = async () => {
//   const key: any = {
//     headers: {'X-API-KEY': process.env.API_KEY},
//   };
//   const data = await fetch('https://konkonrecipes.microcms.io/api/v1/category?', key)
//     .then(res => res.json())
//     .catch(() => null);

//   return {
//     props: {
//       recipes: data.contents,
//     }
//   };
// };