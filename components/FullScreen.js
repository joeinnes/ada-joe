import {Animated} from "react-animated-css"
import { config } from '../data/data'

const FullScreen = (props) => {
    return (
        <React.Fragment>
            <div className="full-screen-container">
                <h1>{props.text}</h1>
                <div className="downArrow">▼</div>
            </div>
            <style jsx>{`
                .full-screen-container {
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    min-height: 100vh;
                    color: ${config.lightColor};
                    text-shadow: 5px 5px #000;
                    box-shadow: 0 0 5vw 5vw rgba(0, 0, 0, 0.4) inset;
                }
                h1 {
                    font-size: 20vw;
                    font-family: ${props.font || config.defaultFont};
                }
                .downArrow {
                    display: block;
                    position: absolute;
                    left: 50vw;
                    top: 90vh;
                    font-size: 4vh;
                    color: ${config.lightColor};
                    animation-name: bounce;
                    animation-timing-function: ease;
                    animation-iteration-count: infinite;
                    animation-duration: 2s;
                    animation-fill-mode: both;
                }
                @keyframes bounce {
                    0%, 20%, 80%, 100% {-webkit-transform: translateY(0);}
                    50% {-webkit-transform: translateY(-5px);}
                }
            `}</style>
        </React.Fragment>
    )
}

export default FullScreen