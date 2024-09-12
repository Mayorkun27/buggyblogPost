// OPENING AND CLOSING THE NOTIFICATION, CALENDAR AND MENU
let davi = document.querySelectorAll(".davi");

davi.forEach(element => {
    element.addEventListener("click",()=>{
        const content = document.querySelector(".menu-fl")

        const expanded = content.style.display === 'flex';
    
        // Toggle the selected card
        content.style.display = expanded ? 'none' : 'flex';
    })
});


// FUNCTION FOR REVEALING AND HIDING PASSWORD
    
function togglePasswordVisibility(inputId, fa) {
    const input = document.getElementById(inputId);
    const visibility = document.getElementById(fa);
    input.type === "password" ? input.type = "text" : input.type = "password";
    if (input.type === "password") {
        visibility.classList.toggle("ti-eye");
        visibility.classList.toggle("ti-eye-off");
    } else {
        visibility.classList.toggle("ti-eye-off");
        visibility.classList.toggle("ti-eye");
    }
}