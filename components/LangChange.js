import { config } from '../data/data'

const LangChange = props => {
    const flag = props.lang === 'en' ? '🇭🇺' : '🇬🇧'
    const newLang = props.lang === 'en' ? 'hu' : 'en'
    return (
        <React.Fragment>
            <a className="no-underline" onClick={props.setPrefLang}>
                {flag}
            </a>
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
                    cursor: pointer;
                }
                a:hover {
                    background: ${config.darkColor || '#000'};
                }
            `}</style>
        </React.Fragment>
    )
}

export default LangChange
