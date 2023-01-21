const regSpecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const regSpace = /\s{2,}/g;
const emailReg =
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const passReg1 = /^(?=.*[a-z])/;
const passReg4 = /^(?=.*[A-Z])/;
const passReg2 = /^(?=.*[0-9])/;
const passReg3 = /^(?=.{8,})/;

function textValidate(element) {
    const textField = $(element);
}
