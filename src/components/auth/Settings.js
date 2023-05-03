import React, {Fragment} from "react";
import DropdownPanel from "../Layout/DropDown";
import classes from "../UI/Settings.module.css";

function Settings() {
    return(
        <Fragment>
            <div className={classes.container}>
                <br/><br/>
                <DropdownPanel/>
                <DropdownPanel/>
            
            </div>
        </Fragment>
    )

}

export default Settings;