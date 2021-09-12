// import firebase from "firebase/app";
// import 'firebase/firestore'

// const firestore = firebase.firestore();

// firestore.collection('user').doc('1O9H9MdKXJtjHru2Qn4D').collection('cartItems').doc('Hp1Sc6JAlOZ5slVOaOYv')
// firestore.doc('user/1O9H9MdKXJtjHru2Qn4D/cartItems/Hp1Sc6JAlOZ5slVOaOYv');
// firestore.collection('user/1O9H9MdKXJtjHru2Qn4D/cartItems');

const func = () => {
    
    return setTimeout(()=>{
        console.log('resFinal')
    },2000)
}

const funcN = () => {
    console.log('normal')
}

const test = async () => {
  const funtest = await func()
  console.log(funtest)
  const funtest1 = await funtest.funcN()
  console.log(funtest1)
}
test();
