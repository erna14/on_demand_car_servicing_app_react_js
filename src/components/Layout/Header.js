import React from "react";
import classes from "../UI/Header.module.css";

function Header(props) {
    return (
        <div className={classes.header}>
            <h2 className={classes.app_name}>MECHANICAR</h2>
            <h2 className={classes.page_name}>{props.page_name}</h2>
            <div className={classes.header_right}>
                <a href="/homePage">Home</a>
                <a href="/login">Logout</a>
            </div>
        </div>
    )
}

export default Header;