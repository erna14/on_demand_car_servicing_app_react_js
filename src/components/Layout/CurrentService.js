import React from "react";
import classes from "../UI/CurrentService.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark} from "@fortawesome/free-solid-svg-icons";

function CurrentService(props) {
    return (
        <div className={classes.container}>
            <div className={classes.service_img}>
                <img src={props.img} alt={''}/>
            </div>
            <div className={classes.service_details}>
                <h2 className={classes.service_title}>{props.title}</h2>
                <h2 className={classes.service_price}>${props.price}</h2>
            </div>
            <div className={classes.service_action}>
                <button><FontAwesomeIcon icon={faXmark}/></button>
            </div>
        </div>
    )
}

export default CurrentService;