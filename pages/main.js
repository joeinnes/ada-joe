import { useEffect } from 'react'
import Head from 'next/head'
import SaveTheDate from '../components/SaveTheDate'
import Lights from '../components/Lights'
import Card from '../components/Card'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'

const Main = (props) => {
    const router = useRouter()
    const text = props.text
    const fontsToImport = [
        'Handlee',
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
            document.fonts.onloadingdone = function (fontFaceSetEvent) {
                window.dispatchEvent(new Event('resize'))
             }
        }
        fontsReady()
      }, [])
    return text ? (
        <div>
            <Head>
                <link href={fontLink} rel="stylesheet" />
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
                }
                * {
                    text-align: justify;
                    text-align-last: center;
                    margin: auto;
                }
            `}</style>
        </div>
    ) : ''
}

export default Main