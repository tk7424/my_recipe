import { GetStaticPaths, GetStaticProps } from "next";
import AdSense from 'react-adsense';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from "next/router";
import styles from "../../components/Detail/recipe.module.scss";
import PcNav from "../parts/menu/PcNav";

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
      <Head>
        <title>【レシピ】{recipes.title}| cuisine idee konkon 〜コンコンレシピ〜</title>
        <meta name="description" content={recipes.description} />
        <meta property="og:url" content={`https://cuisineidee.com${art_url}`} />
        <meta property="og:title" content={recipes.title} />
        <meta property="og:description" content={recipes.description} />
        <meta property="og:image" content={recipes.image.url} />
      </Head>
      <div id="pc_body">
        <div className="pc_body_left">
          <div id="single" className={styles.recipe_single}>
            <h1>{recipes.title}</h1>
            <div className={styles.tag_box}>
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
            <div className={styles.flex}>
              <Link href="https://www.youtube.com/channel/UCD9rstz787RQXIuk_rPtbJg">
                <a target="_blank" className={styles.youtube_btn}>チャンネル登録</a>
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
        </div>
        <div className="pc_body_right">
          <PcNav />
        </div>
      </div>
    </>
  );
}

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