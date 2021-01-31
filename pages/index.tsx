import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from './parts/MyLayout'
import Main_V from "./parts/main_v";
import NewMovie from './parts/new_movie';

export default function Home({ 
  recipes
  }: {
    recipes: {
      id: any
      title: string
      image: any
      description: string
    }[]
  }) {
  return (
    <>
      <Layout>
      <Main_V />
      <NewMovie />
      <div className="contents">
        {recipes.map(({ id, title, image, description }) => (
          <Link href={`recipes/${id}`}>
          <ul key={id}>
            <li>
              <div>
                {image ? (
                    <img src={image.url} alt="" />
                ) : (
                    <div />
                )}
              </div>
              <h3>{title}</h3>
                <p>{description}</p>
            </li>
          </ul>
          </Link>
        ))}
      </div>
      </Layout>
      <style jsx>{`
          .contents {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin: 0 3vw;
          }
          ul {
            list-style: none;
            padding: 0;
            margin: 10px 0 0;
            width: 45vw;
            border: solid 1px #c3c3c3;
            border-radius: 10px;
            background-color: #fff;
            box-shadow: 1px 1px 10px #afafaf;
          }
          ul:active {
            background-color: #c3c3c3;
          }
          img {
            width: 45vw;
            height: 28vw;
            border-radius: 10px 10px 0 0;
          }
          h3 {
            font-size: 0.9rem;
            margin: 0;
            text-align: center;
          }
          p {
            font-size: 0.8rem;
            padding: 0 1vw;
            margin: 5px 0;
            color: #666;
          }
          `}</style>
    </>
  );
};

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps: GetStaticProps = async () => {
  const key: any = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://konkonrecipes.microcms.io/api/v1/recipes?', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      recipes: data.contents,
    },
  };
};