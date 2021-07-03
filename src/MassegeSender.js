import { Avatar } from '@material-ui/core';
import React, { useContext, useState } from "react";
import "./MassegeSender.css";
import  PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from "@material-ui/icons/Videocam";
import  InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from "./StateProvider";
import {ExpandMoreOutlined} from "@material-ui/icons";
import db from "./firebase";
import firebase from "firebase";
import { UserContext } from "./App";


function MassegeSender() {
    const [user, setUser] = useContext(UserContext);
    const [input, setInput] = useState("");
    const [imageUrl,  setImageUrl] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
  
      db.collection("posts").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageUrl,
      });
  
      setInput("");
      setImageUrl("");
    };
    return (
        <div className="massegeSender">
            <div className="massegeSender_top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                    placeholder={`what is on your mind ${user.displayName}?`}
                    className="massegeSender_input"
                    />
                    <input 
                    value={imageUrl}
                    onChange={(e)=> setImageUrl(e.target.value)}
                    placeholder="image url(optional)" />
                    <button onClick={handleSubmit} type="submit">
                    Hiddem submit
                    </button>
                </form>
            </div>
            <div className="massegeSender_buttom">

                <div className="massegeSender_option">
                <VideocamIcon style={{color:"red"} }/>
                <h3>Live video</h3>
                </div>

                <div className="massegeSender_option">
                <PhotoLibraryIcon style={{color:"green"} }/>
                <h3>Photo/Video</h3>
                </div>

                <div className="massegeSender_option">
                <InsertEmoticonIcon style={{color:"orange"} }/>
                <h3>Feeling/Activity</h3>
                </div>

            </div>
        </div>
    )
}

export default MassegeSender
