const compliments = [
    "Your intelligence intimidates the syllabus.",
    "Pune truly sent its best to Calicut.",
    "You have the kind of smile that pauses time.",
    "Seeing you is the best part of my day, every single day.",
    "Smart, beautiful, and kind—you really won the lottery.",
    "The world is chaotic, but you make everything feel calm.",
    "So proud of everything you are achieving",
    "You have a perspective on life that is simply brilliant.",
    "Your laugh is my absolute favorite sound.",
    "You look stunning, even in 8 AM labs.",
    "I love how passionate you get about the things you love.",
    "Happy Birthday, Anvee. You deserve the universe.",
    "You're Soooooooo Cuteeee. AAAAA",
    "Sometimes, I just want a bite",
    "U R the karimkal",
    "U R the kodumkaat",
    "U R The pwoli",
    "I Love U",
    "Best Girlfriend everrrrrr!!!!!",
    "The prettiest...........",
    "I love u more than prawns"
];


const dia = document.querySelector(".dialogue");
console.log("JAKEEE")
const button = document.querySelector(".truth-button");
button.addEventListener('click', ()=>{
    dia.innerHTML = compliments[Math.floor(Math.random()*compliments.length)]
})
