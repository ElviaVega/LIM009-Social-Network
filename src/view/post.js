import { sendToCollection } from "./view-controller.js";
//import {readData} from "..controler-firebase.js/";

export default (user) => {
    /* seccion donde se redacta el post */
    const formPost  = document.createElement("div");
    const tmpPost = `
        <div>
        <form>
            <textarea id ="post" placeholder = "¿Que quieres compartir?" name="texto" spellcheck="true"></textarea>
            <select id="visibility">
                <option value="visibilidad">visibilidad</option>
                <option value="privado">Privado</option>
                <option value="publico">Público</option>
            </select>
            <button  id="btn-compartir" type = "button" class="btn-enviar" > Compartir </button>
            //<div id="pintar-comentario"</div>
        </form>
        <div id="containerPost"></div>
        </div>
        `
    formPost.innerHTML = tmpPost;
    const visibility = formPost.querySelector('#visibility')
    let optionVisibility
    visibility.addEventListener("change", ()=>{
        optionVisibility = visibility.value;
    })
    const btnCompartir = formPost.querySelector('#btn-compartir');
    btnCompartir.addEventListener('click', () => {
        const post = formPost.querySelector("#post")
        sendToCollection(user, post.value, optionVisibility)
        post.value = ""
        
    });   
  
    return formPost;  

}
    
    
    
    
  
    
  