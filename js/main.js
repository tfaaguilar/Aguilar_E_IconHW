console.log('Javascript is running');

/* this is a JS block comment
let the statements create a variable - a chunk of computer memory that can hold references to data that you want to save. We are storing a reference to an element on the page with this line - we are telling JS to look for the element with the ID we specify inside of the round brackets (the image tag with the ID of bitmapGraphic)

document refers to the index.html page; querySelector is HOW JS uses CSS to select elements on the page
*/

// step 1 - select the elements you want to interact with

let bitmapGraphic = document.querySelector("#bitmapGraphic");

// step 3 - what happens when events are triggered?

function logID() {
    console.log(this.id);
}

// step 2 - how do you want the user to interact with the elemennt?

bitmapGraphic.addEventListener('click', logID);