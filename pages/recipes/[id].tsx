import { GetStaticPaths, GetStaticProps } from "next";
import AdSense from 'react-adsense';
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
    tags: any
  }
}) {
  const url: any = useRouter();
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
          <div className="tag_box">
            {recipes.tags[0] ? <Link href={`/tags/${recipes.tags[0].id}`}><h5>{recipes.tags[0].tag}</h5></Link> : ""}
            {recipes.tags[1] ? <Link href={`/tags/${recipes.tags[1].id}`}><h5>{recipes.tags[1].tag}</h5></Link> : ""}
            {recipes.tags[2] ? <Link href={`/tags/${recipes.tags[2].id}`}><h5>{recipes.tags[2].tag}</h5></Link> : ""}
            {recipes.tags[3] ? <Link href={`/tags/${recipes.tags[3].id}`}><h5>{recipes.tags[3].tag}</h5></Link> : ""}
            {recipes.tags[4] ? <Link href={`/tags/${recipes.tags[4].id}`}><h5>{recipes.tags[4].tag}</h5></Link> : ""}
          </div>
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
          <AdSense.Google
            client='ca-pub-7785406076713581'
            slot=''
          />
        </div>
      </Layout>
      <style jsx>{`
          h1 {
            font-size: 1.4rem;
            padding: 10px 0;
            margin: 0;
            text-align: center;
          }
          .tag_box {
            display: flex;
            justify-content: center;
            text-align: center;
          }
          h5 {
            display: block;
            width: 20vw;
            background-color: #999;
            border-radius: 15px;
            margin: 0 3px 10px;
            font-size: 0.9rem;
            color: #fff;
            font-weight: normal;
          }
          h5:active {background-color: #fff;}
          div {
            position: relative;
            z-index: 0;
          }
          .flex {
            margin: 0 0 20px;
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
            h5 {
              width: 150px;
              height: 27px;
              padding: 5px 0 0 0;
            }
            .flex {
              display: flex;
              margin: 30px 0 20px;
              justify-content: center;
            }
            a {
              margin: 20px 10px 0;
              width: 350px;
            }
          }
          `}</style>
    </>
  );
}

// 静的生成のためのパスを指定
export const getStaticPaths: GetStaticPaths = async () => {
  const key: any = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://konkonrecipes.microcms.io/api/v1/recipes?limit=50', key)
    .then(res => res.json())
    .catch(() => null);
  const paths = data.contents.map((content: any) => `/recipes/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id;
  const key: any = {
    headers: { 'X-API-KEY': process.env.API_KEY },
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