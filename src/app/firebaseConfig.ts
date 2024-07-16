import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxk7oeJYSW0uhDN54h3oIpO3wSP0mVNq0",
  authDomain: "music-app-bd36f.firebaseapp.com",
  databaseURL: "https://music-app-bd36f-default-rtdb.firebaseio.com",
  projectId: "music-app-bd36f",
  storageBucket: "music-app-bd36f.appspot.com",
  messagingSenderId: "700335002914",
  appId: "1:700335002914:web:d9e43f80323e69218ec17b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth };
