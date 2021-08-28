import firebase from '../libs/firebase.libs';

function signUpWithEmailAndPassword({ email, password }) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      let user = userCredential.user;
    })
    .catch(() => {
      throw new Error(error)
    });
}

export default signUpWithEmailAndPassword;
