import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {getFirestore} from 'firebase/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-manger-df435.firebaseapp.com",
  projectId: "task-manger-df435",
  storageBucket: "task-manger-df435.firebasestorage.app",
  messagingSenderId: "570594604326",
  appId: "1:570594604326:web:bd26523405408bf2dc3de7",
  measurementId: "G-VLJ0DLNZQB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
  
export { app };



