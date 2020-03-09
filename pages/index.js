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
        </React.Fragment>
    )
}

export default Index
