import firebase from '../firebase';

function signUpWithEmailAndPassword({ email, password }) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      let user = userCredential.user;
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
    });
}

export default signUpWithEmailAndPassword;
