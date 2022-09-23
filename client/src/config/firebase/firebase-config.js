
//!Cambiar nombres de funciones y verificarlas, esto es un testeo.

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/app";
import "firebase/auth";


const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
const auth = firebase.auth(app);
export const provider = new GoogleAuthProvider();

// Initialize Firebase
export function onAuthStateChanged(...props) {
	return auth.onAuthStateChanged(...props);
}

export async function singInWithGoogle() {
	auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
		const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
		return auth.signInWithPopup(GoogleAuthProvider);
	});
}

export function singInWithEmailAndPassword(email, password) {
	return auth.signInWithEmailAndPassword(email, password);
}

export function singUpWithEmailAndPassword(email, password) {
	return auth.createUserWithEmailAndPassword(email, password);
}

export function sendPasswordResetEmail(email) {
	return auth.sendPasswordResetEmail(email);
}

export function signOut() {
	return auth.signOut();
}

export function getCurrentUser() {
	return auth.currentUser;
}

export function getCurrentUserToken() {
	if (!auth.currentUser) {
		return null;
	}

	return auth.currentUser.getIdToken();
}

export function getCurrentUserEmail() {
	if (!auth.currentUser) {
		return null;
	}

	return auth.currentUser.email;
}

export function updateEmail(user, email) {
	return user.updateEmail(email);
}
