import Image from "next/image";
import Link from "next/link"
import styles from "../../../components/Footer/nav.module.scss";

const BottomNav = () => {
    return (
        <div className={styles.bottom_nav}>
            <Link href="/">
                <div>
                    <Image
                        src="/recipe_icon.png"
                        alt="レシピアイコン"
                        width="20"
                        height="20"
                    />
                    <nav>RECIPE</nav>
                </div>
            </Link>
            <Link href="/news">
                <div>
                    <Image
                        src="/news_icon.png"
                        alt="ニュースアイコン"
                        width="20"
                        height="20"
                    />
                    <nav>NEWS</nav>
                </div>
            </Link>
            <Link href="/tags">
                <div>
                    <Image
                        src="/tag_icon.png"
                        alt="タグアイコン"
                        width="20"
                        height="20"
                    />
                    <nav>TAG</nav>
                </div>
            </Link>
        </div>
    )
}

export default BottomNav