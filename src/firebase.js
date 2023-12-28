import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDGFkESxHE2a8W0BZg4hi2uzSytdZsc70c",
    authDomain: "clone-58fea.firebaseapp.com",
    projectId: "clone-58fea",
    storageBucket: "clone-58fea.appspot.com",
    messagingSenderId: "775852592698",
    appId: "1:775852592698:web:3e974a1ad4bfe5810daf03"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth()