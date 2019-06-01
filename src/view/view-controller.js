import { signIn, signUp, signInGoogle, singOut, setUsers, setPost, inforUserActiv } from '../controler-firebase.js'
import { getUser } from '../controler-firebase.js'

const changeHash = (hash) => {
  location.hash = hash;

};

export const logInOnSubmit = () => {
  const email = document.getElementById('email')
  const password = document.getElementById('password')
  const msjError = document.getElementById('error');
  if (email.value === '' || password.value === '') {
    msjError.innerHTML = 'Ingresa tus datos para iniciar sesión';
  } else {
    signIn(email.value, password.value)
      .then((result) => {
        console.log(result);
        observer();
        //changeHash('/welcome')          
      })
      .catch(function (error) {
        email.value = '';
        password.value = '';
        // Handle Errors here.
        var errorCode = error.code;
        //var errorMessage = error.message;
        if (errorCode == 'auth/invalid-email') {
          msjError.innerHTML = 'correo no valido,intente nuevamente'
        } else if (errorCode == 'auth/wrong-password') {
          msjError.innerHTML = 'La contraseña es equivocada.'
        } else {
          msjError.innerHTML = 'Usuario no registrado'
        }
      });
  }
}


export const signUpUser = () => {
  const email = document.querySelector('#email2');
  const password = document.querySelector('#password2');
  const msjError = document.getElementById('error');
  if (email.value === '' || password.value === '') {
    msjError.innerHTML = 'Ingresa tus datos para registrarte';
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
      .catch(function (error) {
        email.value = '';
        password.value = '';
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/invalid-email') {
          const msjError = document.getElementById('error');
          msjError.innerHTML = 'correo no valido'
        };
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
    const nameUser = user.displayName;
    observer()
    return setUsers('users', result.user.uid, {
      id: user.uid,
      name: nameUser,
      email: user.email
    })      
    changeHash('/welcome')
  })
}






/* Identificar si el usuario esta activo o no*/

export const observer = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      const uid = user.uid;
      /* getUser(uid) */
      /* console.log(getUser) */
      console.log(user)
      console.log('usuario activo')
      //console.log(usuario);
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
    }).catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

/* Obtener datos del usuario para imprimir en pantalla */
/* 
export const getData = (uid) => { */
  //observer()
  /* getFirestore("user", uid)
    .then((doc) => {
      if (doc.exists) {
        console.log(doc.data()) */
        /* let username = document.querySelector('#username');
        let photoUser = document.querySelector('#photo');
        username.innerHTML = doc.get("name");
        photoUser.src = doc.get("photo"); */
      /* } else { */
        // console.log("No such document!");
  /*     }
    }).catch(function (error) {
      console.log("Error :", error.message);
    });
} */

/* crear post y enviarlo al firestore*/

export const sendToCollection = () => {
  const post = document.querySelector('#post').value;
  const objUser = inforUserActiv()
  console.log(objUser);
  let userPost = {
    userId: objUser.uid,
    name: objUser.displayName,
    post: post,
    fecha: null
  }
  return setPost(userPost)
    .then(function (docRef) {
      console.log(docRef)
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });

}

/* 
/*

export const showPostEvent = (e) =>{
  event.preventDefault()
  const post = document.querySelector('#post').value;
  collectionPost(post)
  .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      // const uid = docRef.parent.firestore._firestoreClient.credentials.currentUser.uid;

    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
} 
*/
/* export const logInGoogle = () => {
  signInGoogle()
    .then((result) => {
      
      setUsers(result.user)
      changeHash('/welcome')
    })
  }

  observer() */