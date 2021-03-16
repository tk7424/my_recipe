import { GetStaticPaths, GetStaticProps } from 'next';
import AdSense from 'react-adsense';
import Layout from '../parts/MyLayout';
import Head from 'next/head';
import { useRouter } from "next/router";

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
      <Layout>
      <Head>
          <title>{news.title}| cuisine idee konkon 〜コンコンレシピ〜</title>
          {/* <meta name="description" content={news.content} /> */}
          <meta property="og:url" content={`https://cuisineidee.com${art_url}`} />
          <meta property="og:title" content={news.title} />
          {/* <meta property="og:description" content={news.description} /> */}
          <meta property="og:image" content={news.image.url} />
        </Head>
        <>
          <div id="news">
            <>
              <div>
                {news.image ? (<img src={news.image.url + "?w=210&h=140"} alt="" />) : (<div />)}
              </div>
              <h2>{news.title}</h2>
              <div className="border"></div>
              <div className="content" dangerouslySetInnerHTML={{ __html: `${news.content}`, }} />
              {news.HTML ? (<div className="ad_cont" dangerouslySetInnerHTML={{ __html: `${news.HTML}`, }} />) : ("")}
            </>
          </div>
          <AdSense.Google
            client='ca-pub-7785406076713581'
            slot=''
          />
        </>
      </Layout>
      <style jsx>{`
          #news {
            margin: 0 0 20px;
          }
          img {
            object-fit: cover;
            width: 100vw;
            height: 200px;
          }
          .border {
            border-bottom: solid 1px #e2e2e2;
            height: 5px;
            margin: 0 2vw 20px;
          }
          h2 {
            font-size: 1.2rem;
            margin: 10px 3vw;
          }
        `}</style>
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
  const data = await fetch('https://konkonrecipes.microcms.io/api/v1/news?limit=50', key)
    .then(res => res.json())
    .catch(() => null);
  const paths = data.contents.map((content: any) => `/news/${content.id}`);
  return { paths, fallback: false };
};