//TODO: Add Your Code Below
window.addEventListener('load', async function() {

//fetch data and set it to a variable
let data = await fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
    return response.json()
});
console.log(data);


//dynamically wrtie some html
const container = this.document.getElementById("container");
let htmlString = "";

container.innerHTML = htmlString;

//this loops through api array and displays it in template literals 
for(let i = 0; i < data.length; i++) {
    htmlString = htmlString + `
    <div class="astronaut">
    <div class="bio">
        <h3>Name: ${data[i].firstName}</h3>
        <ul>
        <li>Hours in space: ${data[i].hoursInSpace}</li>
        <li>Active: ${data[i].active}</li>
        <li>Skills: ${data[i].skills}</li>
        </ul>
    </div>
    <img class="avatar" src=${data[i].picture}>
    </div>
    `
}
container.innerHTML = htmlString;

});