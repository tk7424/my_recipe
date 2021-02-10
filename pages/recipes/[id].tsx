import { GetStaticPaths, GetStaticProps } from "next";
import Layout from '../parts/MyLayout';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from "next/router";

export default function RecipeId({ 
  recipes 
  }: {
    recipes: {
      title: string
      description: string
      image: any
      publishedAt: number
      body: string
      category: any
    }
  }) {
    const url:any = useRouter();
    const art_url: any = url.asPath
    return (
      <>
        <Layout>
        <Head>
          <title>【レシピ】{recipes.title}| cuisine idee konkon 〜コンコンレシピ〜</title>
          <meta name="description" content={recipes.description} />
          <meta property="og:url" content={`https://cuisineidee.com${art_url}`} />
          <meta property="og:title" content={recipes.title} />
          <meta property="og:description" content={recipes.description} />
          <meta property="og:image" content={recipes.image.url} />
        </Head>
          <div id="single">
            <h1>{recipes.title}</h1>
            <div
            dangerouslySetInnerHTML={{
              __html: `${recipes.body}`,
            }} 
            />
            <div className="flex">
              <Link href="https://www.youtube.com/channel/UCD9rstz787RQXIuk_rPtbJg">
                <a target="_blank" className="youtube_btn">チャンネル登録</a>
              </Link>
              <Link href={`/category/${recipes.category.category}`}>
                <a className={`_${recipes.category.category}`}>{recipes.category.category}一覧</a>
              </Link>
            </div>
          </div>
        </Layout>
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
          @media screen and (min-width:800px) {
            h1 {
              padding: 40px 0 30px;
              font-size: 2rem;
            }
            .flex {
              display: flex;
              margin: 30px 0 0;
            }
            a {
              margin: 20px 1vw 0;
            }
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