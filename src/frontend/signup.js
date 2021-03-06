const signupUsername = document.querySelector(".signup-name");
const signupEmail = document.querySelector(".signup-email");
const signupPassword = document.querySelector(".signup-password");
const signupRptPassword = document.querySelector(".signup-rpt-password");
const signupPhoneNumber = document.querySelector(".signup-phone-number");
const signupAddress = document.querySelector(".signup-address");
const signupZipCode = document.querySelector(".signup-zip-code");
const signupCity = document.querySelector(".signup-city");
const signupImg = document.querySelector(".signup-picture");

let signupError = "";
let uploadedCreateImg = "";

signupImg.addEventListener("change", (e) => {
  uploadedCreateImg = e.target.files[0];
  console.log(uploadedCreateImg);
});

// send data to backend and create a user
async function createUser() {
  const formData = new FormData();
  formData.append("file", uploadedCreateImg);
  formData.append("fileSize", uploadedCreateImg.size);
  formData.append("name", signupUsername.value);
  formData.append("email", signupEmail.value);
  formData.append("password", signupPassword.value);
  formData.append("rptPassword", signupRptPassword.value);
  formData.append("phoneNumber", signupPhoneNumber.value);
  formData.append("address", signupAddress.value);
  formData.append("zipCode", signupZipCode.value);
  formData.append("city", signupCity.value);

  const response = await fetch(
    "../../src/backend/createUser.php?action=createUser",
    {
      method: "POST",
      body: formData,
    }
  );

  const result = await response.json();
  console.log(result);
  signupError = result;
  if (signupError.length != "") {
    document.querySelector(".signup-error").innerHTML = signupError;
  } else {
    navigateTo("#/login");
  }
}

document.querySelector(".signup-form").addEventListener("submit", (e) => {
  e.preventDefault();
  createUser();
});
