const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');                 // return element with given id (only a single element can have a given id)
const color = document.getElementsByClassName('color');            // returns array of elements with given class name 

btn.addEventListener('click', ()=>{
       const col = getColor();
       document.body.style.backgroundColor = col;
 
    //    console.log(color);                // html collection 
       color[0].textContent =col;           // as we needed first html element having class color.
});

function getColor(){
       
     let res = '#';
    for(let i=0; i<6; i++){
          res += hex[Math.floor(Math.random() * hex.length)];
    }
    return res;
}