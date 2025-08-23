import "remixicon/fonts/remixicon.css";

// fixed value
const ourNumber = 12345678911;
const ourDigit = 1234;

const digit = document.getElementById("digit");
const btnLogin = document.getElementById("btn__login");

// step: 1
digit.addEventListener("keyup", function (e) {
  const eValueConvertedNumber = parseInt(e.target.value);
  if (eValueConvertedNumber === ourDigit) {
    btnLogin.removeAttribute("disabled");
    btnLogin.classList.add("login__btn__active");
  } else {
    btnLogin.setAttribute("disabled", true);
    btnLogin.classList.remove("login__btn__active");
  }
});

// step: 2
btnLogin.addEventListener("click", function (e) {
  // e.preventDefault() krsi🙂
  e.preventDefault();

  const mobileNumber = document.getElementById("mobile__number");
  const mobileNumberConverTedInNumber = parseInt(mobileNumber.value);

  if (mobileNumber.value !== "") {
    if (mobileNumberConverTedInNumber === ourNumber) {
      /* debug in console
      console.log(
        "yes matched! redirect to dashboard...",
        mobileNumberConverTedInNumber,
        typeof mobileNumberConverTedInNumber
      );
      */

      // ridirect to dashboard page
      window.location.href = "./src/pages/dashboard.html";
    } else {
      alert("⚠️ Mobile number not matched 🙂📞");
    }
  } else {
    alert("⚠️ Mobile Number is Required");
  }
});
