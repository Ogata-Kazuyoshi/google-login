import {signInWithPopup} from "firebase/auth";
import {auth, githubProvider, provider} from "../firebase.ts";
import googleButton from "../assets/google-login.svg"

export const Login = () => {
    const handleLogin = () => {
        signInWithPopup(auth, provider).catch((error) => {alert(error)});
    }

    const handleGithub = () => {
        signInWithPopup(auth,githubProvider).catch(err => alert(err))
    }
    return <>
        <button onClick={handleLogin}>
            <img src={googleButton} alt="login button"/>
    </button>
        <br/>
        <br/>
        <button onClick={handleGithub}>githubでログイン</button>
    </>
}