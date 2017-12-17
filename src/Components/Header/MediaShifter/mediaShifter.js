import $ from 'jquery';

let navigation = null;
let menu_main = null;
let sub_first = null;
let sub_second = null;
let sub_opener_first = null;
let sub_opener_second = null;
let searcher = null;
let revealer_searcher = null;
let summary = null;
let summary_revealer = null;

let scrollLimit;
let scrolled;

/*==============Cashes initalization==============*/
export function initHeaderCashes() {
   navigation = $("#Navigation");
   menu_main = $("#Menu");
   sub_first = $("#sub-first");
   sub_second = $("#sub-second");
   sub_opener_first = $("#sub-opener-first");
   sub_opener_second = $("#sub-opener-second");
   searcher = $("#Searcher");
   revealer_searcher = $("#Revealer-search");
   summary = $("#Summary-sidebar");
   summary_revealer = $("#Revealer-summary");

   scrollLimit = $("#Banner").attr("data-height");
}

/*==============Searcher==============*/
export function searcherShifter() {
   searcher.toggleClass("search-block-opened");
   revealer_searcher.toggleClass("search-opened");
}

/*==============Aggregator==============*/
export function aggregatorShifter() {
   menu_main.toggleClass("opened-menu");
   hideMenus();
}

/*==============Sub--opener first==============*/
export function subOpenerFirstShifter() {
   sub_opener_first.toggleClass("opener-clicked");
   sub_first.toggleClass("opened-menu");
}

/*==============Sub--opener second==============*/
export function subOpenerSecondShifter() {
   sub_opener_second.toggleClass("opener-clicked");
   sub_second.toggleClass("opened-menu");
}

/*==========Free area click windows hider==========*/
export function windowsHider() {
   if (window.matchMedia("(min-width: 700px)")) {
      menu_main.removeClass("opened-menu");
      hideMenus();
   }
}

/*==========Summary==========*/
export function summaryProductShifter() {
   summary.toggleClass("summary-block-opened");
   summary_revealer.toggleClass("summary-opened");
}

/*==========Product adder==========*/
export function adderProductShifter() {
   $("#Adder-product").toggleClass("adder-block-opened");
   $("#Revealer-adder-product").toggleClass("adder-opened");
}

/*==========Utility==========*/
function hideMenus() {
   sub_first.removeClass("opened-menu");
   sub_second.removeClass("opened-menu");
   sub_opener_first.removeClass("opener-clicked");
   sub_opener_second.removeClass("opener-clicked");
   searcher.removeClass("search-block-opened");
   revealer_searcher.removeClass("search-opened");
}

/*==============Scroller==============*/
function scroller() {
   scrolled = window.pageYOffset || document.documentElement.scrollTop;

   if (scrolled > scrollLimit) {
      navigation.addClass("navigation-fixed");
   } else {
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
         console.log("Adaptive add scrollWatcher")
      } else {
         window.removeEventListener('scroll', scroller);
         console.log("Adaptive remove scrollWatcher")
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
      hideMenus();
      $("#Menu").removeClass("opened-menu");
   });
}