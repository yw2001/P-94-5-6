const firebaseConfig = {
      apiKey: "AIzaSyAuPDFgrZSF46A-E3NPkTssGCeI1ZsHJQc",
      authDomain: "kwitterapp-25930.firebaseapp.com",
      databaseURL: "https://kwitterapp-25930-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-25930",
      storageBucket: "kwitterapp-25930.appspot.com",
      messagingSenderId: "380767064887",
      appId: "1:380767064887:web:50e5fabdba9602eccd00b2"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({

name:user_name,
message:msg,
like:0
            
});

document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;



//End code
      } });  }); }
getData();
