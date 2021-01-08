

$(document).ready(function () {
  checkAuth();

  $(".login-btn").click(event => {
    event.preventDefault();
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
      $("#loginUsername").val("")
      $("#loginPassword").val("");
      localStorage.access_token = response.access_token;
      checkAuth();
    })
    .fail(err => {
      $(".login-error-msg").text(err.responseJSON.message);
    })

  })

  $("#not-registered-btn").click(event => {
    event.preventDefault();

    $.ajax({
      url: "http://localhost:5001/getCity",
      method: "GET"
    })

    .done(response => {
      $("#registerCity").html("")
      response.forEach(city => {
        $("#registerCity").append(`
        <option value="${city}">${city}</option>
        `)
      })
    })
    .fail(err => {
      console.log(err);
    })

    $("#login-form").hide();
    $("#register-form").show();
    $(".content").hide();
  })

  $(".register-btn").click(function(event){
    event.preventDefault();
    const username = $("#registerUsername").val();
    const password = $("#registerPassword").val();
    const email = $("#registerEmail").val();
    const userCity = $("#registerCity").val();
    // console.log(username, password, email, userCity);

    $.ajax({
      url: "http://localhost:5001/register",
      method: "POST",
      data: {
        username,
        password,
        email,
        userCity
      }
    }).then(response => {
      $("#registerUsername").val("");
      $("#registerPassword").val("");
      $("#registerEmail").val("");
      checkAuth();
    }).catch(err => {
      $(".register-error-msg").text("")
      console.log(err);
      err.responseJSON.message.forEach(e => {
        $(".register-error-msg").append(`<p>${e}</p>`);
      })
    })
  })

  $("#logout-btn").click(function(event){
    event.preventDefault();
    localStorage.clear();
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    checkAuth();

  })
  
});

function checkAuth(){
  if (!localStorage.access_token) {
    $("#login-form").show();
    $("#register-form").hide();
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
    checkAuth();
    
  })
  .fail(err => {
    console.log(err);
  })
}