import { useEffect, useState, useCallback } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { en, hu, config } from '../data/data'
import FullScreen from '../components/FullScreen'

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
            <FullScreen text={config.title} font="Dancing Script" />
            <Menu>
                <span>Test 1</span>
                <span>Test 2</span>
                <span>Test 3</span>
                <span>Test 4</span>
            </Menu>
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
            `}</style>
        </React.Fragment>
    )
}

export default Index
