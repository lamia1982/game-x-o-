let gridItems=document.getElementsByClassName("square")
let currentTrun="X"
let gameIsFinished=false
let boardArray=["0","1","2","3","4","5","6","7","8"]
for (const item of gridItems)
    {
        item.addEventListener("click",function(){
            if(gameIsFinished){
                return
            }
           let value=item.getAttribute("value")
           let index=value-1
           if(boardArray[index]=="X" ||boardArray[index]=="O")
            {
                return
            }
           
           //filling the value visually 
           let squareContent=document.querySelector(`.square[value="${value}"]`)
            squareContent.innerHTML=currentTrun

            
                //filling the value logically
                
                boardArray[index]=currentTrun
                console.log(boardArray)

                evaluateBoard()

                if(currentTrun=="X")
                {
                    currentTrun="O"
                }else
                {
                    currentTrun="X"
                }

                document.getElementById("instruction").textContent=`${currentTrun}-turn`



        })
        function evaluateBoard()
        {
            // Row Wine
            if (
                (boardArray[0]==boardArray[1]&&boardArray[1]==boardArray[2]) ||
                (boardArray[3]==boardArray[4]&&boardArray[4]==boardArray[5]) ||
                (boardArray[6]==boardArray[7]&&boardArray[7]==boardArray[8]) ||

                //Column Wine
                (boardArray[0]==boardArray[3]&&boardArray[3]==boardArray[6]) ||
                (boardArray[1]==boardArray[4]&&boardArray[4]==boardArray[7]) ||
                (boardArray[2]==boardArray[5]&&boardArray[5]==boardArray[8]) ||
                //Diagnal

                (boardArray[0]==boardArray[4]&&boardArray[4]==boardArray[8]) ||
                (boardArray[2]==boardArray[4]&&boardArray[4]==boardArray[6]) 
            )
            {
                var winner=currentTrun=="O" ? "O":"X"
                gameIsFinished=true
                //alert(`${winner}won!`)
                alertify.alert(`${winner}won!`)
            }
            var isdraw=true
            for (square of boardArray){
                if(square !="X" && square !="O")
                    {
                        isdraw=false
                    }
            }
            if (isdraw)
                {
                    gameIsFinished=true
                    alert("drawn")
                }
        }
    }
    document.getElementById("reset-btn").addEventListener("click",function(){
        reset()
    })
    function reset(){
        //reseting the visual part 
        for(item of gridItems ){
            let value=item.getAttribute("value")
            let squareContent=document.querySelector(`.square[value="${value}"]`)
            squareContent.innerHTML=""

             boardArray=["0","1","2","3","4","5","6","7","8"]
        }
        gameIsFinished=false
        currentTrun="X"
        document.getElementById("instruction").innerText=`${currentTrun}-turn`
    }