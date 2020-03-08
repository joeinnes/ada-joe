const Lights = (props) => {
    return (
        <React.Fragment>
            <div id="top-lights"></div>
            <div id="falling-lights"></div>
            <style jsx>{`
                #top-lights {
                    position: absolute;
                    background: url("https://cdn.glitch.com/b6b174b3-2c61-4c47-8475-d07397416ce2%2FString_Lights_2.png?v=1583615285055");
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
                    background: url("https://cdn.glitch.com/b6b174b3-2c61-4c47-8475-d07397416ce2%2FString_Lights_24.png?v=1583617141257");
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