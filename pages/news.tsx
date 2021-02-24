import { GetStaticProps } from 'next';
import Link from 'next/link'
import Layout from './parts/MyLayout';
import Head from 'next/head';

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
    <>
      <Layout>
        <div id="news">
          <h2>NEWS一覧</h2>
          <div className="contents">
            {news.map(({ id, title, image }) => (
              <>
                <Head><title>NEWS一覧| cuisine idee konkon 〜コンコンレシピ〜</title></Head>
                <ul key={id}>
                  <Link href={`/news/${id}`}>
                    <li>
                      <div>
                        {image ? (<img src={image.url + "?w=210&h=140"} alt="" />) : (<div />)}
                      </div>
                      <div className="title"><a>{title}</a></div>
                    </li>
                  </Link>
                </ul>
              </>
            ))}
          </div>
        </div>
      </Layout>
      <style jsx>{`
          h2 {
            text-align: center;
            margin: 80px 0 20px 0;
            font-family: serif;
            letter-spacing: 0.2rem;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          img {
            object-fit: cover;
            width: 100vw;
            height: 150px;
            position: absolute;
          }
          .title {
            position: relative;
            height: 140px;
            display: flex;
            align-items: flex-end;
            text-align: center;
            padding: 0 10vw 10px;
          }
          .title:active {
            background-color: #c3c3c3;
          }
          a {
              color: #fff;
              text-shadow: 2px 2px 2px #000;
          }
        `}</style>
    </>
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