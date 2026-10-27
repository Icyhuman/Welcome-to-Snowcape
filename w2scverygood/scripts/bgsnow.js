//Background snow effect
const flakes=["shine.png","ihsc.png","rlphb.png","slash.png"]
const bgbox = document.createElement("div")
bgbox.classList.add("bgbox")
document.body.append(bgbox)
console.log(bgbox)
function snow(){
    var flbox = document.createElement("div")
    flbox.classList.add("bgsnowc")
    bgbox.append(flbox)
    var flake = document.createElement("img")
    flake.classList.add("bgsnow")
    flbox.append(flake)
    let flakeimg=Math.floor(Math.random()*4)
    flake.src="imgs/bg/"+flakes[flakeimg]

    let left=Math.floor(Math.random()*100-15)
    flake.style.left=left+"vw"
}
var snowind=0
const snower = setInterval(() => {
    if(snowind<15){snow()
        snowind+=1
    }
    else{clearInterval(snower)}
}, 467);
console.log("Funny tip! Spam snow() in the console to make the background look awful.")