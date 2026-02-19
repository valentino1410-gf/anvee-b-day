const button = document.querySelector('.button')

button.addEventListener('click', ()=>{
    const bod = document.querySelector('.div');
    const head = document.createElement("h1");
    head.textContent = "Muuahhhhh!!";
    head.classList.add('top-text');

    const img = document.createElement('img');
    img.classList.add('jake');
    const src = document.createAttribute("src");
    src.value = 'Photos\\jake_kiss.png';
    img.setAttributeNode(src);
    const anv = document.querySelector('.him');
    const p =anv.parentNode;
    p.insertBefore(img, anv);

    const jake = document.querySelector('.jake');
    jake.classList.add('clicks');
    const parent = bod.parentNode;
    parent.insertBefore(head, bod);
}
)