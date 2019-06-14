import { deletePostUser, editPostUser, editPrivacyPost } from "./view-controller.js";

export default (post,user) => {
    //console.log(user.id)
    //console.log(post.id)
    
    const formshowPost  = document.createElement("div");
    const tmpshowPost = `
        <div id="contenedor-post">
            <header>
               <p> Publicado por: ${post.name} </p>
               ${post.idUser === user.id ? `
               <button type = "button" class="btn-eliminar"><i style='font-size:24px' class='far'>&#xf410;</i></button>` : ""}
            </header>
               <textarea disabled id="textarea-${post.id}"> ${post.post} </textarea>
               
            
            <p id ="post" > </p>
            ${post.idUser === user.id ? `
            <button type = "button" class="btn-editar" > Editar </button> 
            <select id="visibility">
                <option value="" disabled selected> compartir con</option>
                <option value="Todos">Todos</option>
                <option value="Solo yo">solo yo</option>
            </select>`: ""}
           
            <button id="btn-like" type = "button"> me gusta </button> 
                     
            
        </div>
        `
    formshowPost.innerHTML = tmpshowPost;

    const idPost = post.id;
    //console.log(idPost)
    if(post.idUser === user.id) {
    const btnEliminar = formshowPost.querySelector('.btn-eliminar');
    const btnEditar = formshowPost.querySelector('.btn-editar')
    const visibility = formshowPost.querySelector('#visibility')
            
    btnEliminar.addEventListener('click', () => deletePostUser(idPost));
    btnEditar.addEventListener('click', () => {
             
        const textPost = document.getElementById(`textarea-${post.id}`)
        console.log(textPost)
        editPostUser(idPost, textPost, btnEditar);
    })
    
    visibility.addEventListener("change", ()=>{
        let optionVisibility = visibility.value;
        editPrivacyPost(idPost, optionVisibility)
    })
    
    
}
    return formshowPost;     
}


