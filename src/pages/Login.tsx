import {signInWithPopup} from "firebase/auth";
import {auth, provider} from "../firebase.ts";
import googleButton from "../assets/google-login.svg"

export const Login = () => {
    const handleLogin = () => {
        signInWithPopup(auth, provider).catch((error) => {alert(error)});
    }
    return <>
        <button onClick={handleLogin}>
            <img src={googleButton} alt="login button"/>
    </button>
    </>
}