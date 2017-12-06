/*=============================================
                    CASHES
  =============================================*/
/*============MAIN-OBJECTS============*/
const menu_m = document.getElementsByClassName("main-menu")[0];
const agregator = document.getElementById("agregator");
const menu_s = Array.from(document.getElementsByClassName("sub-menu"));
const refs = Array.from(menu_m.getElementsByTagName("a"));

/*============SUB-MENU============*/
const sub_menusS =  Array.from(menu_m.getElementsByClassName("sub-menu"));
const sub_menus_0 = sub_menusS[0];
const sub_menus_1 = sub_menusS[1];

/*============SUB-MENU-OPENERS============*/
const sub_OpenerS = Array.from(menu_m.getElementsByClassName("sub-Opener"));
const sub_Opener_0 = sub_OpenerS[0];
const sub_Opener_1 = sub_OpenerS[1];

/*============EXPANDERS============*/
const expand_0 = sub_Opener_0.getElementsByTagName("span")[0];
const expand_1 = sub_Opener_1.getElementsByTagName("span")[0];

/*============SUB-MENU-VISIBILITY-SWITCHERS============*/
function visibilitySwitcher_0() {
    if(sub_menus_0.classList.contains("hidden"))
        sub_menus_0.classList.remove("hidden");      
    else sub_menus_0.classList.add("hidden");   
}

function visibilitySwitcher_1() {
    if(sub_menus_1.classList.contains("hidden"))
        sub_menus_1.classList.remove("hidden");
    else sub_menus_1.classList.add("hidden");
}

let scrollLimit = 150;

/*=============================================
                SHIFT-ACTIONS-HANDLER
  =============================================*/
function stateShifter(action) {
    switch (action) {
        /*===============MAIN-MENU===============*/       
        case "MAKE_MAIN-MENU_VISIBLE_FOR_DESKTOP":
            menu_m.classList.remove("hidden-menu-m");
        break;
        case "MAKE_MAIN-MENU_HIDDEN_FOR_MOBILE":
            menu_m.classList.add("hidden-menu-m");
        break;
        
        /*===============SUB-MENU===============*/       
        case "MAKE_SUB-MENU_VISIBLE_FOR_DESKTOP":
            menu_s.forEach(element => {
                element.classList.remove("hidden");         
            });
        break;
        case "MAKE_SUB-MENU_HIDDEN_FOR_MOBILE":
            menu_s.forEach(element => {
                element.classList.add("hidden");         
            });
        break;

        /*===============SUB-OPENERS===============*/ 
        case "ADD_LSNR_(MAKE_SUB-MENU_VISIBLE_ONCLICK)_FOR_MOBILE":
            sub_Opener_0.addEventListener('click', visibilitySwitcher_0);
            sub_Opener_1.addEventListener('click', visibilitySwitcher_1);   
        break;
        case "REMOVE_LSNR_(MAKE_SUB-MENU_VISIBLE_ONCLICK)_FOR_DESKTOP":
            sub_Opener_0.removeEventListener('click', visibilitySwitcher_0);
            sub_Opener_1.removeEventListener('click', visibilitySwitcher_1);   
        break;

        /*===============REFS===============*/ 
        case "ADD_LSNR_(CLOSE_MAIN-MENU_ON_REF_CLICK)_FOR_MOBILE":
            refs.forEach(element => {
                element.addEventListener('click', stateShifter("MAKE_MAIN-MENU_HIDDEN_FOR_MOBILE"));
            }); 
        break;
        case "REMOVE_LSNR_(CLOSE_MAIN-MENU_ON_REF_CLICK)_FOR_DESKTOP":
            refs.forEach(element => {
                element.removeEventListener('click', stateShifter("MAKE_MAIN-MENU_VISIBLE_FOR_DESKTOP"));
            }); 
        break;

        /*===============HOVER===============*/
        case "REMOVE_EFFECT_ON_SUBMENU:HOVER_FOR_MOBILE":
            sub_menusS.forEach(element => {
                element.classList.remove("desktop");
            });
        break;
        case "ADD_EFFECT_ON_SUBMENU:HOVER_FOR_DESKTOP":
            sub_menusS.forEach(element => {
                element.classList.add("desktop");
            });
        break;

        /*===============EXPANDS===============*/
        case "MAKE_'EXPANDS'_VISIBLE_FOR_MOBILE":
            expand_0.classList.remove("hidden");
            expand_1.classList.remove("hidden");
        break;
        case "MAKE_'EXPANDS'_HIDDEN_FOR_DESKTOP":
            expand_0.classList.add("hidden");
            expand_1.classList.add("hidden");
        break;

        /*===============DEFAUL ERROR===============*/
        default: 
            alert(action+" - unrecognized!");
            throw new SyntaxError("StateShifter doesn't know about that action");
    }
}

/*=============================================
                Page load-width detection
  =============================================*/
if(document.body.clientWidth>700){
    stateShifter("MAKE_MAIN-MENU_VISIBLE_FOR_DESKTOP"); 
    stateShifter("MAKE_SUB-MENU_VISIBLE_FOR_DESKTOP");   
}else{   
    scrollLimit = 0;
    stateShifter("ADD_LSNR_(CLOSE_MAIN-MENU_ON_REF_CLICK)_FOR_MOBILE");    
    stateShifter("REMOVE_EFFECT_ON_SUBMENU:HOVER_FOR_MOBILE");
    stateShifter("ADD_LSNR_(MAKE_SUB-MENU_VISIBLE_ONCLICK)_FOR_MOBILE");
    stateShifter("MAKE_'EXPANDS'_VISIBLE_FOR_MOBILE");  
}

/*=============================================
                Mobile-menu-opener
  =============================================*/
agregator.addEventListener("click" ,()=>{    
    if(menu_m.classList.contains("hidden-menu-m")) 
        stateShifter("MAKE_MAIN-MENU_VISIBLE_FOR_DESKTOP");
    else stateShifter("MAKE_MAIN-MENU_HIDDEN_FOR_MOBILE");  
});

/*=============================================
                Width-change-trigger
  =============================================*/
let adaptive = window.matchMedia("(min-width: 700px)");

adaptive.addListener((changed)=>{    
    if(changed.matches){
        scrollLimit = 150;
        stateShifter("MAKE_MAIN-MENU_VISIBLE_FOR_DESKTOP")
        stateShifter("MAKE_'EXPANDS'_HIDDEN_FOR_DESKTOP");       
        stateShifter("MAKE_SUB-MENU_VISIBLE_FOR_DESKTOP");        
        stateShifter("REMOVE_LSNR_(CLOSE_MAIN-MENU_ON_REF_CLICK)_FOR_DESKTOP");       
        stateShifter("ADD_EFFECT_ON_SUBMENU:HOVER_FOR_DESKTOP");   
        stateShifter("REMOVE_LSNR_(MAKE_SUB-MENU_VISIBLE_ONCLICK)_FOR_DESKTOP");
    }

    if(!changed.matches){
        scrollLimit = 0;        
        stateShifter("MAKE_MAIN-MENU_HIDDEN_FOR_MOBILE")
        stateShifter("MAKE_'EXPANDS'_VISIBLE_FOR_MOBILE");
        stateShifter("MAKE_SUB-MENU_HIDDEN_FOR_MOBILE");
        stateShifter("ADD_LSNR_(CLOSE_MAIN-MENU_ON_REF_CLICK)_FOR_MOBILE");        
        stateShifter("REMOVE_EFFECT_ON_SUBMENU:HOVER_FOR_MOBILE");
        stateShifter("ADD_LSNR_(MAKE_SUB-MENU_VISIBLE_ONCLICK)_FOR_MOBILE");
    }  
});

/*=============================================
                Scroll-analyzer
  =============================================*/
let navigation = document.getElementById("navigation");

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > scrollLimit){
        navigation.style.position = "fixed";        
    } 
    else navigation.style.position = "relative";
}