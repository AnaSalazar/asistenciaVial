
(function() {

//Inicializar Firebase
const config = {
   apiKey: "AIzaSyABb8aII6fA9pLaUaYKixL_Qbv6L0vDR9E",
   authDomain: "mockup-talentfest-greekgirls.firebaseapp.com",
   databaseURL: "https://mockup-talentfest-greekgirls.firebaseio.com",
   projectId: "mockup-talentfest-greekgirls",
   storageBucket: "mockup-talentfest-greekgirls.appspot.com",
   messagingSenderId: "781047440869"
 };
 firebase.initializeApp(config);

  // Obtener elementos
  const txtEmail = document.getElementById('username');
  const txtPassword = document.getElementById('password');
  const btnLogin = document.getElementById('botonLogin');
  const btnSignUp = document.getElementById('botonSing');
  const btnLogout = document.getElementById('botonLogout');
// para llamar a los atributos del obeto
  const name = document.getElementById("user-name");
  const img = document.getElementById("user-pic");
  const correoElectronico= document.getElementById("correo");


  //agregado reciente para la base de datos
  const database= firebase.database();


  // Añadir Evento login
  btnLogin.addEventListener('click', e => {
    //Obtener email y pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e =>
      alert(e.message)
  );
  });
  // Añadir evento signup
  btnSignUp.addEventListener('click', e => {
    // Obtener email y pass
    // TODO: comprobar que el email sea real
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => alert(e.message));
  });

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  // Añadir un listener en tiempo real
  firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
    } else {
      console.log('no logueado');
      btnLogout.classList.add('hide');

    }
  });

  //area de google
 const btnGoogle = document.getElementById('id-google');
 btnGoogle.addEventListener( 'click', loginWithGoogle);

 function logIn(provider){
    firebase.auth().signInWithPopup(provider).then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
         console.log('user', user);
        console.log(user.displayName)
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

        console.log('error', error);
    });

}


function loginWithGoogle(provider) {
    var provider = new firebase.auth.GoogleAuthProvider();
    logIn(provider);
}

// para podder acceder mediante google
function ingresoGoogle(){
  if(!firebase.auth().currentUser){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https:www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider).then (function(result){
      var token = result.credential.accessToken;
      var user = result.user;

    }).catch(function(error){
      var errorcode = error.code;
      var errorMessage = error.message;
      var erroremail = error.email;
    })
  }
}


function InicializarFire(){
  firebase.auth().onAuthStateChanged(function(user){
    if(user){
    //  console.log(user);
    var displayName= user.displayName;// llamamos las propiedades del objeto
    var photo= user.photoURL;
    var email= user.email;

    name.textContent = displayName;
    correoElectronico.textContent= email;
    //img.style.backgroundImage = "url('+photo+')";// apara concatenar
    if(photo){
      img.style.backgroundImage= "url("+photo+")";
    }else{
      img.style.backgroundImage= "url(../assets/img/sesion.png)";
    }

    userconect=database.ref("/user");
    AgregarUserBD(user.uid,user.displayName);


    //child_added:
    //child_changed: // es un evento que permite la captura
  //  child_remove:// evento que permite remover datos
    //cada vez que utilicemos algunos de los eventos anteriores ,usaremos el metodo on
    userconect.on('child_added', function(data){
      console.log("ha ingresado a la sala"+data.val().name);
    })

    }
  });
}

function AgregarUserBD(uid,name){
  var connectados= userconect.push({
    uid:uid,
    name:name
  });
}


window.onload = function(){
  InicializarFire();

}



} ());
