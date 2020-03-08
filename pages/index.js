import Head from 'next/head'
import { useState } from 'react'
import SaveTheDate from '../components/SaveTheDate'
import Lights from '../components/Lights'
import Card from '../components/Card'
import Footer from '../components/Footer'
import trans from '../data/data'

export default function Index() {
    const [lang, setLang] = useState('en')
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

    return (
        <div>
            <Head>
                <link href={fontLink} rel="stylesheet" />
            </Head>
            <main>
                <Lights />
                <SaveTheDate font="Meddon" color="#EFD0CA">
                  {trans[lang].saveTheDate}
                </SaveTheDate>
                <Card lines={trans[lang].card} color="#382016" />
            </main>
            <Footer
                withLove={trans[lang].withLove}
                bgColor="#EFD0CA"
                color="#382016"
                font="Darker Grotesque"
                setLang={setLang}
                lang={lang}
            />

            <style jsx global>{`
                body {
                    background: url('background.jpg');
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    overflow-x: hidden;
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
    )
}
