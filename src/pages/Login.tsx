import {GithubAuthProvider, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth, githubProvider, googleProvider} from "../firebase.ts";
import googleButton from "../assets/google-login.svg"

export const Login = () => {
    const handleLogin = (provider : GoogleAuthProvider |  GithubAuthProvider ) => {
        signInWithPopup(auth, provider).catch((error) => {alert(error)});
    }

    return <>
        <button onClick={() => {handleLogin(googleProvider)}}>
            <img src={googleButton} alt="login button"/>
    </button>
        <br/>
        <br/>
        <button onClick={() => {handleLogin(githubProvider)}}>githubでログイン</button>
    </>
}