import { GetStaticProps } from 'next';
import Link from 'next/link';
import AdSense from 'react-adsense';
import styles from "../components/Index/tag.module.scss";
import PcNav from './parts/menu/PcNav';

export default function TagsIndex({ tags }: {
    tags: {
        id: string
        tag: string
    }[]
}
) {
    return (
        <>
            <div className="ad_top">
                <AdSense.Google
                    client='ca-pub-7785406076713581'
                    slot=''
                />
            </div>
            <div className={styles.tag_index}>
                <div id="pc_body">
                    <div className="pc_body_left">
                        <h2>タグ一覧</h2>
                        <div className={styles.tags}>
                            {tags.map(({ id, tag }) => (
                                <>
                                    <Link href={`/tags/${id}`}>
                                        <div className={styles.tag}>
                                            <h3>{tag}</h3>
                                        </div>
                                    </Link>
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
    )
}


// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps: GetStaticProps = async () => {
    const key: any = {
        headers: { 'X-API-KEY': process.env.API_KEY },
    };
    const data = await fetch('https://konkonrecipes.microcms.io/api/v1/tags?limit=1000', key)
        .then(res => res.json())
        .catch(() => null);

    return {
        props: {
            tags: data.contents,
        }
    };
};