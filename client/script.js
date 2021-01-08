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
    $("#content").hide();
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
    }).done(response => {
      $("#registerUsername").val("");
      $("#registerPassword").val("");
      $("#registerEmail").val("");
      checkAuth();
    }).fail(err => {
      $(".register-error-msg").text("")
      console.log(err);
      err.responseJSON.messages.forEach(e => {
        console.log(e);
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

  $(".add-city-btn").click(event => {
    event.preventDefault();
    $("#add-city-form").show();
  })

  $("#cancel-add-city-btn").click(event => {
    event.preventDefault();
    $("#add-city-form").hide();
  })

  $("#add-city-form-btn").click(event => {
    event.preventDefault();
    const cityName = $("#cityName").val();
    const cityDesc = $("#cityDesc").val();
    console.log("tambah kota!", cityName, cityDesc);
    $.ajax({
      url: "http://localhost:5001/wishlists",
      method: "POST",
      headers: {
        access_token: localStorage.access_token
      },
      data: {
        name: cityName,
        description: cityDesc
      }
    })
    .done(response => {
      console.log(response);
      checkAuth();
    })
    .fail(err => {
      console.log(err);
    })

  })
  
});

function checkAuth(){
  if (!localStorage.access_token) {
    $("nav").hide();
    $("#login-form").show();
    $("#register-form").hide();
    $("#content").hide();
    $("#add-city-form").hide();
  }
  else {
    $("nav").show();
    getWishList()
    $("#login-form").hide();
    $("#register-form").hide();
    $("#content").show();
    $(".page-title").show();
    $("#add-city-form").hide();
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

function getWishList() {
  // $.ajax({
  //   url: "http://localhost:5001/wishlists",
  //   method: "GET",
  //   headers: {
  //     access_token: localStorage.access_token
  //   }
  // })
  //   .done(response => {
  //     console.log(response);
  //   })
  //   .fail(error => {
  //     console.log(error)
  //   })
  //   .always(() => {
  //     $('#login-form').hide();
  //     $('#register-form').hide();
  //     $('#content').show();
  //   })
}
