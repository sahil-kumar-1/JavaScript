/*  https://www.w3docs.com/learn-javascript/bubbling-and-capturing.html#:~:text=%20JavaScript%20Event%20Bubbling%20and%20Capturing%20%201,rarely%20used%20but%20can%20be%20useful...%20More%20

event bubbling  -> The principle of bubbling is simple. Whenever an event occurs on an element, at first place it will run the handler on it, then its parent, then on other ancestors
                -> event on parent works for child too  (as we click on children the actual event will bubble up )
*/

// .about > (.btn-container > .tab-btn) + ( .about-content > .content)
const about = document.querySelector('.about');                   
const btns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

about.addEventListener('click', (e)=>{
    //    console.log(e.target);                           // returns object to which event is dispached      <---  event bubbling 
    //    console.log(e.currentTarget);                           // returns object whose event listener is currently being invoked

       id = e.target.dataset.id;                   // id is set to buttons only so for content it will be undefined
       if(id){
            
        // remove selected (active class) from other buttons except clicked one.
            btns.forEach((btn)=>{
                 btn.classList.remove('active');
            });
            e.target.classList.add('active');
        
        // show corresponding content to button clicked and hide other. 
            contents.forEach((content)=>{
                 content.classList.remove('active')
            });

            const activeContent = document.getElementById(id);
            activeContent.classList.add('active');
       }
});
