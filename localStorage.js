//Setting up local storage for login page
var emailInput = document.getElementById('email-input');
var passwordInput = document.getElementById('password-input');
var auth = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : [];
var tempEmail = localStorage.getItem('temp') || '';


$('#email-signup').val(tempEmail)

// storing input from register-form
$( ".submitButton" ).click(function() {
   
 var email = $('#email-signup').val().trim();
 var password = $('#password-signup').val().trim();
 var confirmPass = $('#confPassword').val().trim();
 var firstName = $('#first_name').val().trim();
 var lastName = $('#last_name').val().trim();

 auth.push({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName
    })
 localStorage.setItem('auth', JSON.stringify(auth))
 
 //letting user know when account is created.
  if(email && password && firstName && lastName){
      if(password.length >= 8){
        if(password === confirmPass){
            $("#account").text("Account Created!")
    }}}else if(password.length < 8){
        $('#account').text('Password must be atleast 8 characters')
    }else if(password !== confirmPass){
        $('#account').text('Confirm Password has to match')
    }
    else{
    $("#account").text("Please input all fields.")
    }
    
});




//Setting up the login page
$('.modal-trigger').click(function() {
    var email = $('#email').val().trim();
    var password = $('#textarea1').val().trim();
    var popPassword = $('.modal-content').html('<h5>Password Incorrect</h5>\n<p>Please try again.</p>')
   
    
     auth.forEach((user, i)=>{
        if(user.email === email){
            if(user.password === password){
                handleReroute()
                return
            }else{
               $('.modal').modal().display(popPassword)
                
            }
        }
        if(i === auth.length-1){
            var popUser = $('.modal-content').html('<h5>Sorry</h5>\n<p>No users found</p>')
            $('.modal').modal().display(popUser)
        }
    })
})
//Homepage sign up click event
$('.signUpButton').click(function(){
var email = $('#email').val().trim();
localStorage.setItem('temp', email);


})
//Reroute user on the login page when information is correct
function handleReroute(){
    window.location.replace('./recipes.html')
  
}

//https://tutorshelpingstudents.slack.com/

