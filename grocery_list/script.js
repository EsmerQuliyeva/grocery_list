const inputData = document.getElementById("input-search")
const allItems = document.querySelector(".all-items")
const pencil = document.getElementById("pencil")

pencil.addEventListener("click", () => {
    allItems.innerHTML = ""
})
inputData.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        addItems()
    }
})
function addItems(){
    let h2 = document.createElement("h2")
    h2.innerHTML="- "+ inputData.value
    h2.addEventListener("click",function(){
        h2.style.textDecoration=("line-through")
    })
    inputData.value=""
    allItems.insertAdjacentElement("beforeend", h2)
}