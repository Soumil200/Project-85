canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")

var greencar_width = 75;
var greencar_height = 100;

var background_image = "parkingLot.jpg";
var greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
	background_image = new Image();
	background_image.onload = uploadBackground;
	background_image.src = background_image;

	greencar_image = new Image();
	greencar_image.onload = uploadgreencar;
	greencar_image.src = greencar_image
}

function uploadBackground() {
	ctx.drawImage(background_image , 0 , 0 , canvas.width , canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_image , greencar_x , greencar_y , greencar_width , greencar_height);
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

		if(keyPressed == '65')
		{
			left();
			console.log("a");
		}

		if(keyPressed == '68')
		{
			right();
			console.log("d");
		}

		if(keyPressed == '83')
		{
			down();
			console.log("s");
		}

		if(keyPressed == '87')
		{
			up();
			console.log("w");
		}
}

function up()
{
	if(greencar_y > 0){
		greencar_y = greencar_y - 10;
		console.log ("When Up Arrow Is Pressed , x = " + greencar_x + " | y = " + greencar_y +);	
		uploadBackground();
		uploadgreencar();
	} 
}

function down()
{
	if(greencar_y > 300){
		greencar_y = greencar_y + 10;
		console.log ("When Down Arrow Is Pressed , x = " + greencar_x + " | y = " + greencar_y +);	
		uploadBackground();
		uploadgreencar();
	}	
}

function left()
{
	if(greencar_y > 0){
		greencar_y = greencar_y - 10;
		console.log ("When Left Arrow Is Pressed , x = " + greencar_x + " | y = " + greencar_y +);	
		uploadBackground();
		uploadgreencar();	
	}	
}

function right()
{
	if(greencar_y > 700){
		greencar_y = greencar_y + 10;
		console.log ("When Right Arrow Up Is Pressed , x = " + greencar_x + " | y = " + greencar_y +);	
		uploadBackground();
		uploadgreencar();
	}	
}