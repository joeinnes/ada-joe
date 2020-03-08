const DividerLine = props => {
    return (
        <React.Fragment>
            {props.text ? (
                <React.Fragment>
                    <div className="cols">
                        <div className="line"></div>
                        <span className="center-text">{props.text}</span>
                        <div className="line"></div>
                    </div>
                </React.Fragment>
            ) : (
                <hr />
            )}
            <style jsx>{`
                hr {
                    border: none;
                    border-top: 4px dotted ${props.color || '#000'};
                }
                .line {
                    border: none;
                    border-bottom-width: 1px;
                    border-bottom: 1px solid ${props.color || '#000'};
                }
                .cols {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .cols > .line {
                    flex-grow: 1;
                }
                .cols > .center-text {
                    padding: 0 1rem 0 1rem;
                }
            `}</style>
        </React.Fragment>
    )
}

export default DividerLine
