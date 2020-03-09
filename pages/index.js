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
        </Head>
    )
}

export default Index
