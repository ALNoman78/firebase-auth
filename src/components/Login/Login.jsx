import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import auth from "../../firebase.init"
import { useState } from "react"


const Login = () => {

    const provider = new GoogleAuthProvider
    const [user, setUser] = useState(null)

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((request) => {
                console.log(request.user)
                setUser(request.user)
            })
            .catch((error) => {
                console.log('Error', error)
                setUser(null)
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then((resutl) => {
                console.log('Sign out successful', resutl);
                setUser(null)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="flex justify-center my-6">
            {/* <button onClick={handleGoogleSignIn} className="btn btn-accent">Continue with Google</button> */}
            {
                user ?
                    <button onClick={handleSignOut} className="btn ml-3 btn-error">Sign Out</button> :
                    <button onClick={handleGoogleSignIn} className="btn btn-accent">Continue with Google</button>
            }
            {/* <button onClick={handleSignOut} className="btn ml-3 btn-error">Sign Out</button> */}
            {
                user && <div>
                    <img className="rounded-full w-14 h-14" src={user.photoURL} alt="" />
                    <h4>{user.displayName}</h4>
                    <p>Email address : {user.email}</p>
                </div>
            }
        </div>
    )
}

Login.propTypes = {}

export default Login