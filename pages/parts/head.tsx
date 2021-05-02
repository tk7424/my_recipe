import Head from 'next/head';
import { GA_TRACKING_ID } from '../../lib/gtag'

const head = () => {
    return (
        <Head>

            <link rel="icon" href="/konkon_icon.png" type="image/png" />
            <title>コンコンキッチン</title>
            <meta name="description" content="youtubeチャンネル「コンコンキッチン」のレシピ動画の作り方を掲載！料理やデザートの作り方のコツを動画や写真と一緒に分かりやすく解説しています。" />
            <meta name="thumbnail" content="/konkon_icon.png" />
            <meta property="og:url" content="https://cuisineidee.com/" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@konkon7424" />
            <meta name='viewport' content='initial-scale=1, viewport-fit=cover' />

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