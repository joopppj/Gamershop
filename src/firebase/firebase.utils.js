import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCt-urJgWdeG14VC7AJZed98cwW2gCLtOc",
    authDomain: "gamershop-6c5f9.firebaseapp.com",
    projectId: "gamershop-6c5f9",
    storageBucket: "gamershop-6c5f9.appspot.com",
    messagingSenderId: "120714403528",
    appId: "1:120714403528:web:155a7617ff4b5c70d98ffd",
    measurementId: "G-MFH7T9W4MT"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

export const createUserDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set(
                {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                }
            )
        } catch (error) {
            console.log("error creating new user", error.message);
        }
    }
    return userRef;
}