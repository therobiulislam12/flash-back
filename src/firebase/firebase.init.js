import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyApfkgwwA956xrOVkx4mhyQzKUbrPkXLPU",
  authDomain: "flash-back-48eb7.firebaseapp.com",
  projectId: "flash-back-48eb7",
  storageBucket: "flash-back-48eb7.appspot.com",
  messagingSenderId: "1075170645715",
  appId: "1:1075170645715:web:dfd19f920aa12496cb6626"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;