// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMnaK1NLJqXLPiZ2KHsqu7FGLZqGEiAXY",
  authDomain: "noteappslocal.firebaseapp.com",
  projectId: "noteappslocal",
  storageBucket: "noteappslocal.appspot.com",
  messagingSenderId: "154892670895",
  appId: "1:154892670895:web:453da34f41ae2a1130815a",
  measurementId: "G-Z0JCC7K6PT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}
