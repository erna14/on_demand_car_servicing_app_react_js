import React from "react";
import ReactDOM from "react-dom";
import classes from "../UI/servicePhoto.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUpload} from "@fortawesome/free-solid-svg-icons";

function UploadPhotoService(props) {
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
          height: "160px",
          width: "160px",
          border: "4px solid",
          color: "#283790"
          
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
      <button onClick={() => imageUploader.current.click()} className={classes.roundButton}><FontAwesomeIcon icon={faUpload} /></button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<UploadPhotoService />, rootElement);

export default UploadPhotoService;