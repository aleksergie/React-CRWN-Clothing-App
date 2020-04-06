import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDEr6-97wlW8rwA5-r7MN9RPjrFZ62wxKc",
  authDomain: "crwn-db-30f99.firebaseapp.com",
  databaseURL: "https://crwn-db-30f99.firebaseio.com",
  projectId: "crwn-db-30f99",
  storageBucket: "crwn-db-30f99.appspot.com",
  messagingSenderId: "680685534734",
  appId: "1:680685534734:web:38351eb9ddc6b5f0ed465f"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user" + error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
