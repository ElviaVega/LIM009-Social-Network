import { deletePostUser } from "./view-controller.js";

export default (post,user) => {
    //console.log(user.id)
    //console.log(post.id)
    
    const formshowPost  = document.createElement("div");
    const tmpshowPost = `
        <div>
            <header>
               <p> Publicado por: ${post.name} </p>
               <p> ${post.post} </p>
               ${post.idUser === user.id? `
               <button type = "button" class="btn-eliminar" > &#xf410</button>` : ""}
            </header>

            <p id ="post" > </p>
            ${post.idUser === user.id ? `
            <button type = "button" class="btn-editar" > Editar </button>` : ""}
            <button id="btn-like" type = "button"> me gusta </button>           
            
        </div>
        `
    formshowPost.innerHTML = tmpshowPost;

    const idPost = post.id;
    if(post.idUser === user.id) {
    const btnEliminar = formshowPost.querySelector('.btn-eliminar');
    btnEliminar.addEventListener('click', () => deletePostUser(idPost));
    }
     
    return formshowPost;     
}


