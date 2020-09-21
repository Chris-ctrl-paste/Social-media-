import React from 'react'
import { Button } from "@material-ui/core"
import "../css/Login.css"
import { auth, provider } from '../Firebase/Firebase'
import { useStateValue } from '../context/StateProvider'
import { actionTypes } from '../context/Reducer'


function Login() {

    const [{ }, dispatch] = useStateValue();

    const signIn = () => {


        auth.signInWithPopup(provider).then(result => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        },

        ).catch(error => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login_container">
                <img
                    src="https://www.themeraider.com/wp-content/uploads/2016/11/feat-oct-14-1.jpg"
                    alt=""
                />
                <div className="login_text">
                    <h1>Sign in to Fake Social-Media-Platform</h1>
                </div>
                <Button type="submit" onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
