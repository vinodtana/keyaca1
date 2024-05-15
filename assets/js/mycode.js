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
    }, 5000);
  }
  // freshBagsName
  // freshBagsEmail
  // freshBagsMobileNumber
  // LocationName
  // freshBagsRestaurant
  // freshBagsAddress
  // freshBagsMessage
}
