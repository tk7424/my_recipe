import { GetStaticProps } from 'next';
import Link from 'next/link'
// import Layout from '../components/Layout'

export default function Home({ 
  recipes
  }: {
    recipes: {
      id: any
      title: string
    }[]
  }) {
  return (
    <div>
      {recipes.map(({ id, title }) => (
        <ul key={id}>
          <li >
            <Link href={`recipes/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}


// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async () => {
  const key: any = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://konkonrecipes.microcms.io/api/v1/recipes', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      recipes: data.contents,
    },
  };
};