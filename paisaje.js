
function degradado_cielo()
{
	loadPixels();


	for (var y = 0; y < width ; y++)
	{
		for (var x = 0; x < height; x++)
		{

				var c=color(y-50,18,y-50);// color fondo
				var c2= color(242, y-91, 68);// color sol
				var c3=color(217, y-229, 115); // color rayas sol
				var c4=color(0,0,0);
				var c5=color(220,y-200,y+100);
				var c6=color(128, 21, 138 );
				var c7=color(y-10, 107, y-228);
				var c8=color(y-170,0,100);
				
				

			//-------------------------------


			if (y<330){set(x,y,c)}	// fondo

			if (((x-250)*(x-250))+((y-300)*(y-300))<22000 && y<330){set(x,y,c2)} // sol

			if ((Math.cos(y*0.3))*4<0.2 && ((x-250)*(x-250))+((y-300)*(y-300))<22000 && y <330){set(x,y,c3)}

			if ( y > (-Math.abs(20*Math.sin(x*0.03))+230)+100){set(x,y,c6)}

			if ( y > (-Math.abs(18*Math.sin(x*0.04))+230)+100){set(x,y,c5)}

			if (y>330){set(x,y,c4)}	

			if (y >(-Math.abs(40*Math.cos(x*0.002))+300)+100){set(x,y,c7)}

			if ( y>(-Math.abs(200*Math.sin(x*0.003))+260)+300){set(x,y,c8)}

		}

	}
	updatePixels();
}	



//-----------------------------------------------------------
function draw() 
{
  
  degradado_cielo();
  translate(100,330);
  strokeWeight(5);
  stroke(255,255,255);
  arbolito(200,0);
  translate(301,200);
  strokeWeight(5);
  stroke(255,255,255);
  arbolito(200,0);
  translate(-150,-50)
  generate();

}
//---------------------------------------------------------

//-------------------------------------------------------
function arbolito(L,a)
 {	

 	line(0,0,0,-L);
 	translate(0,-L);
 	strokeWeight(2);

 	if (L>1) 
 	{
 	 if (L>(L/4))

 	 	{ stroke(30,217,36);

 		if (a==0) 
 		{

	 		push();
	 		rotate(radians(-120));
	 		arbolito((L/3),1);
	 		pop();

	 		push();
	 		rotate(radians(120));
	 		arbolito((L/3),1);
	 		pop();
	 				
	 		push();
	 		rotate(radians(-30));
	 		arbolito((L/3),1);
	 		pop();
	 		
	 		push();
	 		rotate(radians(30));
	 		arbolito((L/3),1);
	 		pop();

	 		push();
	 		rotate(radians(-80));
	 		arbolito((L/3),1);
	 		pop();
	 		
	 		push();
	 		rotate(radians(80));
	 		arbolito((L/3),1);
	 		pop();

 		}else
 		{
	 		push();
	 		rotate(radians(-45));
	 		arbolito((L/3),0);
	 		pop();

	 		push();
	 		rotate(radians(45));
	 		arbolito((L/3),0);
	 		pop();	
 		
 		}
 	 }
 	}
 }
 //-------------------------------------------------------------

// variables A y B
// Axioma A
// reglas (A > AB) ,(B>A)


//POR DONDE VA A EMPEZAR 
var Axioma = "F";
// QUE VA A HACER EN CADA CICLO
var L =10;
var reglas = [];
reglas [0] = 
{
	a:"F",
	b:"[+F-F+F--F[-F+--F+--F]F]"
	//"FF+[+F-F-F]-[-F+F+F]"
} 

///////////////////////////////////////
var sentencia = Axioma;

function generate ()
{
	var siguiente="";
	for (var i = 0; i < sentencia.length; i++) 
	{
		var actual = sentencia.charAt(i);
		var encontrar = false;
		for (var j = 0; j < reglas.length; j++) 
		{
			if (actual == reglas[j].a)
			{
				encontrar = true;
				siguiente += reglas[j].b;
				break; 
			}

		}
	if (!encontrar) 
	{
		siguiente+= actual;
	}	

	}
	sentencia = siguiente;
	
	dibujar(); 
}
////////////////////////////////

function dibujar()
{
	

	stroke(255,255,255);
	strokeWeight(3);

	for (var i = 0; i < sentencia.length; i++) 
	{
		var actual = sentencia.charAt(i);
		if (actual=="F") 
		{
			line (0,0,0,-L);
			translate(0,-L);

		}else if (actual=="+")

		{
			rotate(radians(30));

		}else if (actual=="-")

		{
			rotate(radians(-30));

		}else if (actual=="[")

		{
			push();

		}else if (actual=="]")

		{
			pop();
		}

	}
}
//------------------------------------------------------------
function setup() 
{
	createCanvas(500, 500);
	pixelDensity(1);


}