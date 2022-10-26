import React, { useState } from 'react';
import app from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { createContext } from "react";

export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    // Create user with email and password
    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }


    // Logn with Email and Password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }



    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }




    const authinfo = { createUser, updateUserProfile, signIn }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
