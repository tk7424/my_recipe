const NewMovie = () => {
    return (
        <>
            <div>
                <iframe src="https://www.youtube.com/embed/?list=UUD9rstz787RQXIuk_rPtbJg&autoplay=1&mute=1"></iframe>
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
                border: none;
            }
            h2 {
                font-family: "apple Chancery", serif;
                text-align: center;
                margin: 0;
            }
            `}</style>
        </>
    )
}

export default NewMovie;