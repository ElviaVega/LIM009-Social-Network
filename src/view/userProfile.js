//import { userActiv } from "../controler-firebase";

export default (user) => {  
      
    const formUserProfile  = document.createElement("div");
    const tmpUserProfile = `
        <div>
            <img id="photo" src="${user.photo}" alt="photo of user" />
            <h3 id="">${user.name}</h3>
        </div>
        `
    formUserProfile.innerHTML = tmpUserProfile
    return formUserProfile;
}






