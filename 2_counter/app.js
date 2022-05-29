
const countVal = document.getElementById('value');
// const count = document.querySelectorAll('#value');            // same result as above
// const btns = document.getElementsByClassName('btn');         // html collection of html elements .
const btns = document.querySelectorAll('.btn');        // same result as above.

// btns[0].addEventListener('click',()=>{
//       var cnt = countVal.innerText;
//       countVal.innerText = cnt -1;
//       if(cnt -1< 0) countVal.style.color = 'red';
// });

// btns[1].addEventListener('click',()=>{
//       countVal.innerText = 0;
//       countVal.style.color = 'blue';
// });

// btns[2].addEventListener('click',()=>{
//       var cnt = countVal.innerText;
//       if(cnt >= 0) countVal.style.color = 'green';
//       countVal.innerText = cnt-1+2;                            // inner text is returned as string .
// });




/* better wayy to do above task     */ 
let count =  countVal.innerText;                
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {   
    //   console.log(e);                                        // event object           
    //   console.log(e.currentTarget);                         // button element (btn)   (element that the event was originally sent to )
      const styles = e.currentTarget.classList;               
      if (styles.contains("decrease")) {
        count--;
      } else if (styles.contains("increase")) {
        count++;
      } else {
        count = 0;
      }
  
      if (count > 0) {
        value.style.color = "green";
      }
      if (count < 0) {
        value.style.color = "red";
      }
      if (count === 0) {
        value.style.color = "#222";
      }
      value.textContent = count;
    });
  });

  /*  An Event object is created automatically by JavaScript on the occurance of an event. 
      It has various properties that provide information about the event such as event type, 
           the position of the cursor at the time the event occured, etc. 
           
      - event.target returns the reference to the object that the event was originally sent to.     

       https://devguru.com/content/technologies/javascript/objects-event.html#:~:text=An%20Event%20object%20is%20created%20automatically%20by%20JavaScript,cursor%20at%20the%20time%20the%20event%20occured%2C%20etc.    */