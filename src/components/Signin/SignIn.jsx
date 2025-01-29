import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const emailRef = useRef('')

    const handleSignIn = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        setSuccess(false)

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)
                setSuccess(true)
            })
            .catch(error => {
                setError(error.message)
                setSuccess(false)
            })
    }

    const handleForgetPassword = () => {
        console.log('forget password')
        const email = emailRef.current.value

        if (!email) {
            console.log('Use verified email address')
        } else {
            sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Password reset email sent , please check your email ')
            })
        }
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-6">
            <form onSubmit={handleSignIn} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" ref={emailRef} name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={isVisible ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
                    <button className="btn btn-xs absolute right-10 bottom-[8rem]" onClick={() => setIsVisible(!isVisible)}>
                        {
                            isVisible ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                    </button>
                    <label className="label">
                        <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            {
                error && <p>{error.message}</p>
            }
            {
                success && <p className="text-xl font-bold text-green-600 text-center my-4">Successfully Login your Account</p>
            }
        </div>
    )
}

SignIn.propTypes = {}

export default SignIn