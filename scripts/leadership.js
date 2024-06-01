document.querySelectorAll(".icons .icon").forEach((elm) => {
    elm.addEventListener("click", () => {
        window.location.href = elm.dataset.link;
    })
})