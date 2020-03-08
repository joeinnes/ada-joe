import FullWidthText from './FullWidthText'


const SaveTheDate = (props) => {
    return (
        <React.Fragment>
            <FullWidthText font={props.font} color={props.color}>
                {props.children}
            </FullWidthText>
        </React.Fragment>
    )
}

export default SaveTheDate