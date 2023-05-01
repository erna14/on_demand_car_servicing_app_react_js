import React from "react";
import classes from "../UI/Reservations.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";

function Reservations() {
    return (
        <table className={classes.reservations}>
            <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Customer</th>
                <th>Vehicle</th>
                <th>Services</th>
                <th>Assigned Empl.</th>
                <th>Status</th>
            </tr>
            <tr>
                <th>14.01.2000</th>
                <th>11:00</th>
                <th>Erna Berbić</th>
                <th>Ferrari 812 GTS</th>
                <th>Oil Change</th>
                <th>Mirso Tabaković</th>
                <th className={classes.reservations_action}>
                    <button className={classes.accept}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </button>
                    <button className={classes.decline}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </button>
                </th>
            </tr>
            <tr>
                <th>11.05.2000</th>
                <th>12:00</th>
                <th>Anela Coković</th>
                <th>Ford Ka</th>
                <th>Tire Change</th>
                <th>Advan Tabaković</th>
                <th className={classes.reservations_action}>
                    <button className={classes.accept}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </button>
                    <button className={classes.decline}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </button>
                </th>
            </tr>
            <tr>
                <th>08.08.2000</th>
                <th>13:00</th>
                <th>Edin Krgo</th>
                <th>Citroen C3</th>
                <th>Battery Change</th>
                <th>Alden Krgo</th>
                <th className={classes.reservations_action}>
                    <button className={classes.accept}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </button>
                    <button className={classes.decline}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </button>
                </th>
            </tr>
            <tr>
                <th>29.05.2000</th>
                <th>14:00</th>
                <th>Nedim Tabaković</th>
                <th>Volkswagen Buba</th>
                <th>Basic Inspection</th>
                <th>Alden Krgo</th>
                <th className={classes.reservations_action}>
                    <button className={classes.accept}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </button>
                    <button className={classes.decline}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </button>
                </th>
            </tr>
        </table>
    )
}

export default Reservations;