let menu_m = document.getElementsByClassName("main-menu")[0];
let agregator = document.getElementById("agregator");
let menu_s = Array.from(document.getElementsByClassName("sub-menu"));;

const m_menu_hider = () => menu_m.classList.add("hidden-menu-m");
const m_menu_opener = () => menu_m.classList.remove("hidden-menu-m");

let scrollLimit = 150;

let sub_OpenerS = Array.from(menu_m.getElementsByClassName("sub-Opener"));
let sub_menusS =  Array.from(menu_m.getElementsByClassName("sub-menu"));

let expand_0 = sub_OpenerS[0].getElementsByTagName("span")[0];
let expand_1 = sub_OpenerS[1].getElementsByTagName("span")[0];

console.log(expand_0);
/***************khjkhjk */
function visibilitySwitcher_0() {
    if(sub_menusS[0].classList.contains("hidden"))
        sub_menusS[0].classList.remove("hidden");      
    else sub_menusS[0].classList.add("hidden");   
}

function visibilitySwitcher_1() {
    if(sub_menusS[1].classList.contains("hidden"))
        sub_menusS[1].classList.remove("hidden");
    else sub_menusS[1].classList.add("hidden");
}


/*=============================================
                Page load-width detection
  =============================================*/
if(document.body.clientWidth>700){
    menu_s.forEach(element => {
        element.classList.remove("hidden");         
    }); 
    m_menu_opener();   
}else{
    Array.from(menu_m.getElementsByTagName("a")).forEach(element => {
        element.addEventListener('click', m_menu_hider);
    }); 

    scrollLimit = 0;
    sub_menusS.forEach(element => {
        element.classList.remove("desktop");
    });
    sub_OpenerS[0].addEventListener('click', visibilitySwitcher_0);
    sub_OpenerS[1].addEventListener('click', visibilitySwitcher_1);

    expand_0.classList.remove("hidden");
    expand_1.classList.remove("hidden");

}


/*=============================================
                Mobile-menu-opener
  =============================================*/
agregator.addEventListener("click" ,()=>{    
    if(menu_m.classList.contains("hidden-menu-m")) 
        m_menu_opener();
    else m_menu_hider();  
});


/*=============================================
                Mobile-trigger
  =============================================*/
let adaptive = window.matchMedia("(min-width: 700px)");

adaptive.addListener((changed)=>{    
    if(changed.matches){
        console.log("Bigger");

        
        expand_0.classList.add("hidden");
        expand_1.classList.add("hidden");

        m_menu_opener();
        menu_s.forEach(element => {
            element.classList.remove("hidden");
        });

        Array.from(menu_m.getElementsByTagName("a")).forEach(element => {
            element.removeEventListener('click', m_menu_hider);
        }); 

        scrollLimit = 150;

        sub_menusS.forEach(element => {
            element.classList.add("desktop");
        });

        sub_OpenerS[0].removeEventListener('click', visibilitySwitcher_0);
        sub_OpenerS[1].removeEventListener('click', visibilitySwitcher_1);
        console.log("Deleted");
    }

    if(!changed.matches){
        console.log("Smaller");

        expand_0.classList.remove("hidden");
        expand_1.classList.remove("hidden");

        m_menu_hider();
        menu_s.forEach(element => {
            element.classList.add("hidden");
        });  

        Array.from(menu_m.getElementsByTagName("a")).forEach(element => {
            element.addEventListener('click', m_menu_hider);
        }); 

        scrollLimit = 0;
        
        sub_menusS.forEach(element => {
            element.classList.remove("desktop");
        });
        
        sub_OpenerS[0].addEventListener('click', visibilitySwitcher_0);
        sub_OpenerS[1].addEventListener('click', visibilitySwitcher_1);
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


