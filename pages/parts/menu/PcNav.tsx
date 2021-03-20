import Link from "next/link"
import AdSense from 'react-adsense';
import styles from "../../../components/Parts/pc_nav.module.scss"

const PcNav = () => {
    return (
        <>
            <nav className={styles.pc_nav}>
                <Link href="/"><h3>ホーム</h3></Link>
                <Link href="/news"><h3>NEWS一覧</h3></Link>
                <Link href="/tags"><h3>タグ一覧</h3></Link>
                <h4>カテゴリー一覧</h4>
                <ul>
                    <Link href="/category/APPETIZER"><li><h3>前菜</h3></li></Link>
                    <Link href="/category/MAIN"><li><h3>メイン料理</h3></li></Link>
                    <Link href="/category/DESERT"><li><h3>デザート</h3></li></Link>
                    <Link href="/category/1DISH"><li><h3>1品料理</h3></li></Link>
                    <Link href="/category/ALONEFOOD"><li><h3>一人暮らし飯</h3></li></Link>
                </ul>
            </nav>
            <div className={styles.ad_box}>
                <AdSense.Google
                    client='ca-pub-7785406076713581'
                    slot=''
                />
            </div>
        </>
    )

}

export default PcNav