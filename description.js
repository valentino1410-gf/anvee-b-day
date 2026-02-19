const btn = document.querySelector(".sound-toggle");
const vid = document.querySelector('video');


btn.addEventListener("click", ()=>{
    if(btn.classList[1] == "to-enable"){
        console.log("Unmuting")
        vid.muted = false;
        btn.innerHTML = "🔇 Mute";
        btn.classList.remove("to-enable");
        btn.classList.add("to-disable");
    }

    else{
        console.log("Muting");
        vid.muted = true;
        btn.innerHTML = "🔊 Enable Sound";
        btn.classList.remove("to-disable");
        btn.classList.add("to-enable");
    }
})