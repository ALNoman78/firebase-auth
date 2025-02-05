import { useContext, useState } from "react"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { sendEmailVerification } from "firebase/auth";
import auth from "../../firebase.init";

const Email = () => {
    const [error, setError] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const [success, setSuccess] = useState(false)

    const { createUser } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError('')
        setSuccess(false)
        console.log(email, password)

        createUser(email , password)
        .then(() => {
            setSuccess(true)
            sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log('Verification email sent')
            })
        })
        .catch((error) => {
            console.log(error.message)
            setError(error.message)
            setSuccess(false)
        })


        // createUserWithEmailAndPassword(auth, email, password)

    }


    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-8">
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" name="email" required />
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
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sing Up</button>
                </div>
                <p>Have an account ? <Link to='/signin' className="text-green-500 font-medium underline">Log In</Link></p>
            </form>
            {
                error && <p>{error.message}</p>
            }
            {
                success && <p className="text-xl font-bold text-green-600 text-center my-4">Successfully Signup your Account</p>
            }
        </div>
    )
}

Email.propTypes = {}

export default Email