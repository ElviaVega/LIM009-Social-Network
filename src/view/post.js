import { sendToCollection } from "./view-controller.js";
//import {readData} from "..controler-firebase.js/";

export default (user) => {
    /* seccion donde se redacta el post */
    const formPost  = document.createElement("div");
    const tmpPost = `
        <div>
        <form>
            <textarea id ="post" placeholder = "¿Que quieres compartir?" name="texto" spellcheck="true"></textarea>
            <select>
                <option value="privado">Privado</option>
                <option value="publico">Público</option>
            </select>
            <button  id="btn-compartir" type = "button" class="btn-enviar" > Compartir </button>
            
        </form>
        <div id="containerPost"></div>
        </div>
        `
    formPost.innerHTML = tmpPost;
    const btnCompartir = formPost.querySelector('#btn-compartir');
    btnCompartir.addEventListener('click', () => {
        const textArea = formPost.querySelector("#post")
        sendToCollection(user)
        textArea.value = ""
        
    });   
  
    return formPost;  

}
    
    
    
    
  
    
  