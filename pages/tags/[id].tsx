import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdSense from 'react-adsense';
import styles from "../../components/Detail/tag.module.scss";
import PcNav from '../parts/menu/PcNav';

export default function Tags({ recipes }: {
    recipes: {
        id: number
        title: string
        image: any
        description: string
        category: any
        tags: any
    }[]
}
) {
    const url: any = useRouter();
    const baseurl = "/tags/";
    return (
        <>
            <div className="ad_top">
                <AdSense.Google
                    client='ca-pub-7785406076713581'
                    slot=''
                />
            </div>
            <div className={styles.tag_single}>
                <div id="pc_body">
                    <div className="pc_body_left">
                        {recipes.map(({ tags }) => (
                            <>
                                {tags[0] ? baseurl + tags[0].id == url.asPath ? <h2>{tags[0].tag}</h2> : "" : ""}
                                {tags[1] ? baseurl + tags[1].id == url.asPath ? <h2>{tags[1].tag}</h2> : "" : ""}
                                {tags[2] ? baseurl + tags[2].id == url.asPath ? <h2>{tags[2].tag}</h2> : "" : ""}
                                {tags[3] ? baseurl + tags[3].id == url.asPath ? <h2>{tags[3].tag}</h2> : "" : ""}
                                {tags[4] ? baseurl + tags[4].id == url.asPath ? <h2>{tags[4].tag}</h2> : "" : ""}
                            </>
                        ))}
                        <div className="recipe_contents">
                            {recipes.map(({ id, title, image, description, category, tags }) => (
                                <>
                                    <ul key={id}
                                        className={`
                                    ${tags[0] ? baseurl + tags[0].id == url.asPath ? `${styles.cont_ok}` : `${styles.cont_none}` : ""} 
                                    ${tags[1] ? baseurl + tags[1].id == url.asPath ? `${styles.cont_ok}` : `${styles.cont_none}` : ""} 
                                    ${tags[2] ? baseurl + tags[2].id == url.asPath ? `${styles.cont_ok}` : `${styles.cont_none}` : ""} 
                                    ${tags[3] ? baseurl + tags[3].id == url.asPath ? `${styles.cont_ok}` : `${styles.cont_none}` : ""} 
                                    ${tags[4] ? baseurl + tags[4].id == url.asPath ? `${styles.cont_ok}` : `${styles.cont_none}` : ""} 
                                `}
                                    >
                                        <Link href={`/category/${category.category}`}><h4 className={`_${category.category}`}>{category.category}</h4></Link>
                                        <Link href={`/recipes/${id}`}>
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
                    </div>
                    <div className="pc_body_right">
                        <PcNav />
                    </div>
                </div>
            </div>
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
        },
    };
};
// 静的生成のためのパスを指定
export const getStaticPaths: GetStaticPaths = async () => {
    const key: any = {
        headers: { 'X-API-KEY': process.env.API_KEY },
    };
    const data = await fetch('https://konkonrecipes.microcms.io/api/v1/tags?limit=50', key)
        .then(res => res.json())
        .catch(() => null);
    const paths = data.contents.map((content: any) => `/tags/${content.id}`);
    return { paths, fallback: false };
};