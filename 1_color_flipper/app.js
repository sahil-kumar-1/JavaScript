const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// const  main = document.querySelector('.container'); 
const  color = document.querySelector('.color');              // returns first html element having class color. 
const btn = document.getElementById("btn");

btn.addEventListener('click',function(){
    
    /*   to cahnge color to random color from array   */

    // const randomNo = getRandomNumber();
    // const randomColor = colors[randomNo];
    // console.log(randomColor);
    // document.body.style.backgroundColor = colors[randomNo];
    // color.textContent = randomColor;
    
    // /*    to change color to next color in the array    */
    const nextColor = getNextColor()
    document.body.style.backgroundColor = colors[nextColor];
    color.textContent = colors[nextColor];
});

function getRandomNumber(){
    return Math.floor( Math.random() * colors.length);
}

let i=0;
function getNextColor(){
    i= (i+1)% colors.length;
    return i;

}
