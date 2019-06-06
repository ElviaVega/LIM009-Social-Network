//import { userActiv } from "../controler-firebase.js";

export default (post,user) => {
    console.log(user.id)
    console.log(post.idUser)
    
    const formshowPost  = document.createElement("div");
    const tmpshowPost = `
        <div>
            <header>
               <p> Publicado por: ${post.name} </p>
               <p> ${post.post} </p>
               ${post.idUser === user.id? `
               <button  id="btn-eliminar" type = "button" class="btn-eliminar" > &#xf410</button>` : ""}
            </header>

            <p id ="post" > </p>
            ${post.idUser === user.id ? `
            <button  id="btn-editar" type = "button" class="btn-editar" > Editar </button>` : ""}
            <button id="btn-like" type = "button"> me gusta </button>           
            
        </div>
        `
    formshowPost.innerHTML = tmpshowPost;
   
    const btnEliminar = formPost.querySelector('#id=btn-eliminar');
    btnEliminar.addEventListener('click', deletePostUser);
     
    return formshowPost;     
}


