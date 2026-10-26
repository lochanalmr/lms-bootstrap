const THEME_STORAGE_KEY = "lms-theme";
const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

if (savedTheme === "color-scheme-light" || savedTheme === "color-scheme-dark") {
    body.classList.remove("color-scheme-light", "color-scheme-dark");
    body.classList.add(savedTheme);
}

function greet(){
    const now = new Date();
    const hours = now.getHours();
    if (hours >= 12){
        document.getElementById('greeting').textContent = "Good Afternoon!";
    } else{
        document.getElementById('greeting').textContent = "Good Morning!";
    }
}

themeToggle.addEventListener("click", function () {
    if (body.classList.contains("color-scheme-light")) {
        body.classList.replace("color-scheme-light", "color-scheme-dark");
    } else if (body.classList.contains("color-scheme-dark")) {
        body.classList.replace("color-scheme-dark", "color-scheme-light");
    }

    localStorage.setItem(
        THEME_STORAGE_KEY,
        body.classList.contains("color-scheme-dark")
            ? "color-scheme-dark"
            : "color-scheme-light"
    );
});

greet();