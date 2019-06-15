//configurando firebase mock
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const MockFirestore = new firebasemock.MockFirestore();
MockFirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  //use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  
);

//iniciando test

import { signIn, signUp, signInGoogle, singOut, userActiv  } from '../src/controler-firebase.js'
import { callbackify } from 'util';

 
describe('singIn', () => {
  it('debería poder iniciar sesión', () => {
    return signIn('alguien@hotmail.com', 'abc123')
    .then((user) => {
      expect(user.email).toBe('alguien@hotmail.com')
    });
  });
});

describe('signUp', () => {
  it('deberia registrar un usuario nuevo', () => {
    return signUp('alguien2@gmail.com', '123abc')
    .then((user) => {
      expect(user.email).toBe('alguien2@gmail.com')
    });
  });
});

describe('signInGoogle', () => {
  it('deberia autenticar con una cuenta de google', () => {
    return signInGoogle()
    .then((user) => {
      expect(user.isAnonymous).toBe(false)
    });
  });
});
describe('signOut', () => {
  it('deberia cerrar sesión del usuario', () => {
    return signIn('alguien@hotmail.com', '123456')
      .then((user1) => {
        //console.log(user1)
        return singOut()
          .then((user1) => {
           //console.log(user1)
          expect(user1).toBe(undefined) 
      })         
    });
  });
});

describe('userActiv', () => {
  it('debería identificar que el usuario tiene una sesión activa', (done) => {
    
    return signIn('alguien@hotmail.com', '123456')
    .then((user) => {
      console.log (user)
       userActiv((user) => user)
      //  expect(user.email).toBe('alguien@hotmail.com')
      
    })
    .then(res => {console.log(res); done()})
  })
})  