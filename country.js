let countryContainer = document.querySelector(".country-container");
let countryName = document.querySelector("#country-name");
let btn = document.querySelector("button");
let container = document.querySelector(".whole-data-container");
let wholeDataContainer = document.querySelector(".whole-data-container");

btn.addEventListener("click", () => {
fetch(`https://restcountries.com/v3.1/name/${countryName.value}`)
    .then(respond => respond.json())
    .then(data => {
        let wholeData = `
        <h2 class="country-common-name">${data[0].name.common}</h2>
        <h2 class="full-country-name"><span>Country Official Name:</span>${data[0].name.official}</h2>
        <p class="country-borders"><span>Borders:</span>${data[0].borders}</p>
        <p class="population"><span>Population:</span>${data[0].population}</p>
        <p class="country-capital"><span>Capital:</span>${data[0].capital}</p>
        <p class="country-area"><span>Area:</span>${data[0].area}</p>
        <p class="country-region"><span>Region:</span>${data[0].region}</p>
        <img src="${data[0].flags.png}" class="country-flag"/>`;
        wholeDataContainer.innerHTML = wholeData;
        wholeDataContainer.classList.add("padd-container");
        countryName.value = "";
    })
});