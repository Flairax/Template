import $ from 'jquery';

/*=============================
         Scroll watcher
  =============================*/
let scrolled = 0;

function rememberScroll(){
   scrolled = window.pageYOffset || document.documentElement.scrollTop;
}

function navFixation() {
   if(window.matchMedia("(min-width: 700px)").matches){
      if (scrolled > 350) {
         $(".navigation").addClass("navigation-fixed");
      } else if (scrolled < 350) {
         $(".navigation").removeClass("navigation-fixed");
      }
   }  
}

window.addEventListener('scroll', rememberScroll);
window.addEventListener('scroll', navFixation);

/*=============================
      All refs points top
  =============================*/
export function allRefsLeadTop() {
   $(".ref-main, .ref-sub").bind('click', () => {
      document.documentElement.scrollTop = 0;
   });
}