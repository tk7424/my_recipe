import { GetStaticProps } from 'next';

export const Category = () => ({ 
    category
    }: {
        category: {
        category: any
      }
    }) => {
      return (
            <li>
                <div>
                    {category.category}
                </div>
            </li>
        );
  }


export const getStaticProps: GetStaticProps = async () => {
    const key: any = {
      headers: {'X-API-KEY': process.env.API_KEY},
    };
    const data = await fetch('https://konkonrecipes.microcms.io/api/v1/category?', key)
      .then(res => res.json())
      .catch(() => null);
    return {
      props: {
        category: data.contents,
      },
    };
  };

export default Category;