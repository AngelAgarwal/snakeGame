// game constants & variables
let direction ={ x:0, y:0}
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13,y: 15}
]
food =  {x: 6,y: 7}

// game functions
function main(ctime){
    window.requestAnimationFrame(main);
    console.log(ctime)
    if((ctime - lastPaintTime)/1000< 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();

}
function gameEngine(){
    // Part 1: Updating the snake array & food


    // part 2: display the snake and food
    //display the snake
    board.innerHTML ="";
    snakeArr.forEach((e, index)=>{
      snakeElement = document.createElement('div')
      snakeElement.style.gridRowStart = e.y;
      snakeElement.style.gridColoumStart = e.x;
      if(index === 0){
        snakeElement.classList.add('head')
      }
      else{
        snakeElement.classList.add('snake')
      }
     
      board.appendChild(snakeElement);
    });
   // display the snake
    
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColoumStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(snakeElement);


}










 // main logic starts here
window.requestAnimationFrame(main)
winsdow.addEventListener('keydown',e =>{
   inputDir ={x:0, y:1}// start game
   switch(e.key){
       case "ArrowUp":
          console.log("arrowUp")
           break;
       default:
           break;  

           case "ArrowDown":
            console.log("arrowDown")
             break;
         default:
             break; 
             
             case "ArrowRight":
                console.log("arrowRight")
                 break;
             default:
                 break;  

                 case "ArrowLeft":
                    console.log("arrowLeft")
                     break;
                 default:
                     break;  
   }
})