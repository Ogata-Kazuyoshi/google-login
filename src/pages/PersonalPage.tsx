import {signOut} from "firebase/auth"
import {auth} from "../firebase.ts";
export const PersonalPage = () => {
    const handleLogout = () => {
        signOut(auth)
    }
    return <>
    <div>PersonalPageです</div>
        <button onClick={handleLogout}>ログアウトする</button>
    </>
}