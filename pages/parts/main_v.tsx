const Main_V = () => {
    return (
        <>
            <img src="/main_v.png" className="main_v" />
            <div>
                <h1>コンコンレシピ</h1>
            </div>
            <style jsx>{`
            .main_v {
                width: 100vw;
                height: 180px;
                object-fit: cover;
                position: absolute;
            }
            div {
                height: 160px;
                position: relative;
            }
            h1 {
                padding: 110px 5vw 0 0;
                text-align: right;
                font-size: 2rem;
                font-family: serif;
                color: #fff;
                text-shadow: 2px 2px 1px #555;
            }
            @media screen and (min-width:980px) {
                .main_v {
                height: 400px;
                }
                div {
                    height: 400px;
                }
            }
            `}</style>
        </>
    );
};

export default Main_V;