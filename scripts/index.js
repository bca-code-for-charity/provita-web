let businessDiv = document.querySelector(".business")
let researchDiv = document.querySelector(".research")

let businessButton = document.querySelector(".businessDrop");
let researchButton = document.querySelector(".researchDrop");

businessButton.addEventListener('click', () => {
    researchDiv.style.opacity = "0";

    businessButton.classList.add("active")
    if (researchButton.classList.contains("active")) {
        researchButton.classList.remove("active")
    }

    setTimeout(() => {
        researchDiv.style.display = "none"
        businessDiv.style.display = "block"
        businessDiv.style.opacity = "1"
    }, 500)
})

researchButton.addEventListener('click', () => {
    businessDiv.style.opacity = "0";

    researchButton.classList.add("active")
    if (businessButton.classList.contains("active")) {
        businessButton.classList.remove("active")
    }

    setTimeout(() => {
        businessDiv.style.display = "none"
        researchDiv.style.display = "block"
        researchDiv.style.opacity = "1"
    }, 500)
})