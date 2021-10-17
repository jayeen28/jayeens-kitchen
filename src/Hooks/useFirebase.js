import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState('');
    const [error, seterror] = useState('');
    const [isLoading, setisLoading] = useState(true);
    const auth = getAuth();

    //sign up user
    const signUp = (email, password, name) => {
        setisLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                setuser(res.user);
                updateName(name);
            })
            .catch(error => seterror(error.message))
            .finally(() => setisLoading(false))
    }
    //update name
    const updateName = name => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
        });
    }
    //sign in user
    const signIn = (email, pass) => {
        setisLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
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
        signIn,
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