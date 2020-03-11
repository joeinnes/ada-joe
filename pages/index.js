import { useEffect, useState, useCallback } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { en, hu, config } from '../data/data'

const Index = () => {
    const [prefLang, setPrefLang] = useState('en')
    useEffect(() => {
        const navLang = navigator.languages
            ? navigator.languages[0]
            : navigator.language || navigator.userLanguage || 'en'
        setPrefLang(navLang.substring(0, 2))
    }, [])

    const toggleLang = () => {
        const newLang = prefLang === 'hu' ? 'en' : 'hu'
        setPrefLang(newLang)
    }
    return (
        <React.Fragment>
            <Header title={config.title} description={config.description} />
            <Main lang={prefLang} text={prefLang === 'hu' ? hu : en} />
            <Footer
                withLove={prefLang === 'hu' ? hu.withLove : en.withLove}
                lang={prefLang}
                setPrefLang={toggleLang}
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
                    margin: 0;
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
        </React.Fragment>
    )
}

export default Index
