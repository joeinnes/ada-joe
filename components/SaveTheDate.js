import FullWidthText from './FullWidthText'


const SaveTheDate = (props) => {
    return (
        <React.Fragment>
            <FullWidthText font={props.font} color={props.color}>
                {props.children}
            </FullWidthText>
            <style jsx>{`
            * {
                text-shadow: 2px 2px #000;
            }
            `}</style>
        </React.Fragment>
    )
}

export default SaveTheDate