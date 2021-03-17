import Head from 'next/head';
import { GA_TRACKING_ID } from '../../lib/gtag'

const head = () => {
    return (
        <Head>
            
            <link rel="icon" href="/konkon.ico" type="image/png" />
            <title>cuisine idee konkon 〜コンコンレシピ〜</title>
            <meta name="description" content="youtubeチャンネル「コンコン」のレシピを掲載！料理に関する役立つ知識やアイデアもお伝えしています。" />
            <meta property="og:url" content="https://cuisineidee.com/" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@konkon7424" />

            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
                });
            `,
                }}
            />
            <script data-ad-client="ca-pub-7785406076713581" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
    )
}

export default head