const paths = [
    'Photos\\Moods\\hungry.jpg',
    'Photos\\Moods\\bite.jpg' , 
    'Photos\\Moods\\bored.jpg',
    'Photos\\Moods\\cutie.jpg',
    'Photos\\Moods\\fU.jpg',
    'Photos\\Moods\\ice.jpg',
    'Photos\\Moods\\monjathii.jpg',
    'Photos\\Moods\\papps.jpg',
    'Photos\\Moods\\Rider.jpg',
    'Photos\\Moods\\saree.jpg',
    'Photos\\Moods\\sleepy.jpg',
    'Photos\\Moods\\swing.jpg',
    'Photos\\Moods\\that smile.jpg',
    'Photos\\Moods\\wild.jpg',
]

const captions = [
    'Veshkunnu',
    'Biter',
    'boredddd',
    'Cutie piee',
    'Fuck U',
    'Mala Pann',
    'Monjathii',
    'Paparazzi',
    'Rider Life',
    'Midnight super model',
    'sleepy babyy',
    'Swinging cute',
    'EEEEEEEEEEE',
    'wildlife mind'
]

const left = document.querySelector(".left-arrow");
i=1;
left.addEventListener('click', ()=>{
    console.log("Left clicked");
    const div_box = document.querySelector(".content-div");
    div_box.classList.add("left-click");

    new_div = document.createElement('div');
    new_div.classList.add("content-div");
    new_div.classList.add("glass");

    const new_img =  document.createElement('img');
    const img_src = document.createAttribute('src');
    img_src.value = paths[i]
    new_img.classList.add('mood-image');
    new_img.setAttributeNode(img_src);
    new_div.appendChild(new_img);

    const small_div = document.createElement('div');
    small_div.classList.add("caption-div");
    const cap = document.createElement('div');
    cap.classList.add("caption");
    cap.innerHTML = captions[i];
    small_div.appendChild(cap);

    new_div.appendChild(small_div);

    console.log(new_div);

    new_div.classList.add("adding-left");
    left.after(new_div);


    i++;
    if(i>(captions.length-1)){
        i=0;
    }
})

