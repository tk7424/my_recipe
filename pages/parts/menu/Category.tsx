import Link from "next/link";

export default function Category() {
return (
        <>
          {/* 後から動的に変更したい */}
          <Link as="/category/APPETIZER" href="/APPETIZER"><li><a>前菜</a></li></Link>
          <Link as="/category/MAIN" href="/MAIN"><li><a>メイン料理</a></li></Link>
          <Link as="/category/DESERT" href="/DESERT"><li><a>デザート</a></li></Link>
          <Link as="/category/1DISH" href="/1DISH"><li><a>1品料理</a></li></Link>
          <Link as="/category/ALONEFOOD" href="/ALONEFOOD"><li><a>一人暮らし飯</a></li></Link>
          <style jsx>{`
          li {
            font-size: 0.9rem;
          }
          `}</style>
        </>
)}

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