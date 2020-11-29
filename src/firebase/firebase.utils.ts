import firebase from "firebase";
import User from "../models/User";
import { firebaseConfig } from "./firebase.config";

firebase.initializeApp(firebaseConfig);
export const authService = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = (): Promise<firebase.auth.UserCredential> => (
	authService.signInWithPopup(provider)
);

const firestoreService = firebase.firestore();

export const createUserProfileDbDocument = async (
	userAuth: firebase.User | null,
	additionalData: Partial<User>
): Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData> | null> => {
	if (!userAuth) {
		return null;
	}

	const userDocRef = firestoreService.doc(`users/${userAuth.uid}`);
	const snapShot = await userDocRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userDocRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.error("Error creating user", error.message);
		}
	}

	return userDocRef;
};

export default firebase;