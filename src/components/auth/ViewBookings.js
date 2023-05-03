import React, {Fragment} from "react";
import classes from "../UI/ViewBookings.module.css";
import Calendar from "../Layout/Calendar";

function ViewBookings() {
    return (
        <Fragment>
            <div className={classes.container}>
                <Calendar/>
            </div>
        </Fragment>
    )
}

export default ViewBookings;