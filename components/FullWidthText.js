import FitText from '@wootencl/react-textfit'
import { config } from '../data/data'

const FullWidthText = (props) => {
    return (
        <FitText min={20} mode={props.multi ? 'multi' : 'single' } max={100} forceSingleModeWidth={true} key={props.children}>
            <div dangerouslySetInnerHTML={{__html: props.children}}></div>
            <style jsx>{`
            * {
                font-family: ${props.font || config.defaultFont};
                color: ${props.color || 'inherit'};
                padding: 6px 0 6px 0;
            }
            `}</style>
        </FitText>
    )
}

export default FullWidthText