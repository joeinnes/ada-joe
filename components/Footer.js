import LangChange from './LangChange'

const Footer = (props) => {
    return (
        <React.Fragment>
            <footer>
                <span>
                    <LangChange lang={props.lang} setLang={props.setLang} />
                </span>
                <span></span>
                <span className="float-right">{props.withLove}</span>
            </footer>
            <style jsx>{`
            footer {
                background-color: ${props.bgColor || '#fff'};
                color: ${props.color || '#000'};
                margin-top: auto;
                text-shadow: none;
                display: flex;
                justify-content: space-between;
                font-family: ${props.font}
            }
            footer a {
                text-decoration: none;
              }
            `}</style>
        </React.Fragment>
    )
} 

export default Footer