import firebase from "firebase/compat/app";
import 'firebase/compat/database'

var messageRef = firebase.database().ref("messages");

var con = document.getElementById('contact-form');

if(con){
con.addEventListener('submit', SubmitForm);
}

function SubmitForm(e){
    e.preventDefault();
    
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');

  // Save message
  saveMessage(name, email, subject, message);
}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name, email, subject, message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email:email,
        subject:subject,
        message:message
    })
}