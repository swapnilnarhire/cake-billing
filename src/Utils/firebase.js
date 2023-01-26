import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3Ju-6WZmAxTFk7vI3yv33Wq3X48_DU-s",
  authDomain: "laxmi-cakes-3cd3d.firebaseapp.com",
  projectId: "laxmi-cakes-3cd3d",
  storageBucket: "laxmi-cakes-3cd3d.appspot.com",
  messagingSenderId: "864786120966",
  appId: "1:864786120966:web:51e9f5e59c34accdbd5e87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 