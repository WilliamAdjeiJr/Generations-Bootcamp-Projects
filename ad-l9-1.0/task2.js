function getFormvalue() {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the form element
    var form = document.getElementById("form1");

    // Get the values of the first name and last name inputs
    var firstName = form.elements["fname"].value;
    var lastName = form.elements["lname"].value;

    // Print the values to the console
    console.log("First name: " + firstName);
    console.log("Last name: " + lastName);
}
