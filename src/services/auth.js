import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { addUser } from './firestore';
import { toast } from 'react-toastify';
import { app } from './firebaseConfig';

export const auth = getAuth(app);

export const signUp = async data => {
  return createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(userCredential => {
      const userData = { ...data, uid: userCredential.user.uid, wishlist: [] };
      delete userData.password;
      addUser(userData);
    })
    .catch(err => {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode, errorMessage);
    });
};

export const logIn = async data => {
  return signInWithEmailAndPassword(auth, data.email, data.password)
    .then(userCredential => {
      const user = userCredential.user;
      return user;
    })
    .catch(err => {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode, errorMessage);
    });
};

export const logOut = async () => {
  return signOut(auth)
    .then(() => {
      toast.success('Logged out successfully');
    })
    .catch(error => {
      toast.error('An error occurred, please try again');
    });
};
