import { signIn, signUp, signInGoogle, singOut, setUsers, setPost,  userActiv, userFirestore, deletePost, editPost, editVisibilityPost } from '../controler-firebase.js'


const changeHash = (hash) => {
  location.hash = hash;

};
/* inicio de sesión */

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

/* Registro de usuario con email y contraseña */
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
          //photo: "http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png"
        })
      })
      .catch((error) => {
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
    console.log(token)
    const user = result.user;
    const nameUser = user.displayName;
    //const photo= user.photoURL;
    observer()
    return setUsers('users', result.user.uid, {
      id: user.uid,
      name: nameUser,
      email: user.email,
      //photo

    })      
    //changeHash('/welcome')
  })
 }

/* Identificar si el usuario esta activo o no*/


export const observer = () => {
  firebase.auth().onAuthStateChanged( (user) => {
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

/* crear post y enviarlo al firestore*/

export const sendToCollection = (userData, post, visibility) => {
/*   const objUser = userAcces();
  console.log(objUser); */
    let userPost = {
    userId: userData.id,
    name: userData.name,
    post,
    date: new Date(),
    visibility
  }

  return setPost(userPost)
    .then( (docRef)  => {
      console.log(docRef)
      
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
    
}

/* Leer y pintar los post en pantalla */

export const showPost = () => {
  //readData("post")
  //const post1 = document.querySelector(post1)
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().post}`);
  });
}

/* obtener datos de usuario activo */

export const userData = (cb) => {   
  userActiv(user => {
    console.log(user)
    userFirestore(user.uid)
    .then(res => {//console.log(res)
      cb(res.data())
    })  
  })
}

/*borrar post creado por el usuario */

export const deletePostUser = (idPost) => {
  deletePost(idPost)
  .then(() => {
    console.log("Document successfully deleted!");
  }).catch((error) => {
    console.error("Error removing document: ", error);
  });
}
/* editar un post */

export const editPostUser = (idPost,textPost, btnEditar) => {
  textPost.disabled = false;
  btnEditar.innerHTML = "guardar";
  btnEditar.addEventListener('click', () => {
    let newPost = textPost.value;
    console.log(newPost)
    editPost(idPost, newPost)
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });

    })
}
 /* Editar la visibilidad de un post  */

 export const editPrivacyPost = (idPost, newVisibility) => {
  editVisibilityPost(idPost,newVisibility)
  
 }
