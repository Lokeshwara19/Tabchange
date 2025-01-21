"use strict"


let button = document.querySelectorAll('button');


for(let i=0;i<button.length;i++){
    button[i].addEventListener('click',()=>{
        if(i==0){
            document.getElementById('image').src="history.jpg"
            document.getElementById('heading').innerText="History"
            document.getElementById('para').innerText="The history of mountains is the study of how mountains have formed and changed over time. The study of mountains includes the geological processes that formed them."
            button[0].classList.add('active')
            button[1].classList.remove('active')
            button[2].classList.remove('active')
        }
        else if(i==1){
            document.getElementById('image').src="vision.jpg";
            document.getElementById('heading').innerText="Vision";
            document.getElementById('para').innerText="Mountains are the world's “water towers,” providing 60-80% of all freshwater resources for our planet. At least half of the world's population depends on mountain ecosystem ."
            button[1].classList.add('active')
            button[0].classList.remove('active')
            button[2].classList.remove('active')
        }
        else if(i==2){
            document.getElementById('image').src="goals.jpg";
            document.getElementById('heading').innerText="Goals";
            document.getElementById('para').innerText="As a compound exercise that utilises multiple muscle groups in your whole body, mountain climbers are an effective way of strengthening your arms, back, shoulders, core and legs."
            button[2].classList.add('active')
            button[1].classList.remove('active')
            button[0].classList.remove('active')
        }
        
    })
}







