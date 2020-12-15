import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCiclttCubTnSl4Va9BN5MZ4hbZ_7lOXFE",
    authDomain: "crwn-db-b73af.firebaseapp.com",
    projectId: "crwn-db-b73af",
    storageBucket: "crwn-db-b73af.appspot.com",
    messagingSenderId: "68975088461",
    appId: "1:68975088461:web:ced6a6aab2e7d29a035d04",
    measurementId: "G-RFD4YFD12V"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestone = firebase.firestore();
 
const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle =()=> auth.signInWithPopup(provider);
