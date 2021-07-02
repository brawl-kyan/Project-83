
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    var new_width = screen.width - 70;
    var new_hieght = screen.height - 300;
    var kyan = screen.width;
    


 //color = document.getElementById("color").value;
   
    if(kyan < 992){
      document.getElementById("myCanvas").width= new_width;
        document.getElementById("myCanvas").height = new_hieght;    
        }
        last_position_x = "";
last_position_y = "";
canvas.addEventListener("mousedown",my_down);

function my_down(e)
{
    
m_event = "mouseDown";
console.log(m_event);   
}
canvas.addEventListener("mouseup",my_up);

function my_up(e)
{
m_event = "mouseup";
console.log(m_event);   
}
canvas.addEventListener("mouseleave",my_leave);

function my_leave(e)
{
m_event = "mouseleave";
console.log(m_event);   
}
canvas.addEventListener("mousemove",my_move);
function my_move(e){
    color=document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    console.log(width_of_line);
    console.log(color);
current_x = e.clientX - canvas.offsetLeft;
current_y = e.clientY - canvas.offsetTop;

if (m_event == "mouseDown"){
ctx.beginPath(); 
ctx.strokestyle = color;
ctx.lineWidth = width;

console.log("Last position of x and y");
console.log("x =" + last_position_x + "y =" + last_position_y);
ctx.moveTo(last_position_x,last_position_y);

console.log("Current position of x and y");
console.log("x =" + current_x + "y =" + current_y);
ctx.lineTo(current_x,current_y);
ctx.stroke();
}
last_position_x = current_x;
last_position_y = current_y;
}


    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
    console.log("my touchstart")
    //color=document.getElementById("color").value;
   // width_of_line = document.getElementById("width").value;
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        console.log("my touchmove")
        current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

  
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_x; 
        last_position_of_y = current_position_of_y;
    }
    function clearArea(){
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);   
    }
