import LangChange from './LangChange'
import { config } from '../data/data'

const Footer = (props) => {
    return (
        <React.Fragment>
            <footer>
                <span>
                    <LangChange lang={props.lang} setPrefLang={props.setPrefLang} />
                </span>
                <span></span>
                <span className="float-right">{props.withLove}</span>
            </footer>
            <style jsx>{`
            footer {
                background-color: ${config.lightColor || '#fff'};
                color: ${config.darkColor || '#000'};
                text-shadow: none;
                display: flex;
                justify-content: space-between;
                font-family: ${config.defaultFont};
                font-size: 1.5rem;
            }
            
            `}</style>
        </React.Fragment>
    )
} 

export default Footer