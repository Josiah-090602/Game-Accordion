const cardsContainer = document.getElementById("main")

cardsContainer.querySelectorAll(".card").forEach(x => {
    x.addEventListener("click", ()=>{
        const current = document.getElementsByClassName("active")
        current[0].className = current[0].className.replace
        ("active","")

        x.classList.add("active")
    })
});