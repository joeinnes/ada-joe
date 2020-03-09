import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Index = () => {
    const router = useRouter()
    React.useEffect(() => {
        const navLang = navigator.languages
            ? navigator.languages[0]
            : navigator.language || navigator.userLanguage || 'en'
        const prefLang = navLang.substring(0, 2)
        router.replace(`/${prefLang}`, '/')
    }, [])

    return (
        <Head>
            <meta name="robots" content="noindex, nofollow" />
            <title>Ada & Joe</title>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />

            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="preconnect" href="http://fonts.gstatic.com/" />
            <link rel="preconnect" href="http://fonts.googleapis.com" />
            <meta name="Description" content="Ada & Joe" />
        </Head>
    )
}

export default Index
