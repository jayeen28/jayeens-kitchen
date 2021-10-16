import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState('');
    const [error, seterror] = useState('');
    const auth = getAuth();

    //sign up user
    const signUp = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                setuser(res.user);
                updateName(name);
            })
            .catch(error => seterror(error.message));
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
        signInWithEmailAndPassword(auth, email, pass)
            .then(res => {
                setuser(res.user);
            })
            .catch(error => seterror(error.message));
    }
    console.log(user);
    return {
        signUp,
        signIn,
        user,
        error
    }
}
export default useFirebase;