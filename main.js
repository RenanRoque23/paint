var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;
var width = screen.width;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    var newWidth=screen.width - 70;
    var newHeight=screen.height -300;

    var width=screen.width

    color = "black";
    widthOfLine = 2;
if (width < 992) {
    document.getElementById("myCanvas").width=newWidth;
    document.getElementById("myCanvas").height=newHeight;
    document.body.style.overflow = "hidden";
}
    //Defina as variável "newWidth" e "newHeight" para armazenar a width e height da nova tela.


    /*Se o tamanho da tela for menos que 992 (significa 992px), então mude a width e height do canvas para a nova width e height*/

    canvas.addEventListener("touchStart", my_touchStart);  
    
    //Mude o evento 'mousedown' para o evento 'touchstart'
      
    //Mude a função para 'my_touchstart'  
    function my_touchStart(e)
    {
        //Coloque my_toustart no console.
        
        console.log("my_touchStart");

        //Início da Atividade Adicional
       color = document.getElementById("color").value;
       widthOfLine = document.getElementById("widthOfLine").value;
        //Fim da Atividade Adicional
        lastPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
        lastPositionOfTouchy = e.touches[0].clientY - canvas.offsetTop;
        //Atualize lastPositionOfTouchX e lastPositionOfTouchY aqui.
       



    }

    //Substitua o evento 'mousemove' pelo evento 'touchmove'.
    canvas.addEventListener("touchMove", my_touchMove);
    //Substitua a função "my_mousemove()" com a função "my_touchmove()".
    function my_touchMove(e)
    {
        //Coloque a função "my_touchMove" no console.
        console.log("my_touchMove");

        /*Atualize a "currentPositionOfTouchX" e "currentPositionOfTouchY" 
        com os pontos tocados no canvas.*/
        currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
        currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
    
        console.log("Ultima posicao de coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);
    
        console.log("Posicao atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);
        ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
        ctx.stroke();
    
        lastPositionOfX = currentPositionOfTouchX; 
        lastPositionOfY = currentPositionOfTouchY;
    }

    //Atividade Adicional para limpar o canvas.
   function clearArea() {
    ctx.clearRect(0,0, ctx.canvas.width,  ctx.canvas.height);
   }
    

