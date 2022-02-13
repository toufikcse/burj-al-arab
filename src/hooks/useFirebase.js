import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const logInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            }
            return unsubscribe;
        });
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            // An error happened.
        });
    }

    return {
        user,
        logInUsingGoogle,
        logOut
    }
}

export default useFirebase;