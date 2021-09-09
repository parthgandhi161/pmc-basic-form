var error = [];

const showpopup = () => {
  let fn = document.getElementById("fn").value;
  let ln = document.getElementById("ln").value;

  var validation = vali();

  var errormessage = " ";

  var element = document.getElementById("overlay");

  element.classList.add("showpop");
  if (validation === true) {
    document.getElementById("iicon").classList.remove("fa-exclamation-circle");
    document.getElementById("iicon").classList.add("fa-check-circle");
    document.getElementById("btn").innerHTML = "Continue";
    document.getElementById(
      "mes"
    ).innerHTML = `Dear ${fn} ${ln}, Our Team will contact you in next 24 hours.`;
  } else {
    error.map((i) => {
      errormessage = errormessage.concat(`${i}<br />`);
    });
    document.getElementById("iicon").classList.remove("fa-check-circle");
    document.getElementById("iicon").classList.add("fa-exclamation-circle");
    document.getElementById("btn").innerHTML = "Retry";
    document.getElementById("mes").innerHTML = errormessage;
  }
};

const closepopup = () => {
  let btnt = document.getElementById("btn").innerHTML;

  if (btnt == "Continue") {
    document.getElementById("fn").value = "";
    document.getElementById("ln").value = "";
    document.getElementById("em").value = "";
    document.getElementById("no").value = "";
    document.getElementById("messa").value = "";
    document.getElementById("c1").checked = false;
    document.getElementById("c2").checked = false;
    document.getElementById("c3").checked = false;
    document.getElementById("c4").checked = false;
  }

  var element = document.getElementById("overlay");
  element.classList.remove("showpop");
};

const vali = () => {
  error = [];
  let fn = document.getElementById("fn").value;
  let ln = document.getElementById("ln").value;
  let em = document.getElementById("em").value;
  let no = document.getElementById("no").value;
  let message = document.getElementById("messa").value;
  let choice1 = document.getElementById("c1").checked;
  let choice2 = document.getElementById("c2").checked;
  let choice3 = document.getElementById("c3").checked;
  let choice4 = document.getElementById("c4").checked;

  if (
    fn == "" ||
    ln == "" ||
    em == "" ||
    no == "" ||
    message == "" ||
    (choice1 == false &&
      choice2 == false &&
      choice3 == false &&
      choice4 == false)
  ) {
    error.push("All Fields are required.");
    return false;
  } else {
    noveri();
    emveri();

    if (error.length == 0) {
      return true;
    } else {
      return false;
    }
  }
};

const noveri = () => {
  let no = document.getElementById("no").value;
  let countregex = /^[0-9]{10}$/;
  let charregex = /^[0-9]*$/;

  let count = countregex.test(no);
  let char = charregex.test(no);

  if (!char) {
    error.push("Phone only contain digits");
  } else if (!count) {
    error.push("Phone must be 10 digits");
  }
};

const emveri = () => {
  let em = document.getElementById("em").value;
  let regexmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexmail.test(em)) {
    error.push("Invalid Email.");
  }
};
