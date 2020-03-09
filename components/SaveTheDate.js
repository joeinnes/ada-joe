import FullWidthText from './FullWidthText'


const SaveTheDate = (props) => {
    return (
        <React.Fragment>
            <h1>
                <FullWidthText font={props.font} color={props.color}>
                    {props.children}
                </FullWidthText>
            </h1>
            <style jsx>{`
            * {
                text-shadow: 2px 2px #000;
                margin-top: -10px;
            }
            `}</style>
        </React.Fragment>
    )
}

export default SaveTheDate