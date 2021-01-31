import { GetStaticPaths, GetStaticProps } from "next";
import Layout from '../parts/MyLayout';

export default function RecipeId({ 
  recipes 
  }: {
    recipes: {
      title: string
      description: string
      publishedAt: number
      body: string
    }
  }) {
    return (
      <>
        <div id="single">
          <Layout>
            <h1>{recipes.title}</h1>
            <div
            dangerouslySetInnerHTML={{
              __html: `${recipes.body}`,
            }} 
            />
          </Layout>
        </div>
        <style jsx>{`
          h1 {
            font-size: 1.4rem;
            padding: 10px 0;
            margin: 0;
            text-align: center;
          }
          div {
            position: relative;
            z-index: 0;
          }
          `}</style>
      </>
    );
}

// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths = async () => {
    const key: any = {
      headers: {'X-API-KEY': process.env.API_KEY},
    };
    const data = await fetch('https://konkonrecipes.microcms.io/api/v1/recipes', key)
      .then(res => res.json())
      .catch(() => null);
    const paths = data.contents.map((content: any) => `/recipes/${content.id}`);
    return {paths, fallback: false};
  };
  
  // データをテンプレートに受け渡す部分の処理を記述します
  export const getStaticProps: GetStaticProps = async (context: any) => {
    const id = context.params.id;
    const key: any = {
      headers: {'X-API-KEY': process.env.API_KEY},
    };
    const data = await fetch(
      'https://konkonrecipes.microcms.io/api/v1/recipes/' + id,
      key,
    )
      .then(res => res.json())
      .catch(() => null);
    return {
      props: {
        recipes: data,
      },
    };
  };