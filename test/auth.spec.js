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

import { signIn, signUp, signInGoogle } from '../src/controler-firebase.js'

 
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