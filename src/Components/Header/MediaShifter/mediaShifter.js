import $ from 'jquery';

let navigation = null;
let menu_main = null;
let menu_subS = null;
let sub_rvlrS = null;
let searcher = null;
let searcher_rvlr = null;

let scrollLimit;
let scrolled;

/*==============Cashes initalization==============*/
export function initCashes() {
   navigation = $("#Navigation");
   menu_main = $("#Menu");
   menu_subS = $(".menu-sub");
   sub_rvlrS = $(".sub-opener");
   searcher = $("#Searcher");
   searcher_rvlr = $("#Revealer-search");
   scrollLimit = $("#Banner").attr("data-height");
}

export function hideAdditional() {
   menu_subS.removeClass("opened-menu");
   sub_rvlrS.removeClass("opener-clicked");
   searcher.removeClass("search-block-opened");
   searcher_rvlr.removeClass("search-opened");
}

export function hideAll(){
   menu_main.removeClass("opened-menu");
   hideAdditional();
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
   $(".ref-main, .ref-sub").bind('click', () => {
      document.documentElement.scrollTop = 0;
      $("#Menu").removeClass("opened-menu");
   });
}