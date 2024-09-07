const form = document.getElementById("resume-form")as HTMLFormElement;
const outputForm = document.getElementById("resume-output") as HTMLDivElement;
form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const contact = (document.getElementById("contact") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLTextAreaElement).value;
    const skill = (document.getElementById("skill") as HTMLTextAreaElement)
        .value;
    const education = (
        document.getElementById("education") as HTMLTextAreaElement
    ).value;
    
    const experience = (
        document.getElementById("experience") as HTMLTextAreaElement
    ).value;

    outputForm.innerHTML = `
    <h2>${name}</h2> 
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Contact:</strong> ${contact}</p>
    <p><strong>Address:</strong> ${address}</p>
    <h3>Skills</h3>
    <p>${skill}</p>
    <h3>Eduation</h3>
    <p>${education}</p>
    <h3>Experiece</h3>
    <p>${experience}</p>
    `;


});
