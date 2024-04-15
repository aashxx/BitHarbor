import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import { doc, setDoc, serverTimestamp, getDoc } from 'firebase/firestore';

export const AuthContext = createContext();

const AuthState = ({children}) => {

    // Create or Login user with Google
    // CURRENT USER
    const [user, setUser] = useState(null);

    // New user with Manual Signup
    const [createUser, setCreateUser] = useState({ name: "", email: "", password: "" });

    // New user with Manual Login
    const [newUser, setNewUser] = useState({ email: "", password: "" });

    const navigate = useNavigate();

    // Google Signup
    const handleGoogleSignup = async () => {
        const provider = new GoogleAuthProvider();
        try {

            const result = await signInWithPopup(auth, provider);

            // POST to user_data collection
            await setDoc(doc(db, 'users', result.user.uid), {
                name: result.user.displayName,
                email: result.user.email,
                photo: result.user.photoURL,
                subscription: "Free",
                createdAt: serverTimestamp()
            });

            setUser(result.user);

            // Navigate page
            navigate('/');

        } catch (error) {
            console.error(error);
        }
    }

    // Google Login
    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);

            // Navigate page
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    // Manual Signup
    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            const result = await createUserWithEmailAndPassword(auth, createUser.email, createUser.password);
            const editUser = result.user;
            console.log(editUser);

            await updateProfile(editUser, {
                displayName: createUser.name,
                photoURL: "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg"
            });

            const userRef = doc(db, 'users', result.user.uid);
            const userDoc = await getDoc(userRef);

            // POST to user_data collection
            if(!userDoc.exists()) {
                await setDoc(userRef, {
                    name: editUser.displayName,
                    email: editUser.email,
                    photo: editUser.photoURL,
                    subscription: "Free",
                    createdAt: serverTimestamp()
                });
            }

            setUser(editUser);

            // Reset Signup Form 
            setCreateUser({ name: "", email: "", password: "" });

            // Navigate Page
            navigate('/');

        } catch (error) {
            console.error(error);
        }
        
    }

    // Manual Login
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, newUser.email, newUser.password);

            // Reset Login form
            setNewUser({ email: "", password: "" });

            // Navigate Page
            navigate('/');

        } catch (error) {
            console.error(error);
        }
    }

    // Signout function
    const handleSignOut = async () => {
        try {
            await auth.signOut();
            setUser(null);
            navigate('/auth/login');
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
          if(user) {
            try {
                const userRef = doc(db, 'users', user.uid);
                const userDoc = await getDoc(userRef);
                
                if(userDoc.exists()) {
                    const userData = {
                        uid: user.uid,
                        ...userDoc.data()
                    }
                    setUser(userData);
                    
                } else {
                    setUser(null);
                }
            } catch (err) {
                console.error("Error fetching user document:", err);
            }
          } else {
            setUser(null);
          }
        })

    }, []);

    return (
        <AuthContext.Provider value={{ user, handleGoogleSignup, handleGoogleLogin, handleSignOut, createUser, setCreateUser, handleSignup, newUser, setNewUser, handleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState;