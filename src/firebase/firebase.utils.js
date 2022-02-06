import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyC23Vk6UCjopofSdvYWfQNwtv87TiJS36U",
    authDomain: "crwn-db-ff0b7.firebaseapp.com",
    projectId: "crwn-db-ff0b7",
    storageBucket: "crwn-db-ff0b7.appspot.com",
    messagingSenderId: "865976414096",
    appId: "1:865976414096:web:1b03fac4da794807030d15",
    measurementId: "G-5L1QB6HXDL"
};

export const createUserProfileDocument =  async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot =  await userRef.get();
    
    //check if user from userAuth exists, if not create user from data
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        }catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;