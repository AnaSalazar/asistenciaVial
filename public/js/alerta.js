
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
=======
var contenedorMssg = $("#contenedorMensaje");

var registrationToken = "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1...";

var payload = {
  data: {
    score: "850",
    time: "2:45"
  }
};

admin.messaging().sendToDevice(registrationToken, payload)
  .then(function(response) {

    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });

  messaging.getToken()
  .then(function(currentToken) {
    if (currentToken) {
      sendTokenToServer(currentToken);
      updateUIForPushEnabled(currentToken);
    } else {

      console.log('No Instance ID token available. Request permission to generate one.');

      updateUIForPushPermissionRequired();
      setTokenSentToServer(false);
    }
  })
  .catch(function(err) {
    console.log('An error occurred while retrieving token. ', err);
    showToken('Error retrieving Instance ID token. ', err);
    setTokenSentToServer(false);
  });
}

