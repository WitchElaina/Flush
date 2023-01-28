console.log("Welcome!")
var isDarkMode = false;

function changeHint() {
    // get cur hover item
    var cur_hover = document.getElementById("");
}

function darkMode() {
    if(isDarkMode) {
        isDarkMode = false;
        console.log("Changed to light mode");
    }
    else {
        isDarkMode = true;
        console.log("Changed to dark mode");
    }
}