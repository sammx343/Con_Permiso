jQuery(document).ready(function($) {
  "use strict";

  //Contact
  $('form.contactForm').submit(function() {
    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    f.children('input').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (! i.is(':checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    f.children('textarea').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });

    //$('#name').val('');
    if (ferror) return false;
    else var str = $(this).serialize();

    console.log(str)
    // $.ajax({
    //   type: "POST",
    //   url: "contactFrom/contactForm.php",
    //   data: str,
    //   success: function(msg) {
    //     // alert(msg);
    //     if (msg == 'OK') {
    //       $("#sendmessage").addClass("show");
    //       $("#errormessage").removeClass("show");
    //       $('.contactForm').find("input, textarea").val("");
    //     } else {
    //       $("#sendmessage").removeClass("show");
    //       $("#errormessage").addClass("show");
    //       $('#errormessage').html(msg);
    //     }
    //
    //   }
    // });

    // $.ajax({
    //   type:"POST",
    //   url: "https://mandrillapp.com/api/1.0/messages/send.json",
    //   data:{
    //     'key': 'bdc5ff8c14956316f1166b1594a5da41-us4',
    //     'message': {
    //       'from_email':'alex.pico.amaya@gmail.com',
    //       'to':[
    //         {
    //           'email': 'naitsabes29@gmail.com',
    //           'name': 'prueba de correo',
    //           'type': 'to'
    //         }
    //       ],
    //       'autotext':'true',
    //       'subject':'prueba de formulario',
    //       'html': str
    //     }
    //   }
    // }).done(function(response) {
    //   console.log(response); // if you're into that sorta thing
    // });

    Email.send({
      SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
      To : 'naitsabes29@gmail.com',
      From : "you@isp.com",
      Subject : "This is the subject",
      Body : "And this is the body"
    }).then(
      message => alert(message)
    );

    return false;
  });

});
