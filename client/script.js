const PORT = 5001
const baseUrl = `http://localhost:${PORT}`

$(document).ready(function() {
  if(localStorage.access_token) {
    $('#login-form').hide();
    $('#register-form').hide();
    $('#navbar').show();
    $('#register-login').hide();
  } else {
    $('#login-form').show();
    $('#register-form').hide();
    $('#navbar').hide();
    $('#register-login').show();
  }
})

$('#register-login').click(function (event) {
  event.preventDefault();
  $('#login-form').hide();
  $('#register-form').show();
  $('#navbar').hide();
  $('#register-login').hide();
})

$('#logout').click(function () {
  localStorage.clear();

  if(localStorage.access_token) {
    $('#login-form').hide();
    $('#register-form').hide();
    $('#navbar').show();
    $('#register-login').hide();
  } else {
    $('#login-form').show();
    $('#register-form').hide();
    $('#navbar').hide();
    $('#register-login').show();
  }
})

$('#login').click(function(event) {
  event.preventDefault();
  const username = $('#username').val();
  const email = $('#email').val();
  const password = $('#password').val()

  $.ajax({
    method: 'POST',
    url: `${baseUrl}/login`,
    data: {
      username,
      email,
      password
    }
  })
    .done(response => {
      localStorage.setItem('access_token', response.access_token)
      $('#login-form').hide()
      $('#register-form').hide()
      $('#register-login').hide()
      $('#navbar').show()
    })
    .fail(err => {})
    .always(() => {
      $('#username').val('')
      $('#email').val('')
      $('#password').val('')
      $('#userCity').val('')
    })
})

$('#register').click(function(event) {
  event.preventDefault()
  const username = $('#username-register').val()
  const email = $('#email-register').val()
  const password = $('#password-register').val()
  const userCity = $('#userCity-register').val()

  $.ajax({
    method: 'POST',
    url: `${baseUrl}/register`,
    data: {
      username,
      email,
      password,
      userCity
    }
  })
    .done(response => {
      $('#login-form').show()
      $('#register-form').hide()
      $('#register-login').hide()
      $('#navbar').hide()
    })
    .fail(err => {})
    .always(() => {
      $('#username').val('')
      $('#email').val('')
      $('#password').val('')
      $('#userCity').val('')
    })
})