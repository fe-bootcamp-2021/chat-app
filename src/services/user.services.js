import { db } from '../libs/firebase.libs';

export const addUser = ({ email, name, surname, uid }) => {
  return db.ref(`/users/${uid}`).set({
    email,
    name,
    surname,
    uid,
  });
};

export const updateProfile = (uid, { description }) => {
  return db.ref('/users/').child(uid).update({
    description,
  });
};
