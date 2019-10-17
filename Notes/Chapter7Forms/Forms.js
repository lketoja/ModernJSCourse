const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');

//submit event reagoi sekä enterin että napin painamiseen
form.addEventListener('submit', e => {
    //default action is to refresh the page
    e.preventDefault();
    //console.log(username.value);
    //if you use form.username the input tag must have an 
    //attribut called ID OR NAME
    console.log(form.username.value);

});