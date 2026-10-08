function wintext(){
    let winsheet=document.createElement("link")
    winsheet.rel="stylesheet"
    winsheet.type="text/css"
    winsheet.href="fonts/wintextsizes.css"
    winsheet.id="winsheet"
    document.head.append(winsheet)
}
function lintext(){
    let winsheet=document.getElementById("winsheet")
    winsheet.remove()
}
function swaptext(){
    console.log(tsbtn.innerText)
    if(tsbtn.innerText=="Windows Intended Vision"){
        lintext()
        tsbtn.innerText="IHateLinuxTextRendering"
        localStorage.setItem("lintxt",1)
    }
    else{
        wintext()
        tsbtn.innerText="Windows Intended Vision"
        localStorage.setItem("lintxt",0)
    }
}
function tsvis(){
    let box=tsboxinner
    let arw=tsarw
    if(box.style.visibility=="hidden"){
        box.style.visibility="visible"
        arw.src="imgs/left.png"
        localStorage.setItem("bhide",0)
    }
    else{box.style.visibility="hidden"
        arw.src="imgs/right.png"
        localStorage.setItem("bhide",1)
    }
}
//Create the text size swapper
const tsbox = document.createElement("div")
tsbox.classList.add("tsbox")
document.body.append(tsbox)

const tsabox = document.createElement("div")
tsabox.classList.add("tsabox")
tsabox.addEventListener("click", () => {tsvis()})
tsbox.append(tsabox)
const tsarw = document.createElement("img")
tsarw.id="tsarw"
tsarw.src="imgs/left.png"
tsarw.style.height="40px"
tsabox.append(tsarw)

const tsboxinner = document.createElement("div")
tsboxinner.classList.add("tsboxinner")
tsbox.append(tsboxinner)
const tshover = document.createElement("div")
tshover.classList.add("tshover")
tshover.innerText="Current text size (?)"
tsboxinner.append(tshover)
const tsxplain = document.createElement("span")
tsxplain.classList.add("tsxplain")
tsxplain.innerText="My Linux pc renders text different, so I've been designing the site around the wrong text size. Windows Intended Vision mode should be accurate to my intended design for most users, but if the text is too big, try I Hate Linux Text Rendering Mode"
tshover.append(tsxplain)

const tsbtn = document.createElement("button")
tsbtn.classList.add("tsbtn")
tsbtn.innerText="Windows Intended Vision"
tsbtn.addEventListener("click", () => {swaptext()})
tsboxinner.append(tsbtn)


if(localStorage.getItem("lintxt")==1){
    tsbtn.innerText="IHateLinuxTextRendering"
}else{wintext()}
if(localStorage.getItem("bhide")==1){
    tsvis()
}else{console.log("no")}