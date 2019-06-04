
export default (user) => {  
      
    const formUserProfile  = document.createElement("div");
    const tmpUserProfile = `
        <div>
            <img id="photo" alt="user-pho"  src=""class="${user.photo}"/>
            <h2 id="">${user.name}</h2>
        </div>
        `
    formUserProfile.innerHTML = tmpUserProfile
    return formUserProfile;
}






