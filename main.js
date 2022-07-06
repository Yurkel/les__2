const userName = prompt("Your name").trim();
const userSurname = prompt("Your surname").trim();
const userEmail = prompt("Your email")
  .trim()
  .toLocaleLowerCase()
  .split(" ")
  .join("");

let messageEmail = `${userEmail}`;

if (!userEmail.includes("@")) {
  messageEmail = `not valid email <b>${userEmail}</b> (symbol @ not exist)`;
} else if (userEmail.startsWith("@")) {
  messageEmail = `not valid email <b>${userEmail}</b> (symbol @ find in first place)`;
} else if (userEmail.endsWith("@")) {
  messageEmail = `not valid email <b>${userEmail}</b> (symbol @ find in last place)`;
}

const userYear = +prompt("Your year of birth").trim().split(" ").join("");
const currentYear = new Date().getFullYear();
const userAge = currentYear - userYear;

document.write(`
<ul>
<li>Full name: ${userName} ${userSurname}</li>
<li>Email: ${messageEmail}</li>
<li>Age: ${userAge}</li>
</ul>`);
