import $ from 'jquery';

let scrolled = 0;

export function hideAdditional() {
   $(".menu-sub").removeClass("opened-menu");
   $(".sub-opener").removeClass("opener-clicked");
   $("#Searcher").removeClass("search-block-opened");
   $("#Revealer-search").removeClass("search-opened");
}

export function hideAll(){
   $("#Menu").removeClass("opened-menu");
   hideAdditional();
}

/*==============Scroller==============*/
function rememberScroll(){
   scrolled = window.pageYOffset || document.documentElement.scrollTop;
}

export function navFixation() {
   if(window.matchMedia("(min-width: 700px)").matches){
      if (scrolled > 350 && scrolled < 450) {
         $("#Navigation").addClass("navigation-fixed");
      } else if (scrolled < 350 && scrolled < 330) {
         $("#Navigation").removeClass("navigation-fixed");
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
      $("#Menu").removeClass("opened-menu");
   });
}