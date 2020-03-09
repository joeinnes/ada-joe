import FitText from 'react-textfit'

const FullWidthText = (props) => {
    return (
        <FitText min={20} mode={props.multi ? 'multi' : 'single' } max={100} forceSingleModeWidth={true}>
            <div dangerouslySetInnerHTML={{__html: props.children}}></div>
            <style jsx>{`
            * {
                font-family: ${props.font};
                color: ${props.color || 'inherit'};
                padding: 6px 0 6px 0;
            }
            `}</style>
        </FitText>
    )
}

export default FullWidthText