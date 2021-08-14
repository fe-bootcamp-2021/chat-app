import firebase from 'firebase';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  domain: process.env.REACT_APP_FIREBASE_DOMAIN,
  id: process.env.REACT_APP_FIREBASE_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  senderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export default app;