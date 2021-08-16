import firebase from '../firebase';

function signInWithEmailAndPassword({ email, password }) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      let user = userCredential.user;
      // ...
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
    });
}

export default signInWithEmailAndPassword;
