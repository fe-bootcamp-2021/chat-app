import firebase from '../libs/firebase.libs';
import { routes } from '../constants/routes.constant';

function signInWithEmailAndPassword({ email, password }) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      let user = userCredential.user;
      window.history.pushState('page2', 'Title', routes.home.url);
      window.location.reload();
    })
    .catch((error) => {
      throw new Error(error);
    });
}

export default signInWithEmailAndPassword;
