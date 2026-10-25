function greet(){
    const now = new Date();
    const hours = now.getHours();
    if (hours >= 12){
        document.getElementById('greeting').textContent = "Good Afternoon!";
    } else{
        document.getElementById('greeting').textContent = "Good Morning!";
    }
}

document.getElementById("themeToggle").addEventListener("click", function () {
    const body = document.body;
    if (body.classList.contains("color-scheme-light")) {
        body.classList.replace("color-scheme-light", "color-scheme-dark");
    } else if (body.classList.contains("color-scheme-dark")) {
        body.classList.replace("color-scheme-dark", "color-scheme-light");
    }
});

greet();