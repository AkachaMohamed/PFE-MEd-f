import firebase from "../utility/fire"
const login = async (email, password)=> 

{
  var reponse= await firebase.auth().signInWithEmailAndPassword(email, password).then((tt)=>{
       
    
 
const user = firebase.auth().currentUser;
if(user)
return {role:user.displayName,email:user.email}
else
return false
}).catch((error2)=>{
  return error2.message
})
console.log(reponse)
return reponse
}
export default {
  login,
};
