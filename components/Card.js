import FullWidthText from './FullWidthText'
import DividerLine from './DividerLine'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import { config } from '../data/data'

const Card = props => {
    const lines = props.lines.map((line, i) =>
        line.inLine ? (
            <DividerLine
                color={props.color}
                text={line.text}
                font={line.font}
                key={i}
            />
        ) : (
            <React.Fragment key={i}>
                <FullWidthText
                    multi={line.multi}
                    font={line.font}
                    color={props.color}
                >
                    {line.text}
                </FullWidthText>
                {i < props.lines.length - 1 && !props.lines[i + 1].inLine ? (
                    <DividerLine color={props.color} />
                ) : (
                    ''
                )}
            </React.Fragment>
        )
    )
    return (
        <React.Fragment>
            <div className="card">{lines}</div>
            <style jsx>{`
                .card {
                    background-color: #fff;
                    background: url('card-background.jpg');
                    background-size: cover;
                    color: ${props.color || config.darkColor};
                    border-radius: 10px;
                    box-shadow: 1vw 1vh 1vw 1vw rgba(0, 0, 0, 0.7);
                    padding: 1vw 2vw 2vw 2vw;
                    max-width: 26vw;
                    margin: auto;
                    text-align: justify;
                    text-align-last: center;
                    text-shadow: 1px 1px #000;
                }

                @media only screen and (max-width: 800px) {
                    .card {
                        max-width: 60vw;
                    }
                }

                @media only screen and (max-width: 600px) {
                    .card {
                        max-width: 90vw;
                    }
                }
            `}</style>
        </React.Fragment>
    )
}

export default Card
