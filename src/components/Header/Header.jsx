import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {

    const { user, signOutUser } = useContext(AuthContext)

    const handleSignOut = () => {
        signOutUser()
        .then(() => {
            console.log('Sign Out User' )
        })
        .catch((error) => {
            console.log(error.message)
        })
    }
    return (
        <div className="flex items-center justify-center">
            <NavLink className='btn ml-2  mx-4' to='/'>Home</NavLink>
            <NavLink className='btn ml-2  mx-4' to='/login' >Log in</NavLink>
            {
                user ?
                    <>
                        <a className="link">{user?.email}</a>
                        <button onClick={handleSignOut} className="btn btn-error">Sign Out</button>
                    </>
                    : <Link to='/login' className="btn">Log In</Link>
            }
        </div>
    );
};

export default Header;