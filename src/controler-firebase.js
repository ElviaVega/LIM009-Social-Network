
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
  }

// coleccion de usuario
export const setUsers = (nameCollection, docId, obj) => {
  return firebase.firestore().collection("nameCollection").doc(docId).set(obj)
}
// traer un documento de la coleccion user
export const getUser = (uidUser) => {
  const collectionUser = firebase.firestore().collection('users').doc(`${uidUser}`)
  collectionUser.get()
  .then((documento) => {
    if ((documento.exists)) {
      console.log(documento.data())
    } else {
      console.log("No existe documento")
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
});
}

  
// coleccion de post
export const setPost = (obj) =>{
  return firebase.firestore().collection("post").add(obj)
}

/* Obtener información del usuarios activo */

export const inforUserActiv = () => {
  const user = firebase.auth().currentUser;
  return user;  
}

/*leer datos de la coleccion user */

/* export const getFirestore = (collection,userId) => {
  return firebase.firestore().collection(collection).doc(userId).get();
}

 */
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


