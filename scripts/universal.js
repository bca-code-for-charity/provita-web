let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0)
        nav.classList.add("sticky")
    else
        nav.classList.remove("sticky");
})