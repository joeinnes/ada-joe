import { useEffect } from 'react'
import Head from 'next/head'
import SaveTheDate from '../components/SaveTheDate'
import Lights from '../components/Lights'
import Card from '../components/Card'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'

const Main = props => {
    const router = useRouter()
    const text = props.text
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
    }, [])
    return text ? (
        <div>
            <Head>
                <link href={fontLink} rel="stylesheet" />
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
            <main>
                <Lights />
                <SaveTheDate font="Meddon" color="#EFD0CA">
                    {text.saveTheDate}
                </SaveTheDate>
                <Card lines={text.card} color="#382016" />
            </main>
            <Footer
                withLove={text.withLove}
                bgColor="#EFD0CA"
                color="#382016"
                font="Darker Grotesque"
                lang={props.lang}
            />
            <style jsx global>{`
                body {
                    background: url('background.jpg');
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    overflow-x: hidden;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
                main {
                    min-height: 100vh;
                    min-width: 100vw;
                    max-width: 100vw;
                    box-shadow: 0 0 5vw 5vw rgba(0, 0, 0, 0.4) inset;
                    padding-bottom: 10vh;
                }
                * {
                    text-align: justify;
                    text-align-last: center;
                    margin: auto;
                }
            `}</style>
        </div>
    ) : (
        ''
    )
}

export default Main
