$(document).ready(function () {
  checkAuth();

  $(".login-btn").click(event => {
    event.preventDefault();
    console.log("login btn diklik");
    const username = $("#loginUsername").val();
    const password = $("#loginPassword").val();
    
    $.ajax({
      url: "http://localhost:5001/login",
      method: "POST",
      data: {
        username,
        password
      }
    })
    .done(response => {
      localStorage.access_token = response.access_token;
      checkAuth();
    })
    .fail(err => {
      $(".login-error-msg").text(err.responseJSON.message);
    })

  })

  $("#not-registered-btn").click(event => {
    event.preventDefault();
    $("#login-form").hide();
    $("#register-form").show();
    $(".content").hide();


  })
  
});

function checkAuth(){
  if (!localStorage.access_token) {
    $("#login-form").show();
    $("#register-form").show();
    $(".content").hide();
  }
  else {
    $("#login-form").hide();
    $("#register-form").hide();
    $(".content").show();
  }
}

function onSignIn(googleUser) {
  var id_token = googleUser.getAuthResponse().id_token;
  $.ajax({
    url: "http://localhost:5001/loginGoogle",
    method: "POST",
    data: { id_token }
  })
  .done(response => {
    localStorage.access_token = response.access_token;
  })
  .fail(err => {
    console.log(err);
  })
}