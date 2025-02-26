function validation(values){
    let error ={}

    
    if(!values.nom){
        error.nom = "Nom  is required"
    }else {
        error.nom = ""
    }
    if(!values.prenom){
        error.prenom = "Prenom  is required"
    }else {
        error.prenom = ""
    }
    if(!values.email){
        error.email = "Email is required"
    }
    else if(!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)){
        error.email = "Email is invalid"
    }
    else {
        error.email = ""
    }
    
    if(!values.password){
        error.password = "Password is required"
    }
    else {
        error.password = ""
    }
    
    if(!values.confirmer){
        error.confirmer = "User name is required"
    }
    if(values.confirmer === values.password){
        error.confirmer = "Password didn't match"
    }else {
        error.confirmer = ""
    }
    return error;
}
    export default validation;