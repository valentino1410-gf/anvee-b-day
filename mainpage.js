console.log('Linked');
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function bring_fries(n){
    for(let i=0;i<n;i++){
        const fry = document.createElement("img");
        const source_fry = document.createAttribute('src');
        source_fry.value = 'Photos\\fries.png';
        fry.setAttributeNode(source_fry);
        fry.classList.add('fry');
        fry.style.left = Math.random()*100 + "vw";
        fry.style.animationDuration = (Math.random()*5 + 2) + "s";
        fry.style.animationDelay = Math.random()*5 + "s";

        const load_screen = document.querySelector(".not-loaded-body");
        load_screen.appendChild(fry);
    }
}

function load(){
    const loader = document.querySelector(".loader");
    loader.addEventListener('animationend', (event)=>{
        if(event.animationName === "loading"){
            console.log("HELLO");
            loader.classList.add('loader-after-loading');
        }
        else if(event.animationName === "loader-unfold"){
            console.log("2nd animation");
            const hap = document.querySelector(".to-add-happy-birthday-loading");
            bring_fries(40);
            hap.classList.remove("to-add-happy-birthday-loading");
            hap.classList.add("happy-birthday-loading");
            hap.addEventListener('animationend', ()=>{
                console.log("Typing Done");

                setTimeout(()=>{
                const load_screen = document.querySelector('.before-loading-div');
                load_screen.classList.add("fade-out-loading-screen")
                console.log("Fade-out");
                load_screen.addEventListener('animationend', ()=>{
                    const vee_port = document.querySelector(".vee-portrait-div");
                    const background = document.querySelector(".not-loaded-body")
                    background.classList.remove("not-loaded-body");
                    const background_img = document.querySelector(".background-video")
                    background_img.classList.remove("not-loaded");
                    background_img.classList.add("after-loading-background");
                    background.classList.add("bg-fade-in");
                    console.log(vee_port)
                    vee_port.classList.remove("not-loaded");
                    vee_port.classList.add("load-vee-port");
                    const head = document.querySelector(".not-loaded-header");
                    head.classList.remove("not-loaded");
                    head.classList.add("load-header");
                    load_screen.remove();

                    setTimeout(()=>{
                        document.querySelector('.topbar-container').classList.remove("not-loaded")
                        document.querySelector('.topbar-container').classList.add("fade-in-topbar")
                    })
                    setTimeout(()=>{
                        console.log("Firing")
                    }, 2000);

                    



                    }, {once:true})
                }, 1000);

            }, {once:true})

        }
    })
}

load();





setTimeout(5000);

