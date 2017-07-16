import firebase from "firebase";

const config = {
  apiKey: "AIzaSyB7huEqNckzuo5t_A8gOS4lhCii75f0hSU",
  authDomain: "friendlychat-ed204.firebaseapp.com",
  databaseURL: "https://friendlychat-ed204.firebaseio.com",
  projectId: "friendlychat-ed204",
  storageBucket: "friendlychat-ed204.appspot.com",
  messagingSenderId: "236632083188"
};
firebase.initializeApp(config);

export default firebase;
