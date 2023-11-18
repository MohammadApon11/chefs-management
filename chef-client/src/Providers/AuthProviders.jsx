import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const UserContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading,setLoading] = useState(true)

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const gitHubLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider);
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    const changeProfile = ( currentUser, name, photo) => {
         updateProfile(currentUser, {
            displayName: name,
            photoURL: photo
        })
        console.log(currentUser)
    }

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const userInfo = {
        user,
        signUp,
        logIn,
        googleLogIn,
        gitHubLogIn,
        changeProfile,
        logOut,
        loading
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProviders;