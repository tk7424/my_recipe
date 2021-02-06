const NewMovie = () => {
    return (
        <>
            <div>
                <iframe src="https://www.youtube.com/embed/?list=UUD9rstz787RQXIuk_rPtbJg&autoplay=1&mute=1&playsinline=1"></iframe>
            </div>
            <h2>〜 N e w   M o v i e 〜</h2>
            <style jsx>{`
            div {
                text-align: center;
                margin: 20px 0 0 0;
            }
            div iframe {
                width: 80vw;
                height: 45vw;
                border: solid 5px #cacaca;
            }
            h2 {
                font-family: "apple Chancery", serif;
                text-shadow: 0 0 0 #000;
                text-align: center;
                margin: 0;
            }
            @media screen and (min-width:800px) {
                div iframe {
                    width: 32vw;
                    height: 18vw;
                }
                h2 {
                    font-size: 2rem;
                }
            }
            `}</style>
        </>
    )
}

export default NewMovie;