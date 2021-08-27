import firebase from '../libs/firebase.libs';

function signInWithEmailAndPassword({ email, password }) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      let user = userCredential.user;
    })
    .catch((error) => {
      throw new Error(error)
    });
}

export default signInWithEmailAndPassword;
