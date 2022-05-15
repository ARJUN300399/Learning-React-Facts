import React from "react"

export default function Navbar(props) {
    return (
        <nav className={props.darkMode?"dark":""}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="nav--logo_icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <div className="toggler">
                <p className="toggler--light">light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
            </div>
        </nav>
    )
}