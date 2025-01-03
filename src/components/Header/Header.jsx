import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex items-center justify-center">
            <NavLink className='btn ml-2' to='/'>Home</NavLink>
            <NavLink className='btn ml-2' to='/login'>Log in</NavLink>
        </div>
    );
};

export default Header;