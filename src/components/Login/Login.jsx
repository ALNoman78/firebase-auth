import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut, TwitterAuthProvider } from "firebase/auth"
import auth from "../../firebase.init"
import { useState } from "react"
import { Link } from "react-router-dom"


const Login = () => {
    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    // const twitterProvider = new TwitterAuthProvider()

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((request) => {
                console.log(request);
                setUser(request.user)
            })
            .catch(error => console.log(error))
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('successful')
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result => {
                // const credential = GithubAuthProvider.credentialFromResult(result)
                console.log(result.user)
                setUser(result.user)
            }))
            .catch(error => console.log(error))
    }

    // const handleTwitterSignIn = () => {
    //     signInWithPopup(auth, twitterProvider)
    //         .then((result) => {
    //             setUser(result.user)
    //         })
    //         .catch(error => console.log(error))
    // }
    return (
        <div className="flex justify-center my-6">
            {/* <button onClick={handleGoogleSignIn} className="btn btn-accent">Continue with Google</button> */}
            {
                user ?
                    <button onClick={handleSignOut} className="btn ml-3 btn-error">Sign Out</button>
                    :
                    <div className="flex flex-col gap-4">
                        <button onClick={handleGoogleSignIn} className="btn btn-accent">Continue with Google</button>
                        <button onClick={handleGithubSignIn} className="btn btn-outline btn-success">Continue with Github</button>
                        <Link to='/email' className="btn btn-outline btn-primary">Sign in with Email</Link>
                        {/* <button onClick={handleTwitterSignIn} className="btn btn-accent">Sign In with twitter</button> */}
                    </div>
            }
            {
                user && <div>
                    <img className="rounded-full w-14 h-14" src={user.photoURL} alt="" />
                    <h4>{user.displayName}</h4>
                    <p>{user?.email}</p>
                </div>
            }
        </div>
    )
}

Login.propTypes = {}

export default Login