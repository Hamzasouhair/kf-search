// KF Panda Search

// Button Event listener
doncument.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //input
  let name = document.getElementById("char-in").value;

  // if statement - Test the input
  if (name === "po") {
    document.getElemnentById("char-name").innerHTML = "Po";
  } else if (name === "Tigress") {
    console.log("yes, tigress is a KF Panda charecter");
  } else if (name === "Tigress") {
    console.log("yes, tigress is a KF Panda charecter");
  } else if (name === "Mantis") {
    console.log("yes MAntis is a KF panda charecter");
  } else if (name === "monkey") {
    console.log("yes, monkey is a KF Panda charecter");
  } else {
    console.log("?");
  }
} 