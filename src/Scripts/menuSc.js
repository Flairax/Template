let agregator = document.getElementById("agregator"),
    main_points = Array.from(document.getElementsByName("li")),
    agregatorState = true;

agregator.addEventListener("click" ,()=>{
    if(agregatorState){
        main_points.forEach(element => {
            element.style.display = "block";
        });
    }else{
        main_points.forEach(element => {
            element.style.display = "none";
        });
    }
    agregatorState = !agregatorState;
});

let adaptive = window.matchMedia("(min-width: 700px)");
adaptive.addListener((changed)=>{
    if(changed.matches){
        main_points.forEach(element => {
            element.style.display = "block";
        });
    }else{
        main_points.forEach(element => {
            element.style.display = "none";
        });
    }
    agregatorState = !agregatorState;
});