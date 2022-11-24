import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init'

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    // initial state
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google sign in
    const googleProvider = new GoogleAuthProvider();
    const signInGoogle = () =>{
      setLoading(true)
      return signInWithPopup(auth, googleProvider);
    }


    // Email and password sign in
    const registerUser = (email, password) =>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

    // email and password login
    const login = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }

    // Update user profile
    const updateUserProfile = (name, photo) =>{
      setLoading(true)
      return updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
    }

    // Observe the user
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false)
      })

      return () => unsubscribe();
    },[])

    // Sign Out
    const logOut = () =>{
      setLoading(true)
      return signOut(auth);
    }



    // Provide this value
    const authInfo = {
        user,
        setUser,
        login,
        logOut,
        signInGoogle,
        registerUser,
        updateUserProfile,
        loading
    };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider