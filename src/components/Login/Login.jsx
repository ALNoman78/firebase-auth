import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import auth from "../../firebase.init"


const Login = () => {
    const provider = new GoogleAuthProvider
    const handleGoogleSignIn = () => {
        signInWithPopup(auth , provider)
        .then((request) => {
            console.log(request)
        })
        .catch((error) => {
            console.log('Error' , error)
        })
    }
    return (
        <div className="flex justify-center my-6">
            <button onClick={handleGoogleSignIn} className="btn btn-accent">Continue with Google</button>
        </div>
    )
}

Login.propTypes = {}

export default Login