import {signIn, signUp, signInGoogle, singOut, setUsers} from '../controler-firebase.js'

const changeHash = (hash) => {
  location.hash = hash;

};

export const logInOnSubmit= () => {
  const email = document.getElementById('email')
  const password = document.getElementById('password')
  const msjError = document.getElementById('error');
  if (email.value=== '' || password.value === '') {
    msjError.innerHTML = 'Ingresa tus datos para iniciar sesión';
  } else {
    signIn(email.value, password.value)
    .then((result) => {
      console.log(result);
      observer();
      //changeHash('/welcome')          
    })
    .catch(function(error) {
      email.value = '';
      password.value = '';
        // Handle Errors here.
        var errorCode = error.code;
        //var errorMessage = error.message;
        if (errorCode == 'auth/invalid-email') {
          msjError.innerHTML = 'correo no valido,intente nuevamente'          
        } else if (errorCode == 'auth/wrong-password') {
          msjError.innerHTML = 'La contraseña es equivocada.'
        }  else {
          msjError.innerHTML='Usuario no registrado'
        }
      });
    }
  } 


export const signUpUser = () => {
  const email = document.querySelector('#email2');
  const password = document.querySelector('#password2');
  const msjError = document.getElementById('error');
  if (email.value === '' || password.value === ''){
    msjError.innerHTML= 'Ingresa tus datos para registrarte';   
  } else {
    signUp(email.value, password.value)
    .then((result) => {
      observer()
      console.log(result.user.uid);
      console.log(result.user);

      const name = document.getElementById('name').value;
      console.log(name);
      return setUsers('users', result.user.uid, {
        id: result.user.uid,
        name: name,
        email: result.user.email,
        photo: null
      })              
    })
    .catch(function(error) {
      email.value = '';
      password.value = '';
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/invalid-email'){
        const msjError = document.getElementById('error');
        msjError.innerHTML = 'correo no valido'};          
        console.log(errorCode); 
        console.log(errorMessage);
    });
  }      
}  
/* acceso con google*/
export const logInGoogle = () => {
  signInGoogle()
  .then((result)=>  {
    var token = result.credential.accessToken;
    console.log(token);
    const user = result.user;
    console.log(user.displayName);
    observer()
    return setUsers('users', result.user.uid, {
      id: user.uid,
      name: user.displayName,
      email: user.email
    })      
    //changeHash('/welcome')
  })
}

/* Identificar si el usuario esta activo o no*/

const observer = () =>{
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('usuario activo')
      let email = user.email;
      console.log(email);
      changeHash('/welcome')
    } else {
      console.log('usuario no activo')
    }
  });
}


/* Cerrar sesion */

export const logOut = () => {
  singOut()
  .then(() => {
    changeHash('/login')
  }).catch(function(error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorCode);
  });
}


  
  