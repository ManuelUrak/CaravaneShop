//Costum script file

//Open or close the mobile nav menu
function showMenu(){
    let menu = document.getElementById('mobileNavbar');

    if(menu.style.display === 'block'){
        menu.style.display = 'none';
    }else{
        menu.style.display = 'block';
    }
}