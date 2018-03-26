var Contact = function(firstName, lastName, telephoneNumber, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.telephoneNumber = telephoneNumber;
  this.address = address;
}

Contact.prototype.name = function(firstName, lastName) {
  return this.lastName + ", " + this.firstName;
}

$(document).ready(function() {
  $("#personInput").submit(function(event) {
    event.preventDefault();
    $(".contactNameDisplay").show();
    $("#temporary").hide();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var telephoneNumber = $("#telephoneNumber").val();
    var address = $("#address").val();
    var newContact = new Contact(firstName, lastName, telephoneNumber, address);
    var displayName = newContact.name(firstName, lastName);
    $("#contacts").append("<li>" + lastName + "</li>");
    $("li").last().click(function() {
      $("#contactInfo h3").text(displayName);
      $("#contactInfo h5").text(telephoneNumber);
      $("#contactInfo h5#last").text(address);
      $("#contactInfo").show();
    });
    $("#call").click(function() {
      $(".disapear").hide();
      $(".calling").show();
    });
    $("#sendLetter").click(function() {
      alert("oops, sorry!  That button is not set up yet!")
    });
  });
});
