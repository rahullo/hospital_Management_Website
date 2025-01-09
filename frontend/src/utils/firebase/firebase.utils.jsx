import {initializeApp } from 'firebase/app';

import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
 
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc, 
    getDocFromServer
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA5xQaPN-mY-6KKZiyYQrPhihh2OU_OgpE",
    authDomain: "crwn-clothing-rahul.firebaseapp.com",
    projectId: "crwn-clothing-rahul",
    storageBucket: "crwn-clothing-rahul.appspot.com",
    messagingSenderId: "788661263542",
    appId: "1:788661263542:web:b0ca2bce1dd80d01225a17",
    measurementId: "G-4DM8Y1KJ9Y"
  };
  
  // Initialize Firebase

  const firebaseApp = initializeApp(firebaseConfig);

  // Authentication

  const googleProvider = new GoogleAuthProvider()
  
  googleProvider.setCustomParameters({
      prompt: "select_account"
  })

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth , googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)


// Setting up firebase database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionInformation ) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)


    if(!userSnapshot.exists()) {
        const { displayName, email} = userAuth
        const createdAt = new Date()
        
        try {
          await setDoc(userDocRef, { displayName, email, createdAt, ...additionInformation})
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }
    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)