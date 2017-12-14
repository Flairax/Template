import $ from 'jquery';

export function hideMenus(){
   $("#sub-first").removeClass("opened-menu");
   $("#sub-second").removeClass("opened-menu");
   $("#sub-opener-first").removeClass("opener-clicked");
   $("#sub-opener-second").removeClass("opener-clicked");
   $("#Searcher").removeClass("search-opened");
   $("#Revealer").removeClass("search-revealer-opened");
}

/*=========================================
               Scroller
  =========================================*/
let scrolled;
let scrollLimit = 300;

export function scroller(){  
   scrolled = window.pageYOffset || document.documentElement.scrollTop;
      
   if(scrolled > scrollLimit){
      $("#Navigation").addClass("fixed-nav");       
   }else{
      $("#Navigation").removeClass("fixed-nav");    
   }
}    