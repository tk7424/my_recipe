import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from './parts/MyLayout';
import AdSense from 'react-adsense';

export default function TagsIndex({ tags }: {
    tags: {
        id: string
        tag: string
    }[]
}
) {
    return (
        <>
            <Layout>
                <AdSense.Google
                    client='ca-pub-7785406076713581'
                    slot=''
                />
                <h2>タグ一覧</h2>
                <div className="tags">
                    {tags.map(({ id, tag }) => (
                        <>
                            <Link href={`/tags/${id}`}>
                                <div className="tag">
                                    <h3>{tag}</h3>
                                </div>
                            </Link>
                        </>
                    ))}
                </div>
            </Layout>
            <style jsx>{`
            h2 {
                text-align: center;
                margin: 20px 0;
                font-family: serif;
                letter-spacing: 0.2rem;
              }
            .tags {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                text-align: center;
            }
            .tag {
                width: 120px;
            }
            .tag h3 {
                display: block;
                background-color: #999;
                border-radius: 10px;
                margin: 10px 5px;
                font-size: 1rem;
                color: #fff;
                font-weight: normal;
            }
            .tag h3:active {
                background-color: #c3c3c3;}
          `}</style>
        </>
    )
}


// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps: GetStaticProps = async () => {
    const key: any = {
        headers: { 'X-API-KEY': process.env.API_KEY },
    };
    const data = await fetch('https://konkonrecipes.microcms.io/api/v1/tags?limit=50', key)
        .then(res => res.json())
        .catch(() => null);

    return {
        props: {
            tags: data.contents,
        }
    };
};