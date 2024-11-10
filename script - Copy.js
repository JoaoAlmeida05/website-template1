let counter = false
let counter2 = false



function phone_menu(){

    if(window.matchMedia("(min-width: 1024px)")){
        //hi
    }else{
        const home = document.querySelector('.phoneP')
        if(counter2==false){
            counter2 = true
            home.style.visibility = "hidden";
        }else{
            counter2 = false
            home.style.visibility = "visible";
        }
    }
    
}

