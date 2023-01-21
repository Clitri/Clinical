$(document).ready(function () {
  $("#create_designer").on("submit", function (event) {
    const name = document.forms["create_designer"]["name"];
    const username = document.forms["create_designer"]["username"];
    const n_Number = document.forms["create_designer"]["n_number"];
    const range = document.forms["create_designer"]["range"];
    const major = document.forms["create_designer"]["major"];
    const proficiency = document.forms["create_designer"]["proficiency"];
    const university = document.forms["create_designer"]["university"];
    const organization = document.forms["create_designer"]["organization"];

    const regSpecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const regSpace = /\s{2,}/;
    const regNumber = /^([^0-9]*)$/;
    function isValidIranianNationalCode(input) {
      if (!/^\d{10}$/.test(input)) return false;
      const check = +input[9];
      const sum =
        input
          .split("")
          .slice(0, 9)
          .reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11;
      return sum < 2 ? check === sum : check + sum === 11;
    }

    if (name != undefined) {
      if (name.value === "") {
        event.preventDefault();
        $(name).next(".errors").text("* فیلد نام نمی تواند خالی باشد!");
      } else if (
        regSpecial.test(name.value) ||
        !regNumber.test(name.value) ||
        regSpace.test(name.value)
      ) {
        event.preventDefault();
        $(name).next(".errors").text("* نام وارد شده معتبر نیست!");
      } else {
        $(name).next(".errors").text("");
      }
    }

    if (username != undefined) {
      if (username.value === "") {
        event.preventDefault();
        $(username)
          .next(".errors")
          .text("* فیلد نام خانوادگی نمی تواند خالی باشد!");
      } else if (
        regSpecial.test(username.value) ||
        !regNumber.test(username.value) ||
        regSpace.test(username.value)
      ) {
        event.preventDefault();
        $(username).next(".errors").text("* نام خانوادگی وارد شده معتبر نیست!");
      } else {
        $(username).next(".errors").text("");
      }
    }

    if (n_Number != undefined) {
      if (n_Number.value === "") {
        event.preventDefault();
        $(n_Number).next(".errors").text("* فیلد کدملی نمی تواند خالی باشد!");
      } else if (
        regSpecial.test(n_Number.value) ||
        !isValidIranianNationalCode(n_Number.value)
      ) {
        event.preventDefault();
        $(n_Number).next(".errors").text("* کدملی وارد شده معتبر نیست!");
      } else {
        $(n_Number).next(".errors").text("");
      }
    }

    if (range != undefined) {
      if (range.value === "") {
        event.preventDefault();
        $(range).next(".errors").text("* فیلد مرتبه نمی تواند خالی باشد!");
      } else if (
        !regSpecial.test(range.value) ||
        !regNumber.test(range.value) ||
        regSpace.test(range.value)
      ) {
        event.preventDefault();
        $(range).next(".errors").text("* مرتبه وارد شده معتبر نیست!");
      } else {
        $(range).next(".errors").text("");
      }
    }

    if (major != undefined) {
      if (major.value === "") {
        event.preventDefault();
        $(major).next(".errors").text("* فیلد رشته نمی تواند خالی باشد!");
      } else if (
        regSpecial.test(major.value) ||
        !regNumber.test(major.value) ||
        regSpace.test(major.value)
      ) {
        event.preventDefault();
        $(major).next(".errors").text("* رشته وارد شده معتبر نیست!");
      } else {
        $(major).next(".errors").text("");
      }
    }

    if (proficiency != undefined) {
      if (proficiency.value === "") {
        event.preventDefault();
        $(proficiency).next(".errors").text("* فیلد تخصص نمی تواند خالی باشد!");
      } else if (
        regSpecial.test(proficiency.value) ||
        !regNumber.test(proficiency.value) ||
        regSpace.test(proficiency.value)
      ) {
        event.preventDefault();
        $(proficiency).next(".errors").text("* تخصص وارد شده معتبر نیست!");
      } else {
        $(proficiency).next(".errors").text("");
      }
    }

    if (university != undefined) {
      if (university.value === "") {
        event.preventDefault();
        $(university)
          .next(".errors")
          .text("* فیلد دانشگاه نمی تواند خالی باشد!");
      } else if (
        regSpecial.test(university.value) ||
        !regNumber.test(university.value) ||
        regSpace.test(university.value)
      ) {
        event.preventDefault();
        $(university).next(".errors").text("* دانشگاه وارد شده معتبر نیست!");
      } else {
        $(university).next(".errors").text("");
      }
    }

    if (organization != undefined) {
      if (organization.value === "") {
        event.preventDefault();
        $(organization)
          .next(".errors")
          .text("* فیلد سازمان نمی تواند خالی باشد!");
      } else if (
        regSpecial.test(organization.value) ||
        !regNumber.test(organization.value) ||
        regSpace.test(organization.value)
      ) {
        event.preventDefault();
        $(organization).next(".errors").text("* سازمان وارد شده معتبر نیست!");
      } else {
        $(organization).next(".errors").text("");
      }
    }
  });
});
