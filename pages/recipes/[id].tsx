import { GetStaticPaths, GetStaticProps } from "next";

export default function RecipeId({ 
  recipes 
  }: {
    recipes: {
      title: string
      description: string
      publishedAt: number
      body: string
    }
  }) {
    return (
        <main>
            <h1>{recipes.title}</h1>
            <p>{recipes.description}</p>
            <p>{recipes.publishedAt}</p>
            <div
             dangerouslySetInnerHTML={{
                 __html: `${recipes.body}`,
             }} 
            />
        </main>
    );
}


export const getStaticPaths: GetStaticPaths = async () => {
    const key: any = {
      headers: {'X-API-KEY': process.env.API_KEY},
    };
    const data = await fetch('https://konkonrecipes.microcms.io/api/v1/recipes', key)
      .then(res => res.json())
      .catch(() => null);
    const paths = data.contents.map((content: any) => `/recipes/${content.id}`);
    return {paths, fallback: false};
  };
  
  // データをテンプレートに受け渡す部分の処理を記述します
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