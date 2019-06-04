
/* Registra usuarios nuevos */

export const signUp = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)}
    
  /* Acceso a usuarios existentes */

export const signIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)}
  
  /* Acceso con google */  

export const signInGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
};
/* cerrar sesion*/

export const singOut = () => {
   return firebase.auth().signOut()
};

/* identica si hay o no usuario activo 

export const userActv = (user) => {
  return firebase.auth().onAuthStateChanged(user);
}; 
*/ 

/* coleccion de usuario */

export const setUsers = (nameCollection, docId, obj) => {
  return firebase.firestore().collection(nameCollection).doc(docId).set(obj)
}

/* identificar al usuario que accedio a la aplicacion*/

export const userAcces = () => {
  return firebase.auth().currentUser;
 
};
export const userActiv = (callback) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback(user)
      console.log(user)
    } else {
      // No user is signed in.
      console.log("no hay usuario activo")

      }
    });
 };


/* obtener el usuario activo desde coleccion users */

export const userFirestore = (id) => {
   return firebase.firestore().collection("users").doc(id).get();
}





/* leer datos desde firestore
export const readData = (nameCollection) => {
  userAcces()
  return firebase.firestore().collection(nameCollection).get()
}
*/

/* leer y pintar en pantalla datos de una collecion 

export const getUser = () => {
  userAcces()
  .then((user) =>{
    const collectionUser = firebase.firestore().collection('users').doc(user.uid)
    collectionUser.get()
    .then((documento) => {
      if ((documento.exists)) {
        const name = document.querySelector('#username');
        //const photo = document.querySelector('#photo')
        name.innerHTML = documento.data().name
        console.log(documento.data())
      } else {
        console.log("No existe documento")
      }
    })

  }).catch(function(error) {
    console.log("Error getting document:", error);
});
}
*/
  
/* enviando post a coleccion de post */
export const setPost = (obj) =>{
  return firebase.firestore().collection("post").add(obj)
}

/*leer datos de la coleccion  */

export const readData = (namecollection) => {
  return firebase.firestore().collection(namecollection).onSnapShot();
}

 
/* export const setUsers = (user) => {
  const db = firebase.firestore()
  db.collection('users').doc(`${user.uid}`).set({
    name: user.displayName,
    email: user.email,
    photoUrl: user.photoURL,
    uid: user.uid
  })
.then(function() {
  console.log("Document successfully written!");
})
.catch(function(error) {
  console.error("Error writing document: ", error);
});
} */


