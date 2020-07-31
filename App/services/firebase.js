import firebase from 'firebase';
import 'firebase/auth';
const config = {
  apiKey: "AIzaSyD_FlEPfH4BPAr2bnikevQ2LeJynB6ZMaM",
  authDomain: "one-time-password-ff413.firebaseapp.com",
  databaseURL: "https://one-time-password-ff413.firebaseio.com",
  projectId: "one-time-password-ff413",
  storageBucket: "one-time-password-ff413.appspot.com",
  messagingSenderId: "198304410928",
  appId: "1:198304410928:web:2d2c916d5cfe890b316cf5",
  measurementId: "G-CY13L59E5P"
};

firebase.initializeApp(config);
const auth = firebase.auth();
export { firebase, auth as default };