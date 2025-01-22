"use strict"
const tab = [
    {
        image:"history.jpg",
        title:"History",
        paragraph:"The history of mountains is the study of how mountains have formed and changed over time. The study of mountains includes the geological processes that formed them.",

    },
    {
        image:"vision.jpg",
        title:"Vision",
        paragraph:"Mountains are the world's “water towers,” providing 60-80% of all freshwater resources for our planet. At least half of the world's population depends on mountain ecosystem ."
    },
    {
        image:"goals.jpg",
        title:"Goals",
        paragraph:"As a compound exercise that utilises multiple muscle groups in your whole body, mountain climbers are an effective way of strengthening your arms, back, shoulders, core and legs."
    }
]

let button = document.querySelectorAll('button');
let photo = document.getElementById('image');
let heading = document.getElementById('heading');
let content = document.getElementById('para-content');

for(let i=0;i<button.length;i++){
    button[i].addEventListener("click",()=>{
        photo.src=tab[i].image
        heading.innerText=tab[i].title
        content.innerText=tab[i].paragraph
        button.forEach((a,index)=>{
            if(i==index){
                a.classList.add('active');
            }
            else{
                a.classList.remove('active');
            }
        })
    })
}