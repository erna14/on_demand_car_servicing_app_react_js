import React, {Fragment} from "react";
import classes from "../UI/ViewBookings.module.css";
import Calendar from "../Layout/Calendar";
import Reservations from "../Layout/Reservations";

function ViewBookings() {
    return (
        <Fragment>
            <div className={classes.container}>
                <div className={classes.calendar_container}>
                    <Calendar/>
                </div>
                <Reservations/>
            </div>
        </Fragment>
    )
}

export default ViewBookings;