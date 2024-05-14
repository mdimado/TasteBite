


import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { getAnalytics } from "firebase/analytics";





const firebaseConfig = {
  apiKey: "AIzaSyDnd0kXbunyDhSgOomasdpQ_bsME52TPuA",
  authDomain: "tastebyte-17944.firebaseapp.com",
  projectId: "tastebyte-17944",
  storageBucket: "tastebyte-17944.appspot.com",
  messagingSenderId: "224846271865",
  appId: "1:224846271865:web:85dc9fc3a8097678b2cba8"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;
