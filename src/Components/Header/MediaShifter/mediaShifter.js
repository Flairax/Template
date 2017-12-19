import $ from 'jquery';

let navigation = null;


let scrollLimit;
let scrolled;

/*==============Cashes initalization==============*/
export function initCashes() {
   navigation = $("#Navigation");
   scrollLimit = $("#Banner").attr("data-height");
}

/*==============Scroller==============*/
function scroller() {
   scrolled = window.pageYOffset || document.documentElement.scrollTop;

   if (scrolled > scrollLimit && scrolled < scrollLimit + 5) {
      navigation.addClass("navigation-fixed");
   } else if (scrolled < scrollLimit && scrolled < scrollLimit - 5) {
      navigation.removeClass("navigation-fixed");
   }
}

/*====================================
      Adding / Removing nav fixation
  ====================================*/
const ADAPTIVE = window.matchMedia("(min-width: 700px)");

export function scrollWatcher() {
   ADAPTIVE.addListener(changes => {
      if (changes.matches) {
         window.addEventListener('scroll', scroller);
         document.documentElement.scrollTop = scrolled;
      } else {
         window.removeEventListener('scroll', scroller);
      }
   });

   if (window.matchMedia("(min-width: 800px)").matches) {
      window.addEventListener('scroll', scroller);
   }
}
/*=============================
      All refs points top
  =============================*/
export function allRefsLeaderTop() {
   $(".refs-main, .refs-sub").bind('click', () => {
      document.documentElement.scrollTop = 0;
      $("#Menu").removeClass("opened-menu");
   });
}