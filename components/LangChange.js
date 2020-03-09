import Link from 'next/link'
const LangChange = props => {
    const flag = props.lang === 'en' ? '🇭🇺' : '🇬🇧'
    const newLang = props.lang === 'en' ? 'hu' : 'en'
    const linkTo = `/${newLang}`
    return (
        <React.Fragment>
        <Link href={linkTo}>
            <a className="no-underline">{flag}</a>
        </Link>
        <style jsx>{`
        .no-underline {
            text-decoration: none;
        }
        a {
            padding: 0.25rem 0.5rem;
            margin: 0.5rem;
            border: 1px solid #000;
            border-radius: 5px;
            display: inline-block;
            transition: 0.5s;
        }
        a:hover {
            background: #000;
        }
        `}</style>
        </React.Fragment>
    )
}

export default LangChange
