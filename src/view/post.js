import { sendToCollection } from './view-controller.js';


export default (user) => {
    /* seccion donde se redacta el post */
    const formPost  = document.createElement('div');
    const tmpPost = `
        
        <form class='create-post'>
            <textarea id ='post' placeholder = '¿Que quieres compartir?' name='texto' spellcheck='true' class='estilo-textarea'></textarea>
            
            <select id='visibility'>
                <option value='' disabled selected>Compartir con</option>
                <option value='Todos'>Todos</option>
                <option value='Solo yo'>Solo yo</option>
            </select>
            <button  id='btn-compartir' type = 'button' class='btn-enviar' > Publicar </button>
            
        </form>
               
        `
    formPost.innerHTML = tmpPost;
    const visibility = formPost.querySelector('#visibility')
    let optionVisibility
    visibility.addEventListener('change', ()=>{
        optionVisibility = visibility.value;
    })
    const post = formPost.querySelector('#post')
    //const post = post.
    const btnCompartir = formPost.querySelector('#btn-compartir');
    btnCompartir.addEventListener('click', () => {
        const textPost = post.value;
        console.log(textPost)
        if(textPost.length===0 || visibility.value.length===0){
            alert('Debe ingrear un comentario y escoger su visibilidad antes de compartir')
        } else {        
        sendToCollection(user, textPost, optionVisibility)        
        }
        post.value = ''        
    });  
    return formPost;  

}
    
    
    
    
  
    
  