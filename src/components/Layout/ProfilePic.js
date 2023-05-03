import React from "react";
import ReactDOM from "react-dom";
import classes from "../UI/Profile.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUpload} from "@fortawesome/free-solid-svg-icons";

function UploadPhoto(props) {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none"
        }}
      />
      <div
        style={{
          height: "180px",
          width: "180px",
          border: "4px solid",
          color: "#283790",
          borderRadius: "50%"
          
        }}  
      >
        <img
          ref={uploadedImage}
          style={{
            width: "100%",
            height: "100%"
          }}
        />
      </div>
      <h2 style={{top:"20px"}}>John Doe</h2>
      <button onClick={() => imageUploader.current.click()} className={classes.roundButton}><FontAwesomeIcon icon={faUpload} /></button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<UploadPhoto />, rootElement);

export default UploadPhoto;