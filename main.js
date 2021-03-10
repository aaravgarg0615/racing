
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "https://lh3.googleusercontent.com/HnA-MdzkgTbOhYaJrgcbQ66bOngeVd93TfQRqZDxWRjrOlL8tlFpcsDDqF_Q2YZEdemITg=s155";
car2_x = 10;
car2_y = 100;
background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";
function add() {
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground; 
    background_imgTag.src = background_image;  

    car1_ = new Image(); //defining a variable with a new image
    car1_imgTag.onload = uploacar1; // setting a function, onloading this variable
   car1_imgTag.src = car1_image;   // load image

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("up");
        }
        if(keyPressed == '40')
        {
            down();
            console.log("down");
        }
        if(keyPressed == '37')
        {
            left();
            console.log("left");
        }
        if(keyPressed == '39')
        {
            right();
            console.log("right");
        }
        
        if(keyPressed == '87')
        {
            up2();
            console.log("up2");
        }
        if(keyPressed == '83')
        {
            down2();
            console.log("down2");
        }
        if(keyPressed == '68')
        {
            left2();
            console.log("left2");
        }
        if(keyPressed == '39')
        {
            right2();
            console.log("right2");
        }
}



function down()
{
    if(car1_y <=500)
    {
        car1_y =car1_y+ 10;
        console.log("When down arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
         uploadrover();
    }
}
function left()
{
    if(car1_x >= 0)
    {
        car1_x =car1_x - 10;
        console.log("When left arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
         uploadcar1();
    }
}
function right()
{
    if(_x <= 700)
    {
        car1_x =car1_x + 10;
        console.log("When right arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
        uploadcar1();
   }
}
function down()
{
    if(car2_y <=500)
    {
        car2_y =car2_y+ 10;
        console.log("When down arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
        uploadBackground();
         uploadrover();
    }
}
function left()
{
    if(ca21_x >= 0)
    {
        car2_x =car2_x - 10;
        console.log("When left arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
        uploadBackground();
         uploadcar2();
    }
}
function right()
{
    if(car2_x <= 700)
    {
        car2_x =car2_x + 10;
        console.log("When right arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
        uploadBackground();
        uploadcar2();
   }
}
