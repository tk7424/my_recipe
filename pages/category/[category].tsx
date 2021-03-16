import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../parts/MyLayout'
import { useRouter } from 'next/router';
import AdSense from 'react-adsense';
import styles from "../../components/Detail/category.module.scss";

export default function Home({
  recipes,
}: {
  recipes: {
    id: any
    title: string
    image: any
    description: string
    category: any
    tags: any
  }[]
}) {

  const url: any = useRouter();
  const baseurl = "/category/";

  return (
    <Layout>
      <AdSense.Google
        client='ca-pub-7785406076713581'
        slot=''
      />
      <div className={styles.categories}>
        <h2>
          {url.asPath == (baseurl + "MAIN") ? "メイン料理" : ""}
          {url.asPath == (baseurl + "APPETIZER") ? "前菜" : ""}
          {url.asPath == (baseurl + "1DISH") ? "1品料理" : ""}
          {url.asPath == (baseurl + "DESERT") ? "デザート" : ""}
          {url.asPath == (baseurl + "ALONEFOOD") ? "一人暮らし飯" : ""}
        </h2>
        <div className="recipe_contents">
          {recipes.map(({ id, title, image, description, category, tags }) => (
            <>
              <ul key={id} style={{ display: baseurl + category.category == url.asPath ? "" : "none" }}>
                <Link href={`/category/${category.category}`}><h4 className={`_${category.category}`}>{category.category}</h4></Link>
                <Link href={`/recipes/${id}`}>
                  <li>
                    <div >
                      {image ? (<img src={image.url} alt="" />) : (<div />)}
                    </div>
                    <div className="tag_box">
                      {tags[0] ? <Link href={`/tags/${tags[0].id}`}><h5>{tags[0].tag}</h5></Link> : ""}
                      {tags[1] ? <Link href={`/tags/${tags[1].id}`}><h5>{tags[1].tag}</h5></Link> : ""}
                      {tags[2] ? <Link href={`/tags/${tags[2].id}`}><h5>{tags[2].tag}</h5></Link> : ""}
                      {tags[3] ? <Link href={`/tags/${tags[3].id}`}><h5>{tags[3].tag}</h5></Link> : ""}
                      {tags[4] ? <Link href={`/tags/${tags[4].id}`}><h5>{tags[4].tag}</h5></Link> : ""}
                    </div>
                    <div className="text_box">
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </li>
                </Link>
              </ul>
            </>
          ))}
        </div>
      </div>
    </Layout>
  );
};

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps: GetStaticProps = async () => {
  const key: any = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://konkonrecipes.microcms.io/api/v1/recipes?limit=50', key)
    .then(res => res.json())
    .catch(() => null);

  return {
    props: {
      recipes: data.contents
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
  const paths = data.contents.map((content: any) => `/category/${content.category.category}`);
  return { paths, fallback: false };
};