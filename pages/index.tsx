import { GetStaticProps } from 'next';
import Link from 'next/link';
import Header from './parts/header';
import Footer from './parts/footer';

export default function Home({ 
  recipes
  }: {
    recipes: {
      id: any
      title: string
      image: any
    }[]
  }) {
  return (
    <div id="main">
      <Header />
      {recipes.map(({ id, title, image }) => (
        <ul key={id}>
          <li>
            <div>
              {image ? (
                  <img src={image.url + "?w=210&h=140"} alt="" />
              ) : (
                  <div />
                )}
            </div>
            <Link href={`recipes/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        </ul>
      ))}
      <Footer />
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps: GetStaticProps = async () => {
  const key: any = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://konkonrecipes.microcms.io/api/v1/recipes?limit=4', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      recipes: data.contents,
    },
  };
};