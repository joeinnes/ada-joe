const Lights = (props) => {
    return (
        <React.Fragment>
            <div id="top-lights"></div>
            <div id="falling-lights"></div>
            <style jsx>{`
                #top-lights {
                    position: absolute;
                    background: url("string-lights.png");
                    background-size: 120vw;
                    background-repeat: no-repeat;
                    min-height: 110vh;
                    width: 120vw;
                    margin-top: -10vh;
                    margin-left: -10vw;
                    z-index: -1;
                    top: 0;
                    left: 0;
                    opacity: 0.5;
                  }
                  #falling-lights {
                    position: absolute;
                    background: url("falling-lights.png");
                    background-repeat: repeat-y;
                    background-size: cover;
                    min-height: 100vh;
                    width: 100vw;
                    z-index: -1;
                    top: 0;
                    left: 0;
                    opacity: 0.3;
                  }
            `}
            </style>
        </React.Fragment>
    )
}

export default Lights