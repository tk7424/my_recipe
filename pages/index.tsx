import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from './parts/MyLayout'
import Main_V from "./parts/main_v";
import NewMovie from './parts/new_movie';
import CategorySort from './parts/category_sort';

export default function Home({recipes}: {recipes: {
      id: any
      title: string
      image: any
      description: string
      category: any
    }[]}
    ) {
  return (
    <>
      <Layout>
      <Main_V />
      <NewMovie />
      <CategorySort />
      <div className="contents">
        {recipes.map(({ id, title, image, description, category }) => (
          <>
            <ul key={id} className={`sort_${category.category} ${"content"}`}>
              <Link href={`category/${category.category}`}><h4 className={`_${category.category}`}>{category.category}</h4></Link>
              <Link href={`recipes/${id}`}>
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
              </Link>
            </ul>
          </>
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
            height: 220px;
            border: solid 1px #c3c3c3;
            border-radius: 10px;
            background-color: #fff;
            box-shadow: 1px 1px 10px #afafaf;
          }
          h4 {
            margin: 0;
            border-radius: 0 10px 0 10px;
            text-align: center;
            color: #fff;
            text-shadow: 1px 1px 1px #947d7d;
            font-family: "apple Chancery", serif;
            position: absolute;
            transform: translate(18.2vw,-0.1vw);
            width: 27vw;
          }
          h4:active {
            background-color: #c3c3c3;
          }
          h4:hover{cursor: pointer;}
          li {
            height: 220px;
            border-radius: 10px;
          }
          li:active {
            background-color: #c3c3c3;
          }
          li:hover{cursor: pointer;}
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
          @media screen and (min-width:800px) {
            .contents {
              margin: 0 15vw;
              justify-content: flex-start;
            }
            ul {
              width: 15vw;
              height: 250px;
              margin: 10px 1vw 20px;
            }
            h4 {
              width: 8vw;
              transform: translate(7.05vw,-0.1vw);
            }
            li {
              height: 250px;
            }
            img {
              width: 15vw;
              height: 10vw;
            }
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
  const data = await fetch('https://konkonrecipes.microcms.io/api/v1/recipes?limit=50', key)
    .then(res => res.json())
    .catch(() => null);

  return {
    props: {
      recipes: data.contents,
    }
  };
};
