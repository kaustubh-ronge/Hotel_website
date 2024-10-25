var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
    },
});

// collapsing header 
let nav = document.querySelector(".navbar");
window.onscroll = () => {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}

// nav hide on mobile view 
let navBar = document.querySelectorAll(".nav-link"); 
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach((a) => {
  a.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});

// counter 
document.addEventListener("DOMContentLoaded",()=>{
     counter=(id, start, end, duration)=>{
        let obj = document.getElementById(id),
        current = start,
        range = end- start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(()=>{
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer)
            }
        },step)
     }
     counter("count1", 0, 1287, 3000)
     counter("count2", 100, 5786, 3000)
     counter("count3", 0, 1440, 3000)
     counter("count4", 0, 7110, 3000)
})
