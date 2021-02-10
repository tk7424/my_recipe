import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import AdSense from 'react-adsense';
import Layout from '../parts/MyLayout';

export default function News({ 
  news
  }: {
    news: {
      id: any
      title: string
      image: any
      content: any
    }[]
  }){

    const url:any = useRouter();
    const baseurl = "/news/";
    return (
      <>
        <Layout>
          <>
            <div id="news">
              {news.map(({ id, title, image, content }) => (
                  <div style={{display: baseurl+id == url.asPath ? "" : "none"}}>
                    <div>
                        {image ? (<img src={image.url + "?w=210&h=140"} alt="" />) : (<div />)}
                    </div>
                    <h2>{title}</h2>
                    <div className="border"></div>
                    <div className="content" dangerouslySetInnerHTML={{__html: `${content}`,}} />
                  </div>
              ))}
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
export const getStaticProps: GetStaticProps = async () => {
  const key: any = {
    headers: {'X-API-KEY': process.env.API_KEY},
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
// 静的生成のためのパスを指定
export const getStaticPaths: GetStaticPaths = async () => {
    const key: any = {
      headers: {'X-API-KEY': process.env.API_KEY},
    };
    const data = await fetch('https://konkonrecipes.microcms.io/api/v1/news?limit=50', key)
      .then(res => res.json())
      .catch(() => null);
    const paths = data.contents.map((content: any) => `/news/${content.id}`);
    return {paths, fallback: false};
  };