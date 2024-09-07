var form = document.getElementById("resume-form");
var outputForm = document.getElementById("resume-output");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;
    var skill = document.getElementById("skill")
        .value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    outputForm.innerHTML = "\n    <h2>".concat(name, "</h2> \n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Contact:</strong> ").concat(contact, "</p>\n    <p><strong>Address:</strong> ").concat(address, "</p>\n    <h3>Skills</h3>\n    <p>").concat(skill, "</p>\n    <h3>Eduation</h3>\n    <p>").concat(education, "</p>\n    <h3>Experiece</h3>\n    <p>").concat(experience, "</p>\n    ");
});
