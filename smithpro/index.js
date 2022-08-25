const form = document.querySelector("form");
const firstName = document.querySelector("#Fname");
const lastName = document.querySelector("#Lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const college = "https://www.virginia.edu/";
form.addEventListener(
  "submit",
  async function (e) {
    e.preventDefault();
    const fNameInfo = firstName.value;
    const LNameInfo = lastName.value;
    const emailInfo = email.value;
    const passwordInfo = password.value;
    alert(
      `First name is: ${fNameInfo} --- Last name is: ${LNameInfo} -- Email: ${emailInfo} -- Password: ${passwordInfo}`
    );
    window.location = college;
  },
  false
);
