import React from "react";
import classes from "../UI/History.module.css";

function History() {

    return (
        <div className={classes.container}>
            <table className={classes.table_history}>
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
                    <th className={classes.status_pending}> PENDING </th>
                </tr>
                <tr>
                    <th>11.05.2000</th>
                    <th>12:00</th>
                    <th>Anela Coković</th>
                    <th>Ford Ka</th>
                    <th>Tire Change</th>
                    <th>Advan Tabaković</th>
                    <th className={classes.status_on_service}> ON SERVICE </th>
                </tr>
                <tr>
                    <th>08.08.2000</th>
                    <th>13:00</th>
                    <th>Edin Krgo</th>
                    <th>Citroen C3</th>
                    <th>Battery Change</th>
                    <th>Alden Krgo</th>
                    <th className={classes.status_finished}> FINISHED </th>
                </tr>
                <tr>
                    <th>29.05.2000</th>
                    <th>14:00</th>
                    <th>Nedim Tabaković</th>
                    <th>Volkswagen Buba</th>
                    <th>Basic Inspection</th>
                    <th>Alden Krgo</th>
                    <th className={classes.status_on_service}> ON SERVICE </th>
                </tr>
                <tr>
                    <th>20.09.2000</th>
                    <th>11:00</th>
                    <th>Emir Mrkaljević</th>
                    <th>Hyundai</th>
                    <th>Complex Inspection</th>
                    <th>Advan Tabaković</th>
                    <th className={classes.status_finished}> FINISHED </th>
                </tr>
                <tr>
                    <th>14.01.2000</th>
                    <th>11:00</th>
                    <th>Erna Berbić</th>
                    <th>Ferrari 812 GTS</th>
                    <th>Oil Change</th>
                    <th>Mirso Tabaković</th>
                    <th className={classes.status_pending}> PENDING </th>
                </tr>
            </table>
        </div>
    )
}

export default History;