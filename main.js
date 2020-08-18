function toggleMobileMenu() {
  document.querySelector("#menu").classList.toggle("active");
  document.querySelector(".toggle").classList.toggle("active");
}
function validate() {
  var x = document.getElementById("input-1").value;

  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");
  if (x == "") {
    alert(" please Enter your Email");
  } else if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= x.length
  )
   {
    alert("please enter valid email");
  } else {
    console.log(document.getElementById("input-1").value);
  }
}

function validate2() {
  var y = document.getElementById("input-2").value;

  var atposition = y.indexOf("@");
  var dotposition = y.lastIndexOf(".");
  if (y == "") {
    alert(" please Enter your Email");
  } else if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= y.length
  ) {
    alert("Email must be  valid");
  } else {
    console.log(document.getElementById("input-2").value);
  }
}
function validate3() {
  var x = document.getElementById("input-3").value;
  if (x == "") {
    alert("Name must be  given");
  } else {
    console.log(document.getElementById("input-3").value);
  }
  var y = document.getElementById("input-4").value;
  if (y == "") {
    alert("Email must be  given");
  } else {
    console.log(document.getElementById("input-4").value);
  }
  var z = document.getElementById("input-5").value;
  if (z == "") {
    alert("Description must be  given");
  } else {
    console.log(document.getElementById("input-5").value);
  }
}
function validate4() {
  var x = document.getElementById("input-6").value;
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");
  if (x == "") {
    alert("please Enter your Email");
  } else if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= x.length
  ) {
    alert("please check your Email");
  } else {
    console.log(document.getElementById("input-6").value);
  }
}
