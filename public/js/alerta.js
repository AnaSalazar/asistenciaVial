const config = {
   apiKey: "AIzaSyABb8aII6fA9pLaUaYKixL_Qbv6L0vDR9E",
   authDomain: "mockup-talentfest-greekgirls.firebaseapp.com",
   databaseURL: "https://mockup-talentfest-greekgirls.firebaseio.com",
   projectId: "mockup-talentfest-greekgirls",
   storageBucket: "mockup-talentfest-greekgirls.appspot.com",
   messagingSenderId: "781047440869"
 };
 firebase.initializeApp(config);
 const massaging = firebase.messaging();
 messaging.requestPermission().then(function(){
   console.log("creando permiso");
   return messaging.getToken();

 }).then(function(token){
   console.log(token);
 }).catch(function(err){
   console.log("Error ");
 })

 messaging.onMessage(function(payload){
   console.log("onMessage",payload);
 });
