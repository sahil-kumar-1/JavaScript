const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/* working with Date object in java script  */

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');          // NOTE : query selector can select element any  with css selector

//  creating and retrieving date and its components

let tempDate = new Date();                     // 
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
// const futureDate = new Date(2022, 5, 22 , 11, 30, 0);          // hard coded after this day if we open our application it will show give away has expired. 
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);     // currrent date + 10 days , to see counter running whenever we open the application.
                                                                              // in real world applications we'll get DATES from Data Base.

console.log(futureDate);

let year = futureDate.getFullYear();
let month = futureDate.getMonth();             // month no as provided while creation
    month = months[month-1];
    console.log(month);
let day = futureDate.getDate();              // day no (date)

let weekDay = futureDate.getDay();              // week day no 
    weekDay = weekdays[weekDay-1];
    console.log(weekDay); 
let hour = futureDate.getHours();
let min = futureDate.getMinutes();
let sec = futureDate.getSeconds();

// changing the giveaway heading 

giveaway.textContent = `giveaway ends on ${weekDay}, ${day} ${month} ${year}, ${hour}pm  ${min}: ${sec} `;


/****************  count down timer  ************/

const futureTime = futureDate.getTime();              // gives date in ms from a fixed standard date(future date)
function getRemaindingTime() {
  const today = new Date().getTime();

  const t = futureTime - today;                    // time remaining in ms
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds                     // converting time remaining in ms into days hours min sec
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
  function format(item) {                                // formating vaues to standard
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
 
  //  updating the count down timer values    
  items.forEach(function (item, index) {             
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);             // stops setInterval 
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);          // browser responsiblity to execute the fn every 1000 ms.
//set initial values
getRemaindingTime();                                            
// we have invoke getRemaindingTime() after setInterval as we'll have no access to countdown (needed in line 97 )if we executed it before.


/*    concepts 
 - Date object     -> date -> year month date day hour min sec ms 
                   -> in ms
 - setInterval(fn, time in ms);
 - clearInterval(..);
*/