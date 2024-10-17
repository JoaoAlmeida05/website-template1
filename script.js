let counter = false
function mobile_menu(){
    const home = document.querySelector('.home')
    if(counter==false){
        counter = true
        home.style.visibility = "hidden";
    }else{
        counter = false
        home.style.visibility = "visible";
    }
}
