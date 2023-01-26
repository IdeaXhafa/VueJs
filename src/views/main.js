import firebase from "firebase/compat";

var messageRef = firebase.database().ref("messages");

var con = document.getElementById('contact-form');

if(con){
test.addEventListener('submit', SubmitForm);
}

function SubmitForm(e){
    e.preventDefault();
    
    var name = getInputValues("name");
    var email = getInputValues("email");
    var subject = getInputValues("subject");
    var message = getInputValues("message");

    saveMessage(name,email,subject,message);
}

function getInputValues(id){
    return document.getElementById(id).value;
}

function saveMessage(name,email,subject,message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        subject:subject,
        message:message
    })
}