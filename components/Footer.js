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
                text-shadow: none;
                display: flex;
                justify-content: space-between;
                font-family: ${props.font};
                font-size: 1.5rem;
            }
            
            `}</style>
        </React.Fragment>
    )
} 

export default Footer