import firebase from "../utility/fire"
function getFirebaseApp(name, config) {
  let foundApp = firebase.apps.find(app => app.name === name);
  return foundApp ? foundApp : firebase.initializeApp(config || firebase.app().options, 'auth-worker');
}
const register =(email,password,role)=>{
console.log('-----------------')
let authWorkerApp = getFirebaseApp('auth-worker');
let authWorkerAuth = firebase.auth(authWorkerApp);
authWorkerAuth.setPersistence(firebase.auth.Auth.Persistence.NONE);

authWorkerAuth.createUserWithEmailAndPassword(email, password).then((t)=>
{ 
  const update = {
    displayName: role,
    emailVerified:true
  };
  authWorkerAuth.currentUser.updateProfile(update);
  return "ok"
}).catch(function(error) {
    return "not ok"
});

}


export default  register ;
