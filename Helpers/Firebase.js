import * as firebase from "firebase";

const API_KEY = "AIzaSyCm7FUvM6F_mpiYORGYlIQwVMC56eNGUzc";
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "practiceday-3ddf5.firebaseapp.com",
  databaseURL: "https://practiceday-3ddf5.firebaseio.com",
  projectId: "practiceday-3ddf5",
  storageBucket: "practiceday-3ddf5.appspot.com",
  messagingSenderId: "1014787903196"
};
export default class Firebase {
  static auth;
  static registrationInfo = {
    displayName: "",
    email: ""
  }
  static init() {
    firebase.initializeApp(firebaseConfig);
    Firebase.auth = firebase.auth();
  }
}