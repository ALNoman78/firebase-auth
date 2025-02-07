import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user , setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        return signOut(auth);
    }

    // auth
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
            console.log('user currently active', currentUser)
            setUser(currentUser)
            return () => {
                unSubscriber();
            }
        })
    }, [])

    const authInfo = {
        createUser, signInUser, signOutUser , user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {}

export default AuthProvider