console.log("Script started.")
let currentColour="aqua";
colours=["aqua","black","white","green","gray","orange","blue","purple","pink","red","yellow","peach"]
function getCurrentColour(){
    return currentColour
}
function createGrid(width, height, displayText){
    const body = document.querySelector("body")
    const divContainer = document.createElement("div")
    divContainer.classList.toggle("divContainer")
    const messageBox=document.createElement("div")
    messageBox.textContent=width+"*"+height
    divContainer.appendChild(messageBox)
    const colourContainer=document.createElement("div")
    colourContainer.classList.toggle("colourContainer")
    for (let i=0; i<colours.length; i++){
        const colourElement = document.createElement("div")
        colourElement.classList.toggle("gridElement")
        colourElement.setAttribute("style", "background-color: "+colours[i]+";")
        colourElement.addEventListener("mousedown", ()=>currentColour=colours[i])
        colourContainer.appendChild(colourElement)
    }
    divContainer.appendChild(colourContainer)
    for (let i=1; i<width+1; i++){
        let gridRow = document.createElement("div");
        gridRow.classList.toggle('gridRow')
        for (let j=1; j<height+1; j++){
            let gridElement=document.createElement("div")
            gridElement.classList.add("gridElement")
            gridElement.addEventListener("mouseover", ()=> gridElement.setAttribute("style", "background-color: "+getCurrentColour()+";"))
            if (displayText){
                gridElement.textContent="row "+i+", column "+j
            }
            gridRow.appendChild(gridElement)
        }
        divContainer.appendChild(gridRow)
    }
    body.appendChild(divContainer)
}

function resetGrid(){
    const tempDivContainer = document.querySelector(".divContainer")
    tempDivContainer.remove()
    createGrid(Math.min(100, parseInt(prompt("Enter the width of the grid"))), Math.min(100, parseInt(prompt("Enter the height of the grid"))), false)
}

document.addEventListener("DOMContentLoaded", ()=>{
    console.log("DOM content loaded.")
    createGrid(16, 16, false)
    const playButton = document.querySelector("#playButton")
   playButton.addEventListener("click", ()=>resetGrid())
})
//console.log("Body classes - ",body.classList);