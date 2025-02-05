import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react"
import auth from "../firebase.init";

export const AuthContext = createContext(null);

const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}
const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

const authInfo = {
    createUser , signInUser
}


const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {}

export default AuthProvider