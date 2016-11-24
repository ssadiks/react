import firebase from 'firebase';
let nextTodoId = 0;

var config = {
    apiKey: "AIzaSyAIrm_FVD8tFylifFZYIsNI9jDJ0oW80zo",
    authDomain: "test-61ae3.firebaseapp.com",
    databaseURL: "https://test-61ae3.firebaseio.com",
    storageBucket: "test-61ae3.appspot.com",
    messagingSenderId: "165704883509"
};
const Shop = firebase.initializeApp(config);
var bigOne = document.getElementById('root');
var dbRef = firebase.database().ref().child('products');


dbRef.on('value', snapshot => {
    console.log(snapshot.val())
});

const receiveProducts = products => ({
  type: 'FETCH_POSTS',
  products: products
})

export const getAllProducts = () => dispatch => {
  dbRef.on('value', snapshot => {
        dispatch(
            receiveProducts(snapshot.val())
        );
    });
}

export function fetchPosts() {
  return dispatch => {
    dbRef.on('value', snapshot => {
        dispatch(
            receiveProducts(snapshot.val())
        );
    });
  };
}

export const addProduct = (name, price) => ({
    type: 'ADD_PRODUCT',
    name,
    price,
    id: nextTodoId++
})

export const addToCart = (id) => ({
    type : 'ADD_TO_CART',
    id
})
