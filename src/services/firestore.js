import { getFirestore, collection, getDocs, query, where, updateDoc, doc, setDoc, arrayUnion, arrayRemove, addDoc, getDoc } from 'firebase/firestore';
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
  const doctoGet = await getDoc(doc(db, 'users', userUID));
  const data = doctoGet.data();
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

export const createOrder = async orderData => {
  await addDoc(collection(db, 'orders'), {
    ...orderData,
  });
};

export const getOrderByID = async orderID => {
  const q = query(collection(db, 'orders'), where('orderID', '==', orderID));
  const snapshot = await getDocs(q);
  const order = snapshot.docs[0].data();

  return order;
};

export const getOrderByEmail = async email => {
  const q = query(collection(db, 'orders'), where('email', '==', email));
  const snapshot = await getDocs(q);
  const data = [];
  snapshot.forEach(order => {
    const orderData = order.data();
    data.push(orderData);
  });
  return data;
};
