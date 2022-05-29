/*  task 4 : if toogle button on right side of nav bar is clicked -> show the links if hiddden || hide the list if visible  */


// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const links = document.querySelector('.links');
const btn = document.querySelector('.nav-toggle');

btn.addEventListener('click', ()=>{
      links.classList.toggle('show-links');

    // console.log(links.classList);
    // console.log(links.classList.contains("random"));
    // console.log(links.classList.contains("links"));
    // if (links.classList.contains("show-links")) {
    //   links.classList.remove("show-links");
    // } else {
    //   links.classList.add("show-links");
    // }
});