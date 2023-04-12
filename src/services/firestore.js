import { getFirestore, collection, getDocs, query, where, updateDoc, doc, setDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { app } from './firebaseConfig';

const db = getFirestore(app);
// const analytics = getAnalytics(app);

export const getProducts = async () => {
  const query = await getDocs(collection(db, 'products'));
  const data = [];

  query.forEach(product => {
    const productData = product.data();
    const obj = { ...productData, id: product.id };
    data.push(obj);
  });

  return data;
};

export const getUserData = async userUID => {
  const q = query(collection(db, 'users'), where('uid', '==', userUID));
  const snapshot = await getDocs(q);
  const data = [];
  snapshot.forEach(user => {
    const userData = user.data();
    data.push(userData);
  });
  return data;
};

export const addUser = async data => {
  await setDoc(doc(db, 'users', data.uid), {
    ...data,
    authProvider: 'local',
  });
};

export const addItemToWishlist = async (uid, product) => {
  await updateDoc(doc(db, 'users', uid), {
    wishlist: arrayUnion(product),
  });
};

export const removeItemFromWishlist = async (uid, product) => {
  await updateDoc(doc(db, 'users', uid), {
    wishlist: arrayRemove(product),
  });
};
