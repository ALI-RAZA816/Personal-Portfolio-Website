$(function(){
  
  'use strict';
  
 // initiate animated library 
  AOS.init();
  
  // typing text jquery plugin
  var typed = new Typed('.typedText', {
    strings: ['Web Developer','Web Designer','Freelancer'],
    typeSpeed: 100,
    backspeed:4000,
    backDelay: 4000,
    loop:true
  });

  // fixed header bar on scroll
  $(window).scroll(function(){

    if(pageYOffset >= 20){
        $('#header').addClass('active');
        $('#header .navbar #logoImg').attr('src','./assests/img/white-logo.PNG');
        return true;
      }
      $('#header').removeClass('active');
      $('#header .navbar #logoImg').attr('src','./assests/img/green-logo.PNG');
      return false;
    });
    
    $('#header .navbar .navbar-toggler-icon').on('click',function(){
      if($('#myNavbar').has('.show')){
        $('#header').addClass('active');
        $('#header .navbar #logoImg').attr('src','./assests/img/white-logo.PNG');
        return true;
      }
      $('#header').removeClass('active');
      $('#header .navbar #logoImg').attr('src','./assests/img/green-logo.PNG');
      return false;
  });

  // form validation on click if the field is empty
  $('#form-container #form #SubmitBtn').on('click',(e)=>{
    //stop refresh page after click
    e.preventDefault();

    var form = $('#form-container #form .form-group');
    var nameField = $('#form-container #form .form-group #nameField');
    var nameval = nameField.val();
    var emailField = $('#form-container #form .form-group #emailField');
    var emailval = emailField.val();
    var subjectField = $('#form-container #form .form-group #subjectField');
    var subjectval = subjectField.val();
    var msgField = $('#form-container #form .form-group #msgField');
    var msgval = msgField.val();
    
    if(!nameval){
      nameField.addClass('is-invalid');
      form.find('.nameErr').css({"display":"block"});
      form.find('.nameErr').addClass('invalid-feedback');
      return false;
    }

    if(!emailval){
      emailField.addClass('is-invalid');
      form.find('.emailErr').css({"display":"block"});
      form.find('.emailErr').addClass('invalid-feedback');
      return false;
    }

    if(!subjectval){
      subjectField.addClass('is-invalid');
      form.find('.subjectErr').css({"display":"block"});
      form.find('.subjectErr').addClass('invalid-feedback');
      return false;
    }
    if(!msgval){
      msgField.addClass('is-invalid');
      form.find('.msgErr').css({"display":"block"});
      form.find('.msgErr').addClass('invalid-feedback');
      return false;
    }

  });

  var form = $('#form-container #form .form-group');
  var nameField = $('#form-container #form .form-group #nameField');
  var emailField = $('#form-container #form .form-group #emailField');
  var subjectField = $('#form-container #form .form-group #subjectField');
  var msgField = $('#form-container #form .form-group #msgField');

  // check form validation by type data on fields
  nameField.on('input',function(){

    if(nameField.val().length < 0 || nameField.val().length <= 5){
      nameField.addClass('is-invalid');
      form.find('.nameErr').css({"display":"block"});
      form.find('.nameErr').addClass('invalid-feedback');
      form.find('.nameErr').html('Name must be 5 character long.');
      return false;
    }
    else if(!nameField.val().match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){

      nameField.addClass('is-invalid');
      form.find('.nameErr').css({"display":"block"});
      form.find('.nameErr').addClass('invalid-feedback');
      form.find('.nameErr').html('Write full name by adding space.');
      return false;
    }
    nameField.removeClass('is-invalid');
    nameField.addClass('is-valid');
    form.find('.nameErr').css({"display":"none"});
    return true;

  });

  emailField.on('input',function(){
    if(emailField.val().length <=15){
      emailField.addClass('is-invalid');
      form.find('.emailErr').css({"display":"block"});
      form.find('.emailErr').addClass('invalid-feedback');
      form.find('.emailErr').html('Write full email.');
      return false;
    }
    else if(!emailField.val().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
      emailField.addClass('is-invalid');
      form.find('.emailErr').css({"display":"block"});
      form.find('.emailErr').addClass('invalid-feedback');
      form.find('.emailErr').html('Invalid email');
      return false;
    }
    emailField.addClass('is-valid');
    emailField.removeClass('is-invalid');
    form.find('.emailErr').css({"display":"none"});
    return true;
  });

  subjectField.on('input',function(){
    if(subjectField.val().length <= 5){
      subjectField.addClass('is-invalid');
      form.find('.subjectErr').css({"display":"block"});
      form.find('.subjectErr').addClass('invalid-feedback');
      form.find('.subjectErr').html('Choose correct subject name.');
      return false;
    }
    subjectField.addClass('is-valid');
    subjectField.removeClass('is-invalid');
    form.find('.subjectErr').css({"display":"none"});
    return true;
  });

  msgField.on('input',function(){
    if(msgField.val().length <= 0){
      msgField.removeClass('is-valid');
      return false;
    }
    msgField.addClass('is-valid');
    return true;
  });
});
