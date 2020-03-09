import { useEffect } from 'react'
import Head from 'next/head'

const Header = (props) => {
    const fontsToImport = [
        'Dancing Script',
        'Leckerli One',
        'Meddon',
        'Darker Grotesque',
    ]

    const fontLink = `https://fonts.googleapis.com/css2?${fontsToImport
        .map(font => `family=${font}&`)
        .join('')}display=swap`

    useEffect(() => {
        async function fontsReady() {
            document.fonts.onloadingdone = function(fontFaceSetEvent) {
                window.dispatchEvent(new Event('resize'))
            }
        }
        fontsReady()
    }, [props.lang])
    return (
        <Head>
            <link href={fontLink} rel="stylesheet" />
            <title>{props.title}</title>
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
            <meta name="Description" content="{props.description}" />
        </Head>
    )
}

export default Header