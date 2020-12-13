import { DocumentData, DocumentReference, QueryDocumentSnapshot, QuerySnapshot } from "@firebase/firestore-types";
import firebase from "firebase";
import "firebase/firestore";
import ItemCollection from "../models/ItemCollection";
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
): Promise<DocumentReference<DocumentData> | null> => {
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

export const addCollectionToFirebase = async <T>(
	collectionKey: string,
	collectionMembers: Array<T>
): Promise<void> => {
	const collectionRef = firestoreService.collection(collectionKey);

	const batch = firestoreService.batch();
	collectionMembers.forEach((member: T) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, member);
	});

	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (
	collections: QuerySnapshot<DocumentData>
): Array<ItemCollection> => (
	collections.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
		const { title, items } = doc.data();

		return {
			id: doc.id,
			title,
			routeName: encodeURI(title.toLowerCase()),
			items
		};
	})
);

export default firebase;