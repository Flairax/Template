/*=============================================
                    CASHES
  =============================================*/
/*============MAIN-OBJECTS============*/
const menu_m = document.getElementsByClassName("main-menu")[0]
const agregator = document.getElementById("agregator")
const menu_s = Array.from(document.getElementsByClassName("sub-menu"))
const refs = Array.from(menu_m.getElementsByTagName("a"))
const expandableS = Array.from(menu_m.getElementsByClassName("expandable"))

const main = document.getElementsByTagName("main")[0]
const navigation = document.getElementsByClassName("navigation")[0].classList

/*============SUB-MENU============*/
const sub_menusS =  Array.from(menu_m.getElementsByClassName("sub-menu"))
const sub_menus_0 = sub_menusS[0]
const sub_menus_1 = sub_menusS[1]

/*============SUB-MENU-OPENERS============*/
const sub_OpenerS = Array.from(menu_m.getElementsByClassName("sub-Opener"))
const sub_Opener_0 = sub_OpenerS[0]
const sub_Opener_1 = sub_OpenerS[1]

const arrowS = menu_m.getElementsByClassName("arrow")
const arrow_0 = arrowS[0].classList
const arrow_1 = arrowS[1].classList

const annotationS = menu_m.getElementsByTagName("span")
let annotation_0 = annotationS[0]
let annotation_1 = annotationS[1]

const searcher = document.getElementsByTagName("header")[0].getElementsByClassName("search-box")[0]
const srch_rvlr = document.getElementsByClassName("srch-box-rvlr")[0]


/*============Scroller values============*/
const bannerHeight = parseInt(document.getElementById("banner").clientHeight, 10)

let scrollLimit = 0
let scrolled = 0


/*=============================================
    Not the best solution, but I don't
    know how make "removeEventListener" 
    work without it yet 
  =============================================*/
/*============SUB-MENU-VISIBILITY-SWITCHERS============*/
function visSwitchForSubMenu_0() {
   if(sub_menus_0.classList.contains("hidden-menus")){
      sub_menus_0.classList.remove("hidden-menus") 
      sub_Opener_0.classList.add("sub-Opener-opened") 
      arrow_0.add("arrow-mobile")
      annotation_0.innerText = "Narrow"      
   }else{
      sub_menus_0.classList.add("hidden-menus") 
      sub_Opener_0.classList.remove("sub-Opener-opened") 
      arrow_0.remove("arrow-mobile") 
      annotation_0.innerText = "Expand"
   }  
}

function visSwitchForSubMenu_1() {
   if(sub_menus_1.classList.contains("hidden-menus")){
      sub_menus_1.classList.remove("hidden-menus")
      sub_Opener_1.classList.add("sub-Opener-opened") 
      arrow_1.add("arrow-mobile")
      annotation_1.innerText = "Narrow"      

   }else{
      sub_menus_1.classList.add("hidden-menus")
      sub_Opener_1.classList.remove("sub-Opener-opened") 
      arrow_1.remove("arrow-mobile")
      annotation_1.innerText = "Expand"
   } 
}

/*============hiddeMenu============*/
function hiddeMainAndSUbMenu() {
   menu_m.classList.add("hidden-menus")
   sub_menus_0.classList.add("hidden-menus")   
   sub_menus_1.classList.add("hidden-menus")
   arrow_0.remove("arrow-mobile")
   arrow_1.remove("arrow-mobile")
}

/*============Scroller============*/
function scroller(){  
   scrolled = window.pageYOffset || document.documentElement.scrollTop
   if(scrolled > scrollLimit){
       navigation.add("fixed-nav")        
   } 
   else navigation.remove("fixed-nav")
   console.log(scrolled)
}
/*=============================================
                SHIFT-ACTIONS-HANDLER
  =============================================*/
function stateShifter(action) {
   switch (action) {
      /*===============MAIN-MENU===============*/       
      case "MAKE_MAIN-MENU_HIDDEN-MOBILE":
         menu_m.classList.add("hidden-menus")           
      break
      case "MAKE_MAIN-MENU_VISIBLE-DESKTOP":
         menu_m.classList.remove("hidden-menus")           
      break
      case "ADD_LSNR(MAKE_MAIN&SUB-MENU_hidden_ON_BODY_CLICK)-MOBILE":
         main.addEventListener("click", hiddeMainAndSUbMenu)      
      break
      case "REMOVE_LSNR(MAKE_MAIN&SUB-MENU_hidden_ON_BODY_CLICK)-DESKTOP":
         main.removeEventListener("click", hiddeMainAndSUbMenu)      
      break
      /*===============SUB-MENU===============*/       
      case "MAKE_SUB-MENU_VISIBLE-DESKTOP":
         menu_s.forEach(element => {
            element.classList.remove("hidden-menus")         
         })
      break
      case "MAKE_SUB-MENU_HIDDEN-MOBILE":
         menu_s.forEach(element => {
            element.classList.add("hidden-menus")         
         })
      break
       /*===============Change bachround on ref Hover===============*/       
      case "ADD_LSTNR(CHAGE_BG_ON_LI_WHEN_REF_HOVERED)":
         expandableS.forEach(ref => {
            ref.addEventListener("mouseover", () => ref.parentElement.classList.add("parrentChange"))
            ref.addEventListener("mouseout", () => ref.parentElement.classList.remove("parrentChange"))
         })
      break 
      case "REMOVE_LSTNR(CHAGE_BG_ON_LI_WHEN_REF_HOVERED)":
         expandableS.forEach(ref => {
            ref.removeEventListener("mouseover", () => ref.parentElement.classList.add("parrentChange"))
            ref.removeEventListener("mouseout", () => ref.parentElement.classList.remove("parrentChange"))
         })
      break 
      /*===============SUB-OPENERS===============*/ 
      case "ADD_LSNR_(MAKE_SUB-MENU_VISIBLE_ONCLICK)-MOBILE":          
         sub_Opener_0.addEventListener('click', visSwitchForSubMenu_0)
         sub_Opener_1.addEventListener('click', visSwitchForSubMenu_1)   
      break
      case "REMOVE_LSNR_(MAKE_SUB-MENU_VISIBLE_ONCLICK)-DESKTOP":
         sub_Opener_0.removeEventListener('click', visSwitchForSubMenu_0)
         sub_Opener_1.removeEventListener('click', visSwitchForSubMenu_1)   
      break
      /*===============REFS===============*/ 
      case "ADD_LSNR_(CLOSE_MAIN-MENU_ON_REF_CLICK)-MOBILE":
         refs.forEach(ref => {
            ref.addEventListener('click', hiddeMainAndSUbMenu)
         })  
      break
      case "REMOVE_LSNR_(CLOSE_MAIN-MENU_ON_REF_CLICK)-DESKTOP":
         refs.forEach(ref => {
            ref.removeEventListener('click', hiddeMainAndSUbMenu)          
         }) 
      break
      /*===============MOBILE MENU BUTTON===============*/
      case "ADD_LSTNR(CLICL_ON_MOBILE_MENU_APPEAR'S/DISAPEAR'S_MAIN-MENU)":
         agregator.addEventListener("click" , () => {    
            if(menu_m.classList.contains("hidden-menus")) 
               menu_m.classList.remove("hidden-menus")
            else stateShifter("MAKE_MAIN-MENU_HIDDEN-MOBILE")  
         })
      break
      /*===============REFS PORTAL TO TOP===============*/
      case "ADD_LSTNR(GO_TO_THE_TOP_OF_PAGE_ON_ANY_REF_CLICK)":
         refs.forEach(ref => {
            ref.addEventListener('click',() => window.scrollTo(0, scrollLimit))
         })
      break
      /*===============SCROLL ANALYZER===============*/
      case "ADD_LSTNR(FIX_MENU_WHEN_THE_BANNER_PASSED)-DESKTOP":             
         window.addEventListener('scroll', scroller)
         scrollLimit = bannerHeight
         console.log(scrolled)
         if(window.pageYOffset || document.documentElement.scrollTop >= scrollLimit){
            navigation.add("fixed-nav")   
         }                     
      break
      case "REMOVE_LSTNR(FIX_MENU_WHEN_THE_BANNER_PASSED)-MOBILE":                               
         window.removeEventListener('scroll', scroller)
         scrollLimit = 0
      break   
      /*===============SEARCHER OPENER===============*/
      case "ADD_LSTNR(SEARCHER_OPENS_ON_CLICK)":                               
         srch_rvlr.addEventListener("click", () => {
            if(searcher.classList.contains("search-box-visible")){
               searcher.classList.remove("search-box-visible")
               srch_rvlr.classList.remove("srch-box-rvlr-opened")
            }else{
               searcher.classList.add("search-box-visible")
               srch_rvlr.classList.add("srch-box-rvlr-opened")
            } 
         })
      break   
      /*===============DEFAUL ERROR===============*/
      default: 
         alert(action+" - unrecognized!")
         throw new SyntaxError("StateShifter doesn't know about that action")
   }
}
/*============================================
               Page load actions
  =============================================*/
stateShifter("ADD_LSTNR(GO_TO_THE_TOP_OF_PAGE_ON_ANY_REF_CLICK)")
stateShifter("ADD_LSTNR(CLICL_ON_MOBILE_MENU_APPEAR'S/DISAPEAR'S_MAIN-MENU)")
stateShifter("ADD_LSTNR(SEARCHER_OPENS_ON_CLICK)")

/* =============width detection =============*/
if(document.body.clientWidth>700){
   /* =============DESKTOP =============*/
   stateShifter("ADD_LSTNR(FIX_MENU_WHEN_THE_BANNER_PASSED)-DESKTOP")  
}else{   
   /* =============MOBILE =============*/
   stateShifter("ADD_LSNR_(CLOSE_MAIN-MENU_ON_REF_CLICK)-MOBILE")    
   stateShifter("ADD_LSNR_(MAKE_SUB-MENU_VISIBLE_ONCLICK)-MOBILE")
   stateShifter("ADD_LSNR(MAKE_MAIN&SUB-MENU_hidden_ON_BODY_CLICK)-MOBILE")
   stateShifter("MAKE_MAIN-MENU_HIDDEN-MOBILE")
   stateShifter("MAKE_SUB-MENU_HIDDEN-MOBILE")
   stateShifter("ADD_LSTNR(CHAGE_BG_ON_LI_WHEN_REF_HOVERED)")
}

/*=============================================
                Width-change-trigger
  =============================================*/
let adaptive = window.matchMedia("(min-width: 700px)")

adaptive.addListener((changed)=>{    
   /* =============DESKTOP =============*/
   if(changed.matches){      
      stateShifter("MAKE_SUB-MENU_VISIBLE-DESKTOP")
      stateShifter("ADD_LSTNR(FIX_MENU_WHEN_THE_BANNER_PASSED)-DESKTOP")     
      stateShifter("REMOVE_LSNR_(MAKE_SUB-MENU_VISIBLE_ONCLICK)-DESKTOP")
      stateShifter("REMOVE_LSNR(MAKE_MAIN&SUB-MENU_hidden_ON_BODY_CLICK)-DESKTOP")
      stateShifter("REMOVE_LSNR_(CLOSE_MAIN-MENU_ON_REF_CLICK)-DESKTOP")  
      stateShifter("MAKE_MAIN-MENU_VISIBLE-DESKTOP")
      stateShifter("REMOVE_LSTNR(CHAGE_BG_ON_LI_WHEN_REF_HOVERED)")
   }
   /* =============MOBILE =============*/
   if(!changed.matches){   
      stateShifter("REMOVE_LSTNR(FIX_MENU_WHEN_THE_BANNER_PASSED)-MOBILE")         
      stateShifter("MAKE_MAIN-MENU_HIDDEN-MOBILE")
      stateShifter("MAKE_SUB-MENU_HIDDEN-MOBILE")
      stateShifter("ADD_LSNR_(CLOSE_MAIN-MENU_ON_REF_CLICK)-MOBILE")        
      stateShifter("ADD_LSNR_(MAKE_SUB-MENU_VISIBLE_ONCLICK)-MOBILE")
      stateShifter("ADD_LSNR(MAKE_MAIN&SUB-MENU_hidden_ON_BODY_CLICK)-MOBILE")        
      stateShifter("ADD_LSTNR(CHAGE_BG_ON_LI_WHEN_REF_HOVERED)")
   }  
})