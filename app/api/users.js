import firebase from "../utility/fire"

const register =async(userInfo)=>{

var reponse= await firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password).then((tt)=>{
const user = firebase.auth().currentUser;

if (user) {
  const update = {
    displayName: "parent",
    emailVerified:true,

    photoURL: 'https://img.icons8.com/color/452/123.png',
  };
  firebase.auth().currentUser.updateProfile(update).then((tt2)=>{
   
    
  }).catch((error)=>{
    console.log(error)
  })
 
  

 
}

if(user)
  return {ok:true}
  else
  return {ok:false}
}).catch((error2)=>{
  return {ok:false}
})
return reponse
}


export default { register };
