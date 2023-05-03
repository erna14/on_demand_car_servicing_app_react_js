import React, {Fragment} from "react";
import classes from "../UI/Profile.module.css";
import "../Layout/ProfilePic";
import UploadPhoto from "../Layout/ProfilePic";

function MyProfile() {

    return(
        <Fragment>
            <div className={classes.container}>
                <div className={classes.photoDiv}>
                    <UploadPhoto/>
                </div>
                <div className={classes.profileInfo}>
                    <div className={classes.info}>
                        <h3>Email</h3>
                        <h4>johndoe@gmail.com</h4>
                    </div>
                    <div className={classes.info}>
                        <h3>Company Name</h3>
                        <h4>My CompanyCo</h4>
                    </div>
                    <div className={classes.info}>
                        <h3>Role</h3>
                        <h4>Administrator</h4>
                    </div>

                </div>

            </div>
        </Fragment>
    )

}

export default MyProfile;