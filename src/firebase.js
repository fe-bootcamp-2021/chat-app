import firebase from 'firebase';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  apiKey: process.env.REACT_APP_FIREBASE_DOMAIN,
  apiKey: process.env.REACT_APP_FIREBASE_ID,
  apiKey: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  apiKey: process.env.REACT_APP_FIREBASE_SENDER_ID,
  apiKey: process.env.REACT_APP_FIREBASE_APP_ID,
});

export default app;