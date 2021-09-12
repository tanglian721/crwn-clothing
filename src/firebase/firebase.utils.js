import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBvEG2DyYQXh_jyD-TNtlW5EG09pgvGDSM",
  authDomain: "crwn-db-0721.firebaseapp.com",
  projectId: "crwn-db-0721",
  storageBucket: "crwn-db-0721.appspot.com",
  messagingSenderId: "991535047103",
  appId: "1:991535047103:web:8ea64a01bcab20e1d6810a",
  measurementId: "G-Y246M8CC3W",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
//   console.log(userAuth);
//   console.log(additionalData);
//   console.log(!userAuth);

  if (!userAuth) return;

  // const userRef = firestore.doc(`users/${userAuth.uid}`)
  const userRef = firestore.collection("users").doc(userAuth.uid);// 取得表格users的标识
//   console.log(userRef);
  const snapShot = await userRef.get(); //读取表格
//   console.log(snapShot.exists);
//   console.log(snapShot.data());//读取表格的内容

  if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
          await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
          }).then(async ()=>{
              const docu = await userRef.get();
            //   docu.exists && console.log(docu.data())
          })
      } catch (error) {
          console.log('error creating user',error.message)
      }
  }
//   console.log(userRef)

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
