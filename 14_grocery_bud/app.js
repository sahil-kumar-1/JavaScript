// ****** select items **********/ 
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");                                   // <p> intended to show alert message (insertrd / deleted / cleared)
const grocery = document.getElementById("grocery");                              // i/p box line index.html line 22 (user i/p)
const submitBtn = document.querySelector(".submit-btn");                        //  line index.html line 23 -> intended to add/edit(when editflag =true) an item

const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");                         
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;                      
let editID = "";
// ****** event listeners **********

// submit form
form.addEventListener("submit", addItem);
// clear list
clearBtn.addEventListener("click", clearItems);
// display items onload
window.addEventListener("DOMContentLoaded", setupItems);          // when DOM loades create grocery list from local storage.

// ****** functions **********

// add item
function addItem(e) {                                /* callBack functoin to form - submit eventlistner */
    e.preventDefault();
    const value = grocery.value;                                     // user i/p value  (undefined if none)
    const id = new Date().getTime().toString();                     // date in ms used for id of grocery item to add.

    if (value !== "" && !editFlag) {                               /* user i/p not undefined && not edit     --> add new grocery item       */
        
        const element = document.createElement("article");        // new htm element.
        let attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);                         // setting attribute of an element.
        element.classList.add("grocery-item");                  
        element.innerHTML = `<p class="title">${value}</p>
                <div class="btn-container">
                <!-- edit btn -->
                <button type="button" class="edit-btn">
                    <i class="fas fa-edit"></i>
                </button>
                <!-- delete btn -->
                <button type="button" class="delete-btn">
                    <i class="fas fa-trash"></i>
                </button>
                </div>
            `;                                                               //we coulld have used event bubbling on parent 
        // add event listeners to both buttons;                             // adding event listner by targetting the elements (we are adding event listner here as edit and delete buttons will not be accessable else where)
        const deleteBtn = element.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", deleteItem);
        const editBtn = element.querySelector(".edit-btn");
        editBtn.addEventListener("click", editItem);

                // append child
        list.appendChild(element);                                      // adding element( grocery item) as child of lsit element (grocery list) 
                // display alert
        displayAlert("item added to the list", "success");        
                // show container
        container.classList.add("show-container");
                // set local storage
        addToLocalStorage(id, value);                                // adding item to local storage
                // set back to default
        setBackToDefault();                                         // so user sees default view after adding item
    } 
    else if (value !== "" && editFlag) {           /* user i/p not undefined && edit     --> update existing  grocery item ( editElement )   */
        editElement.innerHTML = value;
        displayAlert("value changed", "success");

                // edit  local storage
        editLocalStorage(editID, value);
        setBackToDefault();
    } 
    else {                                                  /* user doesn't i/p anything and clicked on submitt  */
        displayAlert("please enter value", "danger");
    }
}

/*        display alert   */
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);        // class to change color and BGC of paragraph (alert element)
            // remove alert
    setTimeout(function () {                      //  to clear alert message after 1 sec. 
            alert.textContent = "";
            alert.classList.remove(`alert-${action}`);
    }, 1000);
}

/*          clear items    */
function clearItems() {                                             /* callBack fn to clear items button eventListner line 20 */
    const items = document.querySelectorAll(".grocery-item");
    if (items.length > 0) {
        items.forEach(function (item) {                     
        list.removeChild(item);                           // remove all grocery items from grocery list
        });
    }
    container.classList.remove("show-container");        // 0 grocery item ,hide grocery container ( grocery items + clear all btn)
    displayAlert("empty list", "danger");              
    setBackToDefault();
    localStorage.removeItem("list");
}

/*         delete item         */
function deleteItem(e) {                                                  /* callBack fn to delete button eventListner ( in single grocery item) line 53*/
    const element = e.currentTarget.parentElement.parentElement;       // (list) grocery-list > grocery-item > btn-container > delete-btn
    const id = element.dataset.id;

    list.removeChild(element);

    if (list.children.length === 0) {
        container.classList.remove("show-container");                // 0 grocery item ,hide grocery container ( grocery items + clear all btn)
    }
    displayAlert("item removed", "danger");

    setBackToDefault();
        // remove from local storage
    removeFromLocalStorage(id);
}

/*                      edit item          */
function editItem(e) {                                               /* callBack fn to edit button eventListner ( in single grocery item) line 55*/ 
    const element = e.currentTarget.parentElement.parentElement;        // grocery-item
        // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;        
        // set form value
    grocery.value = editElement.innerHTML;       // show existing value to edit in i/p box
    editFlag = true;                            // set editFlag
    editID = element.dataset.id;               // set editID
    //
    submitBtn.textContent = "edit";          // change btn name to edit.
}
// set backt to defaults
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}



// ***********************************************************     local storage *******************************************


// add to local storage           
function addToLocalStorage(id, value) {                     // short hand for (id:id,value:value)       // as both lsh and rhs have same name
    const grocery = { id, value };
    let items = getLocalStorage();                          // some kind of array
    // console.log(items);
    items.push(grocery);                                  // push grocery in array
    localStorage.setItem("list", JSON.stringify(items)); // update array in localStorage.
}

function getLocalStorage() {                                   // {key=list, value= array}
    return localStorage.getItem("list")
        ? JSON.parse(localStorage.getItem("list"))
        : [];                                                 // if we have (some kind of array)item named list in localStorage return it else return empty array.
}

function removeFromLocalStorage(id) {                 // delete array element with given id.
    let items = getLocalStorage();
    items = items.filter(function (item) {
        if (item.id !== id) {
            return item;
        }
    });
    localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items = items.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list", JSON.stringify(items));
}

// SETUP LOCALSTORAGE.REMOVEITEM('LIST');

// ****** setup items **********

function setupItems() {                       /* callBack fn on window DOMContentLoaded event -> creates grocery item inside grocery-list from localStorage.  */
  let items = getLocalStorage();

  if (items.length > 0) {                       // if array we stored with key list is not empty
    items.forEach(function (item) {            // create grocery-list for every array item
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");      // as now we're having some grocery-item inside grocery-container make it visible.
  }
}

function createListItem(id, value) {                                 
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
    element.innerHTML = `<p class="title">${value}</p>
                <div class="btn-container">
                <!-- edit btn -->
                <button type="button" class="edit-btn">
                    <i class="fas fa-edit"></i>
                </button>
                <!-- delete btn -->
                <button type="button" class="delete-btn">
                    <i class="fas fa-trash"></i>
                </button>
                </div>
            `;
    // add event listeners to both buttons;
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);                
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    // append child
    list.appendChild(element);
}

/*
  - localStorage : LocalStorage is a data storage type of web storage. This allows the JavaScript sites and apps to store and access the data without any expiration date.
                 -> we need to add (key,value) both as strings  
                    // localStorage.setItem("orange", JSON.stringify(item1,item2));              storing into localStorage
                    // const orang = JSON.parse(localStorage.getItem("orange"));              storing into localStorage

  - working with forms 
                 -> creating and deleteting items dynamically 

*/