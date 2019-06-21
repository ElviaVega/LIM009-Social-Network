//import { userActiv } from "../controler-firebase";

export default (user) => {  
     console.log(user) 
    const formUserProfile  = document.createElement("div");
    formUserProfile.className="user"
    const tmpUserProfile = `
        
            <img id="photo" src="${user.photo}" alt="photo of user" />
            <h3 id="">${user.name}</h3>
        
        `
    formUserProfile.innerHTML = tmpUserProfile
    return formUserProfile;
}






