//  theory 
// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport( user visible area).
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
// offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();          // date id global object 


// ********** close links ************
const toggle_btn = document.querySelector('.nav-toggle');
const links_container = document.querySelector('.links-container');
const links = document.querySelector('.links');

toggle_btn.addEventListener('click', ()=>{
    // links_container.classList.toggle('show-links');                              // has a down side discussed in last.
    const links_container_height = links_container.getBoundingClientRect().height;
    const links_height = links.getBoundingClientRect().height;
    
    if(links_container_height===0){
        // console.log(links_container);
        // console.log(links_height);

        links_container.style.height = `${links_height}px`;               // dont forget to add pixel
    }
    else{
        links_container.style.height = 0;
    }
});


// ********** fixed navbar ************
const nav_bar = document.getElementById('nav');
const top_link = document.querySelector('.top-link');
window.addEventListener('scroll', ()=>{
    
    const links_height = links.getBoundingClientRect().height;
    // console.log(window.pageYOffset);                // px that has been scroled. 
    
    let scroll_height = window.pageYOffset;                 
    if(scroll_height > links_height){                                       // fix nav-bar.
        nav_bar.classList.add('fixed-nav');
    }
    else  nav_bar.classList.add('fixed-nav');

    if(scroll_height >= 500) { top_link.classList.add('show-link');}             //  show/ hide top link
    else{ top_link.classList.remove('show-link');}


});


// ********** smooth scroll ************      // setting scroll-behavior: smooth; (css) does the job but scrolls to anywhere of target element
                                            // we want to scroll to top position of that element (also for smaller screen it wold be good to hide the nav bar for better view)
                                         
const scrollLinks = document.querySelectorAll('.scroll-link');     
scrollLinks.forEach((link)=>{
    link.addEventListener('click', (e)=>{
        // to prevent default behaviour  
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);                    // (#home)slice(1) = home
        const element = document.getElementById(id);
        
        //  directly jumping to pos will scroll that pos but the nav bar will hide some part of target element

        let navBarHeight = nav_bar.getBoundingClientRect().height;
        let containerHeight = links_container.getBoundingClientRect().height;
        let isNavBarFixed = nav_bar.classList.contains('fixed-nav');              // true/false -> if not fixed
        
        let top_pos = element.offsetTop - navBarHeight;                            // top pos in pixel wrt start of page.
        console.log(element.offsetTop);

        if(!isNavBarFixed){
            top_pos = top_pos - navBarHeight;          // ?????   (Note to change heigth always console log the height in different senarios and then calculate the net pixel to scroll)
        }

        if(navBarHeight > 82){                         // in small screen (fixed side bar link-container)  will also be scrolled     // as when scrolled navbar container is removed from the flow but it has already contributed to previously calculated height.
            top_pos = top_pos + containerHeight;
        }
        window.scrollTo({
            left:0,
            top: top_pos
        });

        links_container.style.height=0;             // hiding nav bar 
        
    });
});                                       

// select links

/*    down side of toggling class to hide show nav bar links 
    - suppose we have hight of 200px 
    - suppose currently we're having 4 links which fits into the heigth 200px
    - but if the no of links changes to 6 or 7 dynamically then either there will be overflow (which may or may not be shown) 
    
    - i.e why we use Element.getBoundingClientRect();
    */ 