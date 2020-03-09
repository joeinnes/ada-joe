import FullWidthText from './FullWidthText'
import { config } from '../data/data'


const SaveTheDate = (props) => {
    return (
        <React.Fragment>
            <h1>
                <FullWidthText font={props.font || config.defaultFont} color={props.color || config.lightColor}>
                    {props.children}
                </FullWidthText>
            </h1>
            <style jsx>{`
            * {
                text-shadow: 2px 2px #000;
                margin-top: -10px;
                margin-bottom: -20px;
            }
            `}</style>
        </React.Fragment>
    )
}

export default SaveTheDate