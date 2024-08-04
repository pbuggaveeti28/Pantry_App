// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkS_KeTMzaNsHsGTqA5sqhmajxnBUm3tA",
  authDomain: "pantry-tracker-8ecab.firebaseapp.com",
  projectId: "pantry-tracker-8ecab",
  storageBucket: "pantry-tracker-8ecab.appspot.com",
  messagingSenderId: "414650386110",
  appId: "1:414650386110:web:e323adf3dab00270f840ef",
  measurementId: "G-FH93KLVCG6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };
