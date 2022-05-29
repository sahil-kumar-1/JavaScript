/*      my code 

const toggle_btn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

toggle_btn.addEventListener('click', ()=>{
        sidebar.classList.toggle('show-sidebar');
});

const close_btn = document.querySelector('.close-btn');

close_btn.addEventListener('click', ()=>{
        sidebar.classList.toggle('show-sidebar');
});  

*/ 

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
