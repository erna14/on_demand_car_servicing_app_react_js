import React, {Fragment} from "react";
import classes from "../UI/ManageServices.module.css";
import AddNewService from "../Layout/AddNewService";
import CurrentService from "../Layout/CurrentService";

function ManageServices() {
    return (
        <Fragment>
            <div className={classes.container}>
                <div className={classes.current_services_list}>
                    <h2>Current Services</h2>
                    <div className={classes.scroll}>
                        <CurrentService
                            img={"../images/logo.jpg"}
                            title={"Oil Change"}
                            price={100}
                        />
                        <CurrentService
                            img={"../images/logo.jpg"}
                            title={"Tire Change"}
                            price={200}
                        />
                        <CurrentService
                            img={"../images/logo.jpg"}
                            title={"Battery Replacement"}
                            price={150}
                        />
                        <CurrentService
                            img={"../images/mechanic.png"}
                            title={"Basic Inspection"}
                            price={300}
                        />
                        <CurrentService
                            img={"../images/logo.jpg"}
                            title={"Oil Change"}
                            price={100}
                        />
                    </div>
                </div>
                <AddNewService/>
            </div>

        </Fragment>
    )
}

export default ManageServices;