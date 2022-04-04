import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// here i want to import the seed file
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyDB7b10TJNmwvQa8lS0edrsq4s1pc4d5G4",
    authDomain: "instagram-clone-yt-30ae8.firebaseapp.com",
    projectId: "instagram-clone-yt-30ae8",
    storageBucket: "instagram-clone-yt-30ae8.appspot.com",
    messagingSenderId: "315693231308",
    appId: "1:315693231308:web:b3f3fe03a699688a8fe669"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;


// here is where I want to call the seed file (only ONCE!)
// seedDatabase(firebase);

console.log(firebase, FieldValue)

export { firebase, FieldValue };