import FitText from 'react-textfit'

const FullWidthText = (props) => {
    const onReady = () => {
        console.log('Fired for ', props.children)
    }
    return (
        <FitText min={16} mode={props.multi ? 'multi' : 'single' }>
            <div dangerouslySetInnerHTML={{__html: props.children}}></div>
            <style jsx>{`
            * {
                font-family: ${props.font};
                color: ${props.color || 'inherit'}
            }
            `}</style>
        </FitText>
    )
}

export default FullWidthText