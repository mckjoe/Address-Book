var Contact = function(firstName, lastName, telephoneNumber, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.telephoneNumber = telephoneNumber;
  this.address = address;
}


$(document).ready(function() {
  $("#personInput").submit(function(event) {
    event.preventDefault();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var telephoneNumber = $("#telephoneNumber").val();
    var address = $("#address").val();
    var newContact = new Contact(firstName, lastName, telephoneNumber, address);
    console.log(newContact);
  });
});
