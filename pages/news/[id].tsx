import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from "next/router";
import styles from "../../components/Detail/news.module.scss";
import PcNav from '../parts/menu/PcNav';

export default function News({
  news
}: {
  news: {
    id: number
    title: string
    image: any
    content: any
    HTML: any
  }
}) {
  const url: any = useRouter();
  const art_url: any = url.asPath
  return (
    <>
      <Head>
        <title>{news.title}| コンコンキッチン</title>
        <meta property="og:url" content={`https://cuisineidee.com${art_url}`} />
        <meta property="og:title" content={news.title} />
        <meta property="og:image" content={news.image.url} />
      </Head>
      <>
        <div id="pc_body">
          <div className="pc_body_left">
            <div id="news" className={styles.news}>
              <>
                <div>
                  {news.image ? (<img className={styles.news_img} src={news.image.url + "?w=210&h=140"} alt="" />) : (<div />)}
                </div>
                <h2>{news.title}</h2>
                <div className={styles.border}></div>
                <div dangerouslySetInnerHTML={{ __html: `${news.content}`, }} />
                {news.HTML ? (<div className={styles.ad_cont} dangerouslySetInnerHTML={{ __html: `${news.HTML}`, }} />) : ("")}
              </>
            </div>
          </div>
          <div className="pc_body_right">
            <PcNav />
          </div>
        </div>
      </>
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
    'https://konkonrecipes.microcms.io/api/v1/news/' + id,
    key,
  )
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      news: data,
    },
  };
};
// 静的生成のためのパスを指定
export const getStaticPaths: GetStaticPaths = async () => {
  const key: any = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://konkonrecipes.microcms.io/api/v1/news?limit=1000', key)
    .then(res => res.json())
    .catch(() => null);
  const paths = data.contents.map((content: any) => `/news/${content.id}`);
  return { paths, fallback: false };
};