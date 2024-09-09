// OPENING AND CLOSING THE NOTIFICATION, CALENDAR AND MENU
let davi = document.querySelectorAll(".davi");
let noti = document.querySelectorAll(".not-icon");
let cal = document.querySelectorAll(".cal-icon");
davi.forEach(element => {
    element.addEventListener("click",()=>{
        const content = document.querySelector(".menu-fl")
        const content2 = document.querySelector(".notification")
    
        const expanded = content.style.display === 'flex';
        const expanded2 = content.style.display === 'none';
    
        // Toggle the selected card
        content.style.display = expanded ? 'none' : 'flex';
        content2.style.display = expanded2 ? 'none' : 'none';
    })
});
noti.forEach(element => { 
    element.addEventListener("click",()=>{
        const content = document.querySelector(".notification")
        const content2 = document.querySelector(".menu-fl")
    
        const expanded = content.style.display === 'flex';
        const expanded2 = content.style.display === 'none';
    
        // Toggle the selected card
        content.style.display = expanded ? 'none' : 'flex';
        content2.style.display = expanded2 ? 'none' : 'none';
      
    })
});
cal.forEach(element => {  
    element.addEventListener("click",()=>{
        const content = document.querySelector(".menu-fl")
        const content2 = document.querySelector(".notification")
    
        const expanded = content.style.display === 'none';
        const expanded2 = content.style.display === 'none';
    
        // Toggle the selected card
        content.style.display = expanded ? 'none' : 'none';
        content2.style.display = expanded2 ? 'none' : 'none';
        const infosBar = document.querySelector(".info")
        infosBar.classList.toggle("changePost");
        infosBar.classList.toggle("hidden");
      
    });
});