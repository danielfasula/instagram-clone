import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import { seedDatabase } from '../seed'

const config = {
    apiKey: "AIzaSyCo6uJd6nHeWku2l8romrbGGgfRcLUgEg4",
    authDomain: "instagram-clone-42c76.firebaseapp.com",
    projectId: "instagram-clone-42c76",
    storageBucket: "instagram-clone-42c76.appspot.com",
    messagingSenderId: "1092147266033",
    appId: "1:1092147266033:web:236719b196f62f181c0450"
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

// NOTE only initialize once
// seedDatabase(firebase)

export { firebase, FieldValue };