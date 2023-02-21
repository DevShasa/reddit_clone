// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: process.env.next_apiKey,
	authDomain: process.env.next_authDomain,
	projectId: process.env.next_projectId,
	storageBucket: process.env.next_storageBucket,
	messagingSenderId: process.env.next_messagingSenderId,
	appId: process.env.next_appId,
};


// Initialize Firebase for server side rendering
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, firestore, auth, storage };
