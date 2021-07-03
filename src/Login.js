import { Button } from '@material-ui/core';
import React, { useContext } from "react";
import "./Login.css";
// import firebase from "./firebase";
import {auth, provider} from "./firebase";
import { actionTypes } from "./reducer";
import {useStateValue} from "./StateProvider";
import { UserContext } from "./App";

function Login() {
    const [user, setUser] = useContext(UserContext);

    const signIn = () => {
        //Sing in ...
        auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
          console.log(result.user);
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login_logo">
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt=""
            />
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt=""
        />
            </div>
            <Button type="submit" onClick={signIn}>
            Sing In
            </Button>
        </div>
    )
    
}

export default Login 
