function bevoBtn() {
    alert("The live mascot at UT is Bevo the longhorn!");
}
let name1 = prompt('Enter your name:')


name1 = `<span class="customize">${name1}</span>`

let insert = `Howdy ${name1}! Welcome to`

let story = `${insert}`

let madLibOutputDiv = document.getElementById('name')

madLibOutputDiv.innerHTML = `<div class = "story">${story}<div>`