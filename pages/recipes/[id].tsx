import { GetStaticPaths, GetStaticProps } from "next";
import Layout from '../parts/MyLayout';
import Link from 'next/link';

export default function RecipeId({ 
  recipes 
  }: {
    recipes: {
      title: string
      description: string
      publishedAt: number
      body: string
      category: any
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
            <Link href="https://www.youtube.com/channel/UCD9rstz787RQXIuk_rPtbJg">
              <a target="_blank" className="youtube_btn">チャンネル登録</a>
            </Link>
            <Link href={`/category/${recipes.category.category}`}>
              <a className={`_${recipes.category.category}`}>{recipes.category.category}一覧</a>
            </Link>
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
          a {
            width: 80vw;
            padding: 10px 0;
            margin: 20px 10vw 0;
            text-align: center;
            text-shadow: 1px 1px 1px #947d7d;
            border-radius: 23px;
            display: inline-block;
            color: #fff;
            text-decoration: none;
          }
          a:active {
            background-color: #c3c3c3;
          }
          .youtube_btn {
            background-color: #ff6969;
          }
          `}</style>
      </>
    );
}

// 静的生成のためのパスを指定
export const getStaticPaths: GetStaticPaths = async () => {
    const key: any = {
      headers: {'X-API-KEY': process.env.API_KEY},
    };
    const data = await fetch('https://konkonrecipes.microcms.io/api/v1/recipes?limit=50', key)
      .then(res => res.json())
      .catch(() => null);
    const paths = data.contents.map((content: any) => `/recipes/${content.id}`);
    return {paths, fallback: false};
  };
  
  // データをテンプレートに受け渡す部分の処理を記述
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