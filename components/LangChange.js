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
        `}</style>
        </React.Fragment>
    )
}

export default LangChange
