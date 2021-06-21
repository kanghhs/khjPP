
let nowIndex = 1; 

const allSlider = document.querySelector('#allSlider');

console.log(allSlider);

const Larrow = document.querySelector('#Larrow');
const Rarrow = document.querySelector('#Rarrow');

Larrow.addEventListener('click', moveLeft);
Rarrow.addEventListener('click', moveRight);



function moveR()
{
    allSlider.style.transform = 'translate(-700px)';
    nowIndex =3;
}

function moveL2()
{
   allSlider.style.transform ='translate(-350px)';
   nowIndex =2;
}

function moveL1()
 {
    allSlider.style.transform = 'translate(0px)';
    nowIndex =1;
 }


 function moveLeft()
 {
     
     if(nowIndex ==1)
     {
         nowIndex =1;
     }
     else
     {
         nowIndex --;
     }
     console.log("clickLeft!===" + nowIndex);
     moveSlider(nowIndex);
 }

 function moveRight()
 {
     if(nowIndex ==4)
     {
         nowIndex =4;
     }
     else
     {
         nowIndex ++;
     }
     console.log("clickRight!===" + nowIndex);
     moveSlider(nowIndex);
 }

 function moveSlider(index)
 {
    switch(index)
    {
        case 1: 
            moveL1();
        break;
        case 2:
            moveL2();
        break
        case 3: 
            moveR();
        break;
        case 4: 
            moveR1();
        break;
    }

 }