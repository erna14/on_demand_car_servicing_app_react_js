import React, {Fragment, useState} from "react";
import classes from "../UI/AddNewService.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudArrowUp} from "@fortawesome/free-solid-svg-icons";

function AddNewService() {

    const [serviceName,setServiceName] = useState();
    const [price, setPrice] = useState();
    const [servicePhoto, setServicePhoto] = useState();

    const serviceNameInputHandler = event => {
        setServiceName(event.target.value)
    }

    const priceInputHandler = event => {
        setPrice(event.target.value)
    }

    const servicePhotoInputHandler = event => {
        setServicePhoto(event.target.value)
    }

    const addNewServiceHandler = event => {
        event.preventDefault()
        console.log(serviceName,price,servicePhoto)
    }

    return (
        <Fragment>
            <div className={classes.add_new_service_container}>
                <form onSubmit={addNewServiceHandler}>
                    <h2 className={classes.title}>Add New Service</h2>
                    <div className={classes.details_input}>
                        <label htmlFor="file-upload" className={classes.custom_file_upload}>
                            <FontAwesomeIcon icon={faCloudArrowUp}/> Upload Image
                        </label>
                        <input
                            className={classes.add_service_photo}
                            name='servicePhoto'
                            type='file'
                            placeholder='Add Photo'
                            accept="image/*"
                            onChange={servicePhotoInputHandler}
                            value={servicePhoto}
                        />
                    </div>
                    <div className={classes.details_input}>
                        <input
                            className={classes.new_service_details}
                            name='serviceName'
                            type='text'
                            placeholder='Service Name'
                            onChange={serviceNameInputHandler}
                            value={serviceName}
                        />
                    </div>
                    <div className={classes.details_input}>
                        <input
                            className={classes.new_service_details}
                            name='price'
                            type='number'
                            placeholder='Price'
                            onChange={priceInputHandler}
                            value={price}
                        />
                    </div>
                    <div className={classes.add_service_btn}>
                        <button type={"submit"}> PUBLISH </button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default AddNewService;