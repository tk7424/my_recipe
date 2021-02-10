import Head from 'next/head';

const head = () => {
    return(
        <>
        <Head>
            <link rel="icon" href="/konkon.ico" type="image/png" /> 
            <title>cuisine idee konkon 〜コンコンレシピ〜</title>
            <meta name="description" content="youtubeチャンネル「コンコン」のレシピを掲載！料理に関する役立つ知識やアイデアもお伝えしています。" />
            <meta property="og:url" content="https://cuisineidee.com/" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@konkon7424" />
        </Head>
        </>
    )
}

export default head