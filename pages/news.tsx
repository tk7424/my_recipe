import { GetStaticProps } from 'next';
import Link from 'next/link'
import Layout from './parts/MyLayout';
import Head from 'next/head';
import styles from "../components/Index/news.module.scss";

export default function NewsIndex({
  news
}: {
  news: {
    id: number
    title: string
    image: any
  }[]
}) {
  return (
    <Layout>
      <div className={styles.news_index}>
        <h2>NEWS一覧</h2>
        <div className={styles.contents}>
          {news.map(({ id, title, image }) => (
            <>
              <Head><title>NEWS一覧| cuisine idee konkon 〜コンコンレシピ〜</title></Head>
              <ul key={id}>
                <Link href={`/news/${id}`}>
                  <li>
                    <div>
                      {image ? (<img src={image.url + "?w=210&h=140"} alt="" />) : (<div />)}
                    </div>
                    <div className={styles.title}><a>{title}</a></div>
                  </li>
                </Link>
              </ul>
            </>
          ))}
        </div>
      </div>
    </Layout>
  );
}


// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps: GetStaticProps = async () => {
  const key: any = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://konkonrecipes.microcms.io/api/v1/news?limit=50', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      news: data.contents,
    },
  };
};