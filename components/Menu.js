import { config } from "../data/data"

const Menu = (props) => {
    return (
        <React.Fragment>
            <div className="menu-container">
                {props.children}
            </div>
            <style jsx>{`
                .menu-container {
                    min-height: 10vh;
                    min-width: 100vw;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    background: ${props.bgColor || config.lightColor};
                    font-family: ${props.font || config.defaultFont};
                    font-size: 2rem;
                    text-transform: uppercase;
                }
                .menu-item:hover {
                    background: ${props.bgHover || config.darkColor};
                    transition: 0.5s;
                }
            `}</style>
        </React.Fragment>
    )
}

export default Menu