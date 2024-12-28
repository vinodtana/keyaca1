function handleSubmitForm() {
  console.log("vnod");
  //   var document.getElemetById

  var PRAGYANFUllName = document.getElementById("PRAGYANFUllName").value;
  var PRAGYANMobileNumber = document.getElementById(
    "PRAGYANMobileNumber"
  ).value;
  var PRAGYANEmail = document.getElementById("PRAGYANEmail").value;
  var PRAGYANMessage = document.getElementById("PRAGYANMessage").value;
  var returnF = true;
  if (!PRAGYANFUllName) {
    returnF = false;
    document.getElementById("PRAGYANFUllName").style.borderColor = "red";
  } else {
    document.getElementById("PRAGYANFUllName").style.borderColor = "#ced4da";
  }
  if (!PRAGYANMobileNumber) {
    returnF = false;
    document.getElementById("PRAGYANMobileNumber").style.borderColor = "red";
  } else {
    document.getElementById("PRAGYANMobileNumber").style.borderColor =
      "#ced4da";
  }
  if (!PRAGYANEmail) {
    returnF = false;
    document.getElementById("PRAGYANEmail").style.borderColor = "red";
  } else {
    document.getElementById("PRAGYANEmail").style.borderColor = "#ced4da";
  }
  if (!PRAGYANMessage) {
    returnF = false;
    document.getElementById("PRAGYANMessage").style.borderColor = "red";
  } else {
    document.getElementById("PRAGYANMessage").style.borderColor = "#ced4da";
  }
  console.log("returnF", returnF);
  console.log("PRAGYANFUllName", PRAGYANFUllName);
  console.log("returnF", returnF);
  if (returnF) {
    var bodydata = {
      PRAGYANFUllName,
      PRAGYANMobileNumber,
      PRAGYANEmail,
      PRAGYANMessage,
    };
    mixpanel.track("form_data", bodydata);
    var element = document.getElementById("thankyou-get-to-you");
    element.classList.remove("d-none");
    document.getElementById("PRAGYANFUllName").value = "";
    document.getElementById("PRAGYANMobileNumber").value = "";
    document.getElementById("PRAGYANEmail").value = "";
    document.getElementById("PRAGYANMessage").value = "";
    setTimeout(() => {
      var element = document.getElementById("thankyou-get-to-you");
      element.classList.add("d-none");
      document.getElementById("close-btn-sec-btn-btn").click();
    }, 1000);
  }
  // freshBagsName
  // freshBagsEmail
  // freshBagsMobileNumber
  // LocationName
  // freshBagsRestaurant
  // freshBagsAddress
  // freshBagsMessage
}

function handleSubmitForm1() {
  console.log("vnod");
  //   var document.getElemetById

  var PRAGYANFUllName = document.getElementById("PRAGYANFUllName1").value;
  var PRAGYANMobileNumber = document.getElementById(
    "PRAGYANMobileNumber1"
  ).value;
  var PRAGYANEmail = document.getElementById("PRAGYANEmail1").value;
  var PRAGYANMessage = document.getElementById("PRAGYANMessage1").value;
  var returnF = true;
  if (!PRAGYANFUllName) {
    returnF = false;
    document.getElementById("PRAGYANFUllName1").style.borderColor = "red";
  } else {
    document.getElementById("PRAGYANFUllName1").style.borderColor = "#ced4da";
  }
  if (!PRAGYANMobileNumber) {
    returnF = false;
    document.getElementById("PRAGYANMobileNumber1").style.borderColor = "red";
  } else {
    document.getElementById("PRAGYANMobileNumber1").style.borderColor =
      "#ced4da";
  }
  if (!PRAGYANEmail) {
    returnF = false;
    document.getElementById("PRAGYANEmail1").style.borderColor = "red";
  } else {
    document.getElementById("PRAGYANEmail1").style.borderColor = "#ced4da";
  }
  if (!PRAGYANMessage) {
    returnF = false;
    document.getElementById("PRAGYANMessage1").style.borderColor = "red";
  } else {
    document.getElementById("PRAGYANMessage1").style.borderColor = "#ced4da";
  }
  console.log("returnF", returnF);
  console.log("PRAGYANFUllName1", PRAGYANFUllName);
  console.log("returnF", returnF);
  if (returnF) {
    var bodydata = {
      PRAGYANFUllName,
      PRAGYANMobileNumber,
      PRAGYANEmail,
      PRAGYANMessage,
    };
    mixpanel.track("form_data", bodydata);
    var element = document.getElementById("thankyou-get-to-you1");
    element.classList.remove("d-none");
    document.getElementById("PRAGYANFUllName1").value = "";
    document.getElementById("PRAGYANMobileNumber1").value = "";
    document.getElementById("PRAGYANEmail1").value = "";
    document.getElementById("PRAGYANMessage1").value = "";
    setTimeout(() => {
      var element = document.getElementById("thankyou-get-to-you1");
      element.classList.add("d-none");
    }, 3000);
  }
  // freshBagsName
  // freshBagsEmail
  // freshBagsMobileNumber
  // LocationName
  // freshBagsRestaurant
  // freshBagsAddress
  // freshBagsMessage
}
