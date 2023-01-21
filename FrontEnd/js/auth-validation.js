window.addEventListener("load", function () {
  const form = $("form");
  form.on("submit", authValidation);

  $(".show_pass").on("click", function (evnet) {
    if ($(this).siblings("input").attr("type") == "text") {
      $(this).siblings("input").prop("type", "password");
      $(this).toggleClass("fa-eye");
      $(this).toggleClass("fa-eye-slash");
    } else {
      $(this).siblings("input").prop("type", "text");
      $(this).toggleClass("fa-eye");
      $(this).toggleClass("fa-eye-slash");
    }
  });

  function authValidation(event) {
    const username = $("#user-field");
    const email = $("#email-field");
    const password = $("#pass-field");
    const confPass = $("#conf-pass-field");

    const username_error = $("#user-error");
    const email_error = $("#email-error");
    const password_error = $("#pass-error");
    const confPass_error = $("#conf-pass-error");

    const usernameReg = new RegExp(
      "^[a-zA-Z0-9](_(?!(.|_))|.(?!(_|.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$"
    );
    const regSpecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const regSpace = /\s{2,}/g;
    const emailReg =
      /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const passReg1 = /^(?=.*[a-z])/;
    const passReg4 = /^(?=.*[A-Z])/;
    const passReg2 = /^(?=.*[0-9])/;
    const passReg3 = /^(?=.{8,})/;
    // /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (username.length >= 1) {
      if (username.val() == "") {
        event.preventDefault();
        username_error.text("* نام کاربری نمی تواند خالی باشد!");
      } else if (
        regSpace.test(username.val()) ||
        regSpecial.test(username.val())
      ) {
        event.preventDefault();
        username_error.text("* نام کاربری وارد شده معتبر نیست!");
      } else {
        username_error.text("");
      }
    }

    if (email.length >= 1) {
      if (!emailReg.test(email.val())) {
        event.preventDefault();
        email_error.text("* ایمیل وارد شده معتبر نمی باشد!");
      } else {
        email_error.text("");
      }
    }

    if (password.length >= 1) {
      if (!password.parents(".login")) {
        if (!passReg1.test(password.val()) && !passReg4.test(password.val())) {
          event.preventDefault();
          password_error.text(
            "* رمزعبور وارد شده باید حداقل دارای یک حرف باشد!"
          );
        } else if (!passReg2.test(password.val())) {
          event.preventDefault();
          password_error.text(
            "* رمزعبور وارد شده باید حداقل دارای یک عدد باشد!"
          );
        } else if (!passReg3.test(password.val())) {
          event.preventDefault();
          password_error.text("* رمزعبور وارد شده باید حداقل 8 کاراکتر باشد!");
        } else {
          password_error.text("");
        }
      }
    }

    if (confPass.length >= 1) {
      if (!passReg1.test(confPass.val()) && !passReg4.test(confPass.val())) {
        event.preventDefault();
        confPass_error.text(
          "* تکرار رمزعبور وارد شده باید حداقل دارای یک حرف باشد!"
        );
      } else if (!passReg2.test(confPass.val())) {
        event.preventDefault();
        confPass_error.text(
          "* تکرار رمزعبور وارد شده باید حداقل دارای یک عدد باشد!"
        );
      } else if (!passReg3.test(confPass.val())) {
        event.preventDefault();
        confPass_error.text(
          "* تکرار رمزعبور وارد شده باید حداقل 8 کاراکتر باشد!"
        );
      } else if (confPass.val() !== password.val()) {
        event.preventDefault();
        confPass_error.text("* تکرار رمزعبور با رمزعبور وارد شده یکسان نیست!");
      } else {
        confPass_error.text("");
      }
    }
  }
});
