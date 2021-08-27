import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  domain: import.meta.env.VITE_FIREBASE_DOMAIN,
  id: import.meta.env.VITE_FIREBASE_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  senderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
});

export default app;