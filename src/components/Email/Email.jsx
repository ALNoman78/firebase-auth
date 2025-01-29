import { createUserWithEmailAndPassword } from "firebase/auth"
import auth from "../../firebase.init"
import { useState } from "react"

const Email = () => {
    const [error, setError] = useState('')
    

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email , password)

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                setError(error)
            })
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
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            {
                error && <p>{error.message}</p>
            }
        </div>
    )
}

Email.propTypes = {}

export default Email