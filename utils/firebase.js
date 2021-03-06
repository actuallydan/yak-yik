import firebase from "firebase/app";
import "firebase/auth";
import "@firebase/firestore";

// init firebase
export const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// prevent app from trying to re-init when importing into mulitple components
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

firebase.auth().useDeviceLanguage();

export default firebase;
