import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from './parts/MyLayout'
import Main_V from "./parts/main_v";
import NewMovie from './parts/new_movie';
import CategorySort from './parts/category_sort';

export default function Home({ recipes }: {
  recipes: {
    id: any
    title: string
    image: any
    description: string
    category: any
    tags: any
  }[]
}
) {
  return (
    <>
      <Layout>
        <Main_V />
        <NewMovie />
        <CategorySort />
        <div className="recipe_contents">
          {recipes.map(({ id, title, image, description, category, tags }) => (
            <>
              <ul key={id} className={`sort_${category.category} ${"content"}`}>
                <Link href={`category/${category.category}`}><h4 className={`_${category.category}`}>{category.category}</h4></Link>
                <Link href={`recipes/${id}`}>
                  <li>
                    <div>
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
      </Layout>
    </>
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
      recipes: data.contents,
    }
  };
};
