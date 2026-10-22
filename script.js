function greet(){
    const now = new Date();
    const hours = now.getHours();
    if (hours >= 12){
        document.getElementById('greeting').textContent = "Good Afternoon!";
    } else{
        document.getElementById('greeting').textContent = "Good Morning!";
    }
}

function themeToggle(){

}

greet();