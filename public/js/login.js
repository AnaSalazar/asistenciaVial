
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
} ());
