const LangChange = props => {
    const flag = props.lang === 'en' ? '🇭🇺' : '🇬🇧'
    const languageSwitch = () => {
        props.setLang(props.lang === 'en' ? 'hu' : 'en')
    }
    return <span onClick={languageSwitch}>{flag}</span>
}

export default LangChange
