import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBvEG2DyYQXh_jyD-TNtlW5EG09pgvGDSM",
    authDomain: "crwn-db-0721.firebaseapp.com",
    projectId: "crwn-db-0721",
    storageBucket: "crwn-db-0721.appspot.com",
    messagingSenderId: "991535047103",
    appId: "1:991535047103:web:8ea64a01bcab20e1d6810a",
    measurementId: "G-Y246M8CC3W"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;