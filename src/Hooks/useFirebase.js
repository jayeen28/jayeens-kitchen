import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState('');
    const [error, seterror] = useState('');
    const [isLoading, setisLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    //sign up user
    const signUp = (email, password, userName) => {
        setisLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, userName);
    }
    //update name
    const updateName = userName => {
        updateProfile(auth.currentUser, {
            displayName: userName
        }).then(() => {
        });
    }
    //sign in user
    const signIn = (email, pass) => {
        setisLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }
    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    //observe user
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user);
            } else {
            }
            setisLoading(false);
        });
        return () => unsubscribed;
    }, [])
    //sign out user
    const signout = () => {
        setisLoading(true);
        signOut(auth)
            .then(() => { setuser({}) })
            .catch(error => error.message)
            .finally(() => setisLoading(false))
    }
    return {
        signUp,
        updateName,
        signIn,
        signInGoogle,
        signout,
        setuser,
        isLoading,
        setisLoading,
        user,
        error,
        seterror
    }
}
export default useFirebase;