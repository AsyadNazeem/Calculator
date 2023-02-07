
let icon = document.getElementById("icon")

function darkTheme() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "darkTheme/sun.png"
    }else{
        icon.src = "darkTheme/moon.png"
    }
}