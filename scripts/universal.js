let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0)
        nav.classList.add("sticky")
    else
        nav.classList.remove("sticky");
})

document.addEventListener("scroll", () => {
    document.querySelectorAll(".revealing").forEach((e) => {
        if (window.innerHeight  > e.getBoundingClientRect().top)
            e.classList.add("active");
    });
})

document.querySelectorAll(".revealing").forEach((e) => {
    if (window.innerHeight  > e.getBoundingClientRect().top)
        e.classList.add("active");
});