const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const section_center = document.querySelector('.section-center');

// adding menu items 
window.addEventListener('DOMContentLoaded', ()=>{
      create_menu_items(menu);       // adding menu items

      // extracting all catergories from menu[] to create button for.
      
      // create buttons dynamically for categories in menu. 
      create_btns();

      // filtering the menu  
      filter_menu_items(menu);          // filtering menu items
});
/* NOTE : as the buttons have been added dynamically  -> we need to selecct them to add event listner after we have finished adding buttons dynamically*/
/* reduce takes 2 parameter
    1. functoin(values, item) : to apply on each element(item) of array (menu)
    2. [] is same values in which return values of fn is stored.
    after applying function on each array element array of reeturn values [] or values is returned by reduce method
    
  */

// NOTE : data set property 
// filtering menu items using data set ( on an element we can add an attribute with prefix data- ).  //  eg <div data-orange = "green"> ... </div> // we have defined our own attribute ( which we can access in JS in form of object ).
// in java script we can access that data set object //  element.dataset.orange; 

function create_btns(){
      const categories = menu.reduce(         
        function(values, item){
          if(!values.includes(item.category))
            values.push(item.category)
          return values;
        },["all"]) ;                           // [] = values

        // console.log(categories);
        const category_btns = categories.map(function(category){
            return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`;
        }).join("");                         // chaining join

        btn_container = document.querySelector('.btn-container');
        btn_container.innerHTML = category_btns;
        console.log(category_btns );
}
function filter_menu_items(menu){
    const filter_btn = document.querySelectorAll('.filter-btn');
    filter_btn.forEach((btn)=>{
            btn.addEventListener('click',(e)=>{
                  const category = e.currentTarget.dataset.id;       // as data-id is data set of element
                  if(category=='all') create_menu_items(menu);
                  else{
                          let newMenu = menu.filter((item)=>{
                              if(item.category == category){
                                return item;
                              }
                          });
                          create_menu_items(newMenu);
                  }
            });
    });

}


function create_menu_items(menuItems){
  //  console.log(menuItems);
   let child = menuItems.map(function(item){
    // console.log(item);     
    return`<article class="menu-item">
          <img src=${item.img} alt="menu item" class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
   });
  // console.log(child);
   const display_menu = child.join("");              // joins all array item with empty string in between. 
  //  console.log(section_center);
   section_center.innerHTML = display_menu;
}

/*        concepts covered   
  
  - dataset property 
  - updating menu
  - filtering menu
  - inserting daynamic content    `this is way ${item.price}`
  - changing innerHTML ( changing / editing child elements)
 
*/