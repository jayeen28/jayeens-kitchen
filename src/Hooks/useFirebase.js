import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
const useFirebase = (email, pass) => {
    const [user, setuser] = useState('');
    const [error, seterror] = useState('');
    const auth = getAuth();
    //sign up system
    createUserWithEmailAndPassword(email, pass, auth)
        .then((userCredential) => {
            setuser(userCredential.user);
        })
        .catch(error => seterror(error.message));
    //sign in user 
    signInWithEmailAndPassword(auth, email, pass)
        .then(userCredential => {
            setuser(userCredential.user);
        })
        .catch(error => seterror(error.message));
    return {
        user,
        error
    }
}
export default useFirebase;