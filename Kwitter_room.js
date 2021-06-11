var firebaseConfig = {
    apiKey: "AIzaSyDcfDgdO6qmLD9THV4cojfDwhrJ_zcZ3Po",
    authDomain: "project94-72bd9.firebaseapp.com",
    databaseURL: "https://project94-72bd9-default-rtdb.firebaseio.com",
    projectId: "project94-72bd9",
    storageBucket: "project94-72bd9.appspot.com",
    messagingSenderId: "494880979060",
    appId: "1:494880979060:web:75df1af69ce997ca6fb921"
  };

  firebase.initializeApp(firebaseConfig);

function welcome()
{
    user_name = localStorage.getItem("user_name");
document.getElementById("welcome").innerHTML = user_name +"!";
}