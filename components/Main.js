import { useEffect } from 'react'
import Head from 'next/head'
import SaveTheDate from './SaveTheDate'
import Lights from './Lights'
import Card from './Card'
import Footer from './Footer'
import { useRouter } from 'next/router'

const Main = props => {
    const router = useRouter()
    const text = props.text
    return text ? (
        <div>
            <main>
                <Lights />
                <SaveTheDate font="Meddon" color="#EFD0CA">
                    {text.saveTheDate}
                </SaveTheDate>
                <Card lines={text.card} color="#382016" />
            </main>
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
