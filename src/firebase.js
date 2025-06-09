import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiciyy5ki1XKYfZHj1yskDyJ05pVItSag",
  authDomain: "biztech-58f55.firebaseapp.com",
  projectId: "biztech-58f55",
  storageBucket: "biztech-58f55.appspot.com",  
  messagingSenderId: "89128997050",
  appId: "1:89128997050:web:b9f89252564c45e3f3f283"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
