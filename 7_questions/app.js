//using selectors inside the element
// traversing the dom

/*     method 1: using selectors only           */

// const plus_btn = document.getElementsByClassName('plus-icon');           
// const minus_btn = document.getElementsByClassName('minus-icon');  
// const questions = document.getElementsByClassName('.question');              // getElementsByClassName returns HTMLCollectionOf<Elements> on which forEach can not  be applied directly.
const questions = document.querySelectorAll('.question');                     // querySelectorAll returns NodeListOf<Elements> on which forEach can be applied 

// for( let i=0; i<plus_btn.length; i++){
//      plus_btn[i].addEventListener('click', ()=>{
//           questions[i].classList.add('show-text');
//      })
//      minus_btn[i].addEventListener('click', ()=>{
//           questions[i].classList.remove('show-text');
//      })
// }

/*    using forEach instead of for  method 1.2           */

questions.forEach(function(question){
      const question_btn = question.querySelector('.question-btn');          // quering inside question (in DOM : finding 1st element with class in children )
      question_btn.addEventListener('click', ()=>{
           question.classList.toggle('show-text');
           //additonal functionality : close all question text  if current  open 
           questions.forEach((ques_)=>{
                 if(ques_ != question ) ques_.classList.remove('show-text');
           });
      });
});


/*    method 2: traversing the DOM               */

// const btns = document.querySelectorAll('.question-btn'); 
// btns.forEach(function(btn){
//     btn.addEventListener('click',(e)=>{                                   // e -> event
//         // console.log(e.currentTarget);                                    // line 30
//         // console.log(e.currentTarget.parentElement);                     // line 28
//         // console.log(e.currentTarget.parentElement.parentElement);      // line 26  in index.html
//         const ques = e.currentTarget.parentElement.parentElement;
//         ques.classList.toggle("show-text");
//  });
// })

// method 2.2: we could also have selected questions and then traverse to its childElement 

