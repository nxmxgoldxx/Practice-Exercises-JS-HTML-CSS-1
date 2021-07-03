// change the background color of the footer to #d7ddf3
var footer = document.querySelector(".contact");
// console.log(background)

footer.style.backgroundColor = "#d7ddf3";
// console.log(footer);

var tagline = document.querySelector(".tagline");
tagline.innerHTML = `We really are starting to understand this,<span class="highlight">now our salary goes up now</span>.`;

var address = document.querySelector("address");
address.style.lineHeight = "1.5em";
address.style.fontSize = "1.75em";
// console.log(address);

//Emphasize the words "every day" in the contact section

var everyDay = document.querySelector("h3");
everyDay.innerHTML = "We are here for you <em>every day</em> of the week!";
// console.log(everyDay);
