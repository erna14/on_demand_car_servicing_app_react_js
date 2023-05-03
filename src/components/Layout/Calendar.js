import React, { useState } from 'react';
import classes from "../UI/Calendar.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function Calendar() {

    let classEmpty = classes.empty;
    const [date, setDate] = useState(new Date());

    const prevMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    };

    const monthDays = () => {
        const monthDays = [];
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        for (let i = 1; i <= lastDay; i++) {
            monthDays.push(i);
        }
        for (let i = 1; i <= firstDay; i++) {
            monthDays.unshift(null);
        }
        return monthDays;
    };

    return (
        <div className={classes.calendar}>
            <div className={classes.header}>
                <button  className={classes.calendar_button} onClick={prevMonth}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </button>
                <div className={classes.month}>{monthsOfYear[date.getMonth()]}</div>
                <button className={classes.calendar_button} onClick={nextMonth}>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </button>
            </div>
            <div className={classes.weekdays}>
                {daysOfWeek.map(day => (
                    <div key={day}>{day}</div>
                ))}
            </div>
            <div className={classes.days}>
                {monthDays().map((day, index) => (
                    <div key={index} className={day === null ? {classEmpty} : ""}>
                        {day}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Calendar;