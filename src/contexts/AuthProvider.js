import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // initial state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [exitsUser, setExitsUser] = useState("");

  // google sign in
  const googleProvider = new GoogleAuthProvider();
  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Email and password sign in
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // email and password login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update user profile
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Observe the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // set role
  useEffect(() => {
    setLoading(true);
    fetch(`https://flashback-zeta.vercel.app/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setExitsUser(data);
        setLoading(false);
      });
  }, [user?.email]);

  // Sign Out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  //forgot password
  const forgotPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // Provide this value
  const authInfo = {
    user,
    setUser,
    exitsUser,
    login,
    logOut,
    signInGoogle,
    registerUser,
    updateUserProfile,
    loading,
    forgotPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
