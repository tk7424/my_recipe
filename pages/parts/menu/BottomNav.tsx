import Link from "next/link"

const BottomNav = () => {
    return (
        <>
            <div className="bottom_nav">
                <Link href="/">
                    <div>
                        <img src="/recipe_icon.png" alt="" />
                        <nav>RECIPE</nav>
                    </div>
                </Link>
                <Link href="/news">
                    <div>
                        <img src="/news_icon.png" alt="" />
                        <nav>NEWS</nav>
                    </div>
                </Link>
                <Link href="/tags">
                    <div>
                        <img src="/tag_icon.png" alt="" />
                        <nav>TAG</nav>
                    </div>
                </Link>
            </div>
            <style jsx>{`
            .bottom_nav {
                display: flex;
                position: fixed;
                bottom: 0;
                width: 100vw;
                height: 42px;
                background-color: #fff;
                text-align: center;
                border: solid 1px #e2e2e2;
            }
            .bottom_nav > div {
                width: calc(100vw/3);
            }
            .bottom_nav > div:active {
                background-color: #ffdbae;
            }
            img {
                height: 20px;
                width: 20px;
                margin: 5px 0 0;
            }
            nav {
                color: #ffae46;
                font-size: 0.7rem;
            }
        `}</style>
        </>
    )
}

export default BottomNav