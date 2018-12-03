import React from "react";


const styles = {
    navbarStyle: {
     marginLeft : 10
    }
}

function Navbar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <div className=" row">
                    <div className="col col-xl-4">
                        <span className="navbar-brand mb-0 h1 ">Clicky Game</span>
                    </div>

                    <div className="col col-xl-4">
                        <span className="navbar-brand mb-0 h1 ">{props.result} </span>
                    </div>

                    <div className="col col-xl-4" style={styles.navbarStyle}>
                    <span className="navbar-brand mb-0 h1 ">Score : {props.score} </span>
                    <span className="navbar-brand mb-0 h1 ">Top Score : {props.top} </span>
                    </div>


                </div>

            </div>
        </nav>
    );
}

export default Navbar;
