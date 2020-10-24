import firebase from "firebase";
import { firebaseConfig } from "./firebase.config";

firebase.initializeApp(firebaseConfig);

export const authUtil = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => authUtil.signInWithPopup(provider);

export default firebase;