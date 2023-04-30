import React, {Fragment} from "react";
import classes from "../UI/HomePage.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClockRotateLeft, faCar, faUser, faGear, faBell, faBook, faScrewdriverWrench} from "@fortawesome/free-solid-svg-icons";

function HomePage() {
    return (
        <Fragment>
            <div className={classes.hexagon_container}>
                <div className={classes.hexagon_area_first}>
                    <a href="/viewBookings">
                        <div className={classes.hexagon}>
                            <h2><FontAwesomeIcon icon={faBook} /></h2>
                            <h3>View Bookings</h3>
                        </div>
                    </a>
                    <a href="/viewVehicles">
                        <div className={classes.hexagon}>
                            <h2><FontAwesomeIcon icon={faCar} /></h2>
                            <h3>View Vehicles</h3>
                        </div>
                    </a>
                    <a href="/manageServices">
                        <div className={classes.hexagon}>
                            <h2><FontAwesomeIcon icon={faScrewdriverWrench} /></h2>
                            <h3>Manage Services</h3>
                        </div>
                    </a>
                    <a href="/myProfile">
                        <div className={classes.hexagon}>
                            <h2><FontAwesomeIcon icon={faUser} /></h2>
                            <h3>My Profile</h3>
                        </div>
                    </a>
                </div>
                <div className={classes.hexagon_area_second}>
                    <a href="/history">
                        <div className={classes.hexagon}>
                            <h2><FontAwesomeIcon icon={faClockRotateLeft}  /></h2>
                            <h3>History</h3>
                        </div>
                    </a>
                    <a href="/settings">
                        <div className={classes.hexagon}>
                            <h2><FontAwesomeIcon icon={faGear} /></h2>
                            <h3>Settings</h3>
                        </div>
                    </a>
                    <a href="/notifications">
                        <div className={classes.hexagon}>
                            <h2><FontAwesomeIcon icon={faBell} /></h2>
                            <h3>Notifications</h3>
                        </div>
                    </a>
                </div>
            </div>
        </Fragment>
    )
}
export default HomePage;
