var Game = {
}

var snd = new Audio("sounds/laser.mp3");
var snd2 = new Audio("sounds/torpedo.mp3");
var snd3 = new Audio("sounds/crash.mp3");
var snd4 = new Audio("sounds/explos.mp3");

var canvas;
var ctx;
canvas = document.getElementById('game');
ctx = canvas.getContext('2d');
var canvasWidth;
var canvasHeight;
var counter = 0;
var endcounter = 0;
var pbox = new Array();
var perbox = new Array();
var perboxfree = new Array();
var pelbox = new Array();
var pelboxfree = new Array();
var pboxfree = new Array();
var e1box = new Array();
var e2box = new Array();
var e3box = new Array();
var e4box = new Array();
var pelbox = new Array();
var e1boxfree = new Array();
var e2boxfree = new Array();
var e3boxfree = new Array();
var e4boxfree = new Array();

Game.level = -1;
Game.section = 1;

Game.playerrengx = Game.pposx-25;
Game.playerrengy = Game.pposy+10;
Game.playerlengx = Game.pposx-25;
Game.playerlengy = Game.pposy-10;
Game.pshield = 50;
Game.playereng1posx = 100;
Game.playereng1posy = 100;
Game.playereng2posx = 100;
Game.playereng2posy = 100;
Game.pepower = 2;
Game.pdead = false;
Game.pinteg = 0;
Game.b4pinteg = Game.pinteg;
Game.perinteg = 0;
Game.pelinteg = 0;
Game.pspeedy = 0;
Game.pspeedx = 0;
Game.pemess = "Full Power";

Game.e1speedy = 0;
Game.e1speedx = 0;
Game.e1shield = 30;
Game.playerspeedcounter = 0;
Game.pcanshoot = true;
Game.pcanshootlaser = true;
Game.plaserpower = 500;
Game.e1canshoot = true;
Game.pbulletcounter = 0;
Game.e1bulletcounter = 0;
Game.e1integ = 0;
Game.e1dead = false;

Game.e2canshoot = true;
Game.e2bulletcounter = 0;
Game.e2speedy = 0;
Game.e2speedx = 0;
Game.e2dead = false;
Game.e3canshoot = true;
Game.e3bulletcounter = 0;
Game.e3speedy = 0;
Game.e3speedx = 0;
Game.e3dead = false;
Game.e4canshoot = true;
Game.e4bulletcounter = 0;
Game.e4speedy = 0;
Game.e4speedx = 0;
Game.e4dead = false;

var as001box = new Array();
var astpboxfree = new Array();
var as002box = new Array();
var as003box = new Array();
var as004box = new Array();
var as011box = new Array();
var as012box = new Array();
var as013box = new Array();
var as014box = new Array();
var as021box = new Array();
var as022box = new Array();
var as023box = new Array();
var as024box = new Array();
var as031box = new Array();
var as032box = new Array();
var as033box = new Array();
var as034box = new Array();
var as041box = new Array();
var as042box = new Array();
var as043box = new Array();
var as044box = new Array();
var as051box = new Array();
var as052box = new Array();
var as053box = new Array();
var as054box = new Array();

Game.background = new Image();	

{Game.player = 
[	
	{
		"att" : {"posx": 8, "posy": -20, "deg": 0}
	},
	{
		"att" : {"posx": 4, "posy": -20, "deg": 0}
	},
	{
		"att" : {"posx": 0, "posy": -20, "deg": 0}
	},
	{
		"att" : {"posx": -4, "posy": -20, "deg": 0}
	},
	{
		"att" : {"posx": -8, "posy": -20, "deg": 0}
	},
	{
		"att" : {"posx": 12, "posy": -18, "deg": 45}
	},
	{
		"att" : {"posx": 14, "posy": -16, "deg": 45}
	},
	{
		"att" : {"posx": 16, "posy": -14, "deg": 45}
	},
	{
		"att" : {"posx": 18, "posy": -12, "deg": 45}
	},
	{
		"att" : {"posx": 20, "posy": -8, "deg": 90}
	},
	{
		"att" : {"posx": 20, "posy": -4, "deg": 90}
	},
	{
		"att" : {"posx": 20, "posy": -0, "deg": 90}
	},
	{
		"att" : {"posx": 20, "posy": 4, "deg": 90}
	},
	{
		"att" : {"posx": 20, "posy": 8, "deg": 90}
	},
	{
		"att" : {"posx": 20, "posy": 12, "deg": 90}
	},
	{
		"att" : {"posx": 18, "posy": 14, "deg": -45}
	},
	{
		"att" : {"posx": 16, "posy": 16, "deg": -45}
	},
	{
		"att" : {"posx": 14, "posy": 18, "deg": -45}
	},
	{
		"att" : {"posx": 12, "posy": 20, "deg": -45}
	},
	{
		"att" : {"posx": 8, "posy": 20, "deg": 0}
	},
	{
		"att" : {"posx": 4, "posy": 20, "deg": 0}
	},
	{
		"att" : {"posx": 0, "posy": 20, "deg": 0}
	},
	{
		"att" : {"posx": -4, "posy": 20, "deg": 0}
	},
	{
		"att" : {"posx": -8, "posy": 20, "deg": 0}
	},
	{
		"att" : {"posx": -12, "posy": 20, "deg": 45}
	},
	{
		"att" : {"posx": -14, "posy": 18, "deg": 45}
	},
	{
		"att" : {"posx": -16, "posy": 16, "deg": 45}
	},
	{
		"att" : {"posx": -18, "posy": 14, "deg": 45}
	},
	{
		"att" : {"posx": -20, "posy": 12, "deg": 90}
	},
	{
		"att" : {"posx": -20, "posy": 8, "deg": 90}
	},
	{
		"att" : {"posx": -20, "posy": 4, "deg": 90}
	},
	{
		"att" : {"posx": -20, "posy": 0, "deg": 90}
	},
	{
		"att" : {"posx": -20, "posy": -4, "deg": 90}
	},
	{
		"att" : {"posx": -20, "posy": -8, "deg": 90}
	},
	{
		"att" : {"posx": -12, "posy": -18, "deg": -45}
	},
	{
		"att" : {"posx": -14, "posy": -16, "deg": -45}
	},
	{
		"att" : {"posx": -16, "posy": -14, "deg": -45}
	},
	{
		"att" : {"posx": -18, "posy": -12, "deg": -45}
	},
]}
{Game.playereng =
[	
	{
		"att" : {"posx": -4, "posy": 4, "deg": 0}
	},
	{
		"att" : {"posx": -8, "posy": 4, "deg": 0}
	},
	{
		"att" : {"posx": -12, "posy": 4, "deg": 0}
	},
	{
		"att" : {"posx": -4, "posy": -4, "deg": 0}
	},
	{
		"att" : {"posx": -8, "posy": -4, "deg": 0}
	},
	{
		"att" : {"posx": -12, "posy": -4, "deg": 0}
	},
	{
		"att" : {"posx": -4, "posy": 2, "deg": 90}
	},
	{
		"att" : {"posx": -4, "posy": -2, "deg": 90}
	},	
	{
		"att" : {"posx": -12, "posy": 2, "deg": 90}
	},
	{
		"att" : {"posx": -12, "posy": -2, "deg": 90}
	},	
]
}

{Game.enemy1 = 
[	
	{
		"att" : {"posx": 16, "posy": 14, "deg": 90}
	},
	{
		"att" : {"posx": 16, "posy": 10, "deg": 90}
	},
	{
		"att" : {"posx": 16, "posy": 6, "deg": 90}
	},
	{
		"att" : {"posx": 16, "posy": 2, "deg": 90}
	},
	{
		"att" : {"posx": 16, "posy": -2, "deg": 90}
	},
	{
		"att" : {"posx": 16, "posy": -6, "deg": 90}
	},
	{
		"att" : {"posx": 16, "posy": -10, "deg": 90}
	},
	{
		"att" : {"posx": 16, "posy": -14, "deg": 90}
	},	
	{
		"att" : {"posx": 12, "posy": 16, "deg": 0}
	},
	{
		"att" : {"posx": 12, "posy": -16, "deg": 0}
	},
	{
		"att" : {"posx": 8, "posy": 14, "deg": 45}
	},
	{
		"att" : {"posx": 8, "posy": -14, "deg": -45}
	},
	{
		"att" : {"posx": 4, "posy": 12, "deg": 0}
	},
	{
		"att" : {"posx": 4, "posy": -12, "deg": 0}
	},
	{
		"att" : {"posx": 0, "posy": 10, "deg": 45}
	},
	{
		"att" : {"posx": 0, "posy": -10, "deg": -45}
	},
	{
		"att" : {"posx": -4, "posy": 8, "deg": 0}
	},
	{
		"att" : {"posx": -4, "posy": -8, "deg": 0}
	},
	{
		"att" : {"posx": -8, "posy": 8, "deg": 0}
	},
	{
		"att" : {"posx": -8, "posy": -8, "deg": 0}
	},
	{
		"att" : {"posx": -12, "posy": 8, "deg": 0}
	},
	{
		"att" : {"posx": -12, "posy": -8, "deg": 0}
	},
	{
		"att" : {"posx": -16, "posy": 6, "deg": 45}
	},
	{
		"att" : {"posx": -16, "posy": -6, "deg": -45}
	},
	{
		"att" : {"posx": -18, "posy": -2, "deg": 90}
	},
	{
		"att" : {"posx": -18, "posy": 2, "deg": 90}
	},
	
]
}

{Game.enemy2 = 
[	
	{
		"att" : {"posx": -8, "posy":-8, "deg": 0}
	},	
	{
		"att" : {"posx": -4, "posy":-8, "deg": 0}
	},	
	{
		"att" : {"posx": 0, "posy":-8, "deg": 0}
	},
	{
		"att" : {"posx": 4, "posy":-8, "deg": 0}
	},
	{
		"att" : {"posx": 8, "posy":-8, "deg": 0}
	},
	{
		"att" : {"posx": 10, "posy":-4, "deg": 90}
	},
	{
		"att" : {"posx": 10, "posy":0, "deg": 90}
	},
	{
		"att" : {"posx": 10, "posy":4, "deg": 90}
	},
	{
		"att" : {"posx": 10, "posy":8, "deg": 90}
	},
	{
		"att" : {"posx": 8, "posy":10, "deg": 0}
	},
	{
		"att" : {"posx": 4, "posy":10, "deg": 0}
	},
	{
		"att" : {"posx": 0, "posy":10, "deg": 0}
	},
	{
		"att" : {"posx": -4, "posy":10, "deg": 0}
	},
	{
		"att" : {"posx": -8, "posy":10, "deg": 0}
	},
	{
		"att" : {"posx": -10, "posy":6, "deg": -45}
	},
	{
		"att" : {"posx": -8, "posy":4, "deg": -45}
	},
	{
		"att" : {"posx": -6, "posy":2, "deg": -45}
	},	
	{
		"att" : {"posx": -6, "posy":0, "deg": 45}
	},
	{
		"att" : {"posx": -8, "posy":-2, "deg": -45}
	},		
	{
		"att" : {"posx": -10, "posy":-4, "deg": -45}
	},		
]
}

{Game.asteroid = 
[	
	{
		"att" : {"posx": 2, "posy":-6, "deg": 0}
	},	
	{
		"att" : {"posx": 4, "posy":-4, "deg": 45}
	},	
	{
		"att" : {"posx": 6, "posy":-2, "deg": 90}
	},	
	{
		"att" : {"posx": 6, "posy":2, "deg": 90}
	},
	{
		"att" : {"posx": 4, "posy":4, "deg": 90}
	},
	{
		"att" : {"posx": 2, "posy":6, "deg": 90}
	},
	{
		"att" : {"posx": -2, "posy":6, "deg": 0}
	},	
	{
		"att" : {"posx": -4, "posy":4, "deg": 45}
	},	
	{
		"att" : {"posx": -6, "posy":2, "deg": 90}
	},
	{
		"att" : {"posx": -6, "posy":-2, "deg": 90}
	},
	{
		"att" : {"posx": -4, "posy":-4, "deg": 90}
	},
	{
		"att" : {"posx": -2, "posy":-6, "deg": 90}
	},
]
}

$(function() {	

	Game.world = createWorld();
	console.log("The world is created. ",Game.world);	
		
		for (var i = 0; i < Game.player.length; i++){
			pbox[i] = create1box(Game.pposx + Game.player[i].att.posx, Game.pposy + Game.player[i].att.posy, 2, 1, Game.player[i].att.deg);
			pboxfree[i] = false;
		}	
		
	Game.ground1 = createGround(400, 50, 400, 1,0, 0);	
	Game.pbullet = createCircle(1000, 1000, 2, 0);
	
	buildWorld(Game.level,Game.section);

	canvasWidth = parseInt(canvas.width);
	canvasHeight = parseInt(canvas.height);
	
	$(document).keydown(function(e) {	
		if(e.keyCode == 87 && Game.pspeedy > -20 && Game.pdead == false){
			Game.pspeedy = Game.pspeedy - Game.pepower;			
		}
		if(e.keyCode == 83 && Game.pspeedy < 20 && Game.pdead == false){
			Game.pspeedy = Game.pspeedy + Game.pepower;			
		}
		if(e.keyCode == 68 && Game.pspeedx < 20 && Game.pdead == false){
			Game.pspeedx = Game.pspeedx + Game.pepower;			
		}
		if(e.keyCode == 65 && Game.pspeedx > - 20 && Game.pdead == false){
			Game.pspeedx = Game.pspeedx - Game.pepower;
		}
		if(e.keyCode == 32 && Game.pcanshoot == true && Game.pdead == false){
			Game.pbullet.SetCenterPosition(new b2Vec2(Game.pwdbox.GetCenterPosition().x + 30, Game.pwdbox.GetCenterPosition().y),0);
			Game.pbullet.SetLinearVelocity(new b2Vec2(100,0));
			Game.pcanshoot = false;
			snd2.play();
		}		
		if(e.keyCode == 13 && Game.level < 0){
			Game.level++;
			buildWorld(Game.level, Game.section);
		}
	});		
	$(document).mousedown(function(e) {
		var canvasPosition = $(this).offset();
		var mouseX = e.offsetX - Game.pwdbox.GetCenterPosition().x + 30;
		var mouseY = e.offsetY - Game.pwdbox.GetCenterPosition().y;
		if(Game.pcanshootlaser == true && Game.pdead == false){
			Game.plaser1.SetCenterPosition(new b2Vec2(Game.pwdbox.GetCenterPosition().x + 30,Game.pwdbox.GetCenterPosition().y),0);		
			Game.plaser1.SetLinearVelocity(new b2Vec2(Game.plaserpower,Game.plaserpower*mouseY/mouseX));
			Game.pcanshootlaser = false;		
			Game.plaserpower = 200;
			snd.play();
		}
	});
	step();
});

function step() {	
	
	console.log(Game.level);
	Game.world.Step(1.0/60, 1);
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	drawingImages();
	drawWorld(Game.world, ctx);			
	ctx.fillStyle = 'white';
	
	/*if (Game.level == -1){
		drawingImages();
	}*/
	
	
	
	setTimeout(step, 10);	
	counter++;		
	Game.playerspeedcounter++;
	
	/*if(counter % 5 == 0)
	{
		for (var i = 0; i < Game.player.length; i++){
			if (pboxfree[i] == false){
				pbox[i].SetCenterPosition(new b2Vec2 (Game.pposx + Game.player[i].att.posx, Game.pposy + Game.player[i].att.posy), Game.player[i].att.deg);									
			}
		}		
	}*/
	
	//col detection	
	if(Game.level >= 0 && Game.level < 5){
		// player code	
		Game.pinteg = 0;
		Game.pinteg = ColDetect(Game.pwdbox, Game.player, pbox, pboxfree, Game.pinteg);
		if(Game.b4pinteg < Game.pinteg){
			snd3.play();
			Game.b4pinteg = Game.pinteg;
		}
		//ColDetect for both engines
		if (Game.pwdbox.GetCenterPosition().x - Game.prengbox.GetCenterPosition().x - 25 > 2 || Game.pwdbox.GetCenterPosition().x - Game.prengbox.GetCenterPosition().x - 25 < -2){
			Game.prengboxfree = true;
		}
		if (Game.pwdbox.GetCenterPosition().y - Game.prengbox.GetCenterPosition().y + 10 > 2 || Game.pwdbox.GetCenterPosition().y - Game.prengbox.GetCenterPosition().y + 10 < -2){
			Game.prengboxfree = true;
		}
		if (Game.prengbox.GetAngularVelocity() > 2 || Game.prengbox.GetAngularVelocity() < -2){
			Game.prengboxfree = true;
		}
		if (Game.pwdbox.GetCenterPosition().x - Game.plengbox.GetCenterPosition().x - 25 > 2 || Game.pwdbox.GetCenterPosition().x - Game.plengbox.GetCenterPosition().x - 25 < -2){
			Game.plengboxfree = true;
		}
		if (Game.pwdbox.GetCenterPosition().y - Game.plengbox.GetCenterPosition().y - 10 > 2 || Game.pwdbox.GetCenterPosition().y - Game.plengbox.GetCenterPosition().y - 10 < -2){
			Game.plengboxfree = true;
		}
		if (Game.plengbox.GetAngularVelocity() > 2 || Game.plengbox.GetAngularVelocity() < -2){
			Game.plengboxfree = true;		
		}
		//Move the Ship
		Game.pwdbox.SetLinearVelocity(new b2Vec2(Game.pspeedx,Game.pspeedy));	
		MoveShip(pbox, pboxfree, Game.pspeedx, Game.pspeedy);
		if (Game.prengboxfree == false){
			Game.prengbox.SetLinearVelocity(new b2Vec2(Game.pspeedx,Game.pspeedy));
		}
		if (Game.plengboxfree == false){
			Game.plengbox.SetLinearVelocity(new b2Vec2(Game.pspeedx,Game.pspeedy));
		}
		MoveShip(perbox, perboxfree, Game.pspeedx, Game.pspeedy);
		MoveShip(pelbox, pelboxfree, Game.pspeedx, Game.pspeedy);	
		
		//bullet logic
		if (Game.pbullet.GetCenterPosition().x > 760 || Game.pbullet.GetCenterPosition().y < 55 || Game.pbullet.GetCenterPosition().y > 435 || Game.pbulletcounter > 400){
			Game.pbullet.SetCenterPosition(new b2Vec2(1000, 1000),0);
			Game.pbullet.SetLinearVelocity(new b2Vec2(0,0));
			Game.pcanshoot = true;
			Game.pbulletcounter = 0;
		}	
		if (Game.pcanshoot == false)
		{
			Game.pbulletcounter++;
		}	
		if (Game.pcanshoot == false){
			if (Game.pbullet.GetCenterPosition().y - Game.e1posy < 0 && Game.pbullet.GetLinearVelocity().y > -50){
				Game.pbullet.ApplyForce(new b2Vec2(0,Game.pbullet.GetMass()*20), Game.pbullet.GetCenterPosition());			
			}
			if (Game.pbullet.GetCenterPosition().y - Game.e1posy > 0 && Game.pbullet.GetLinearVelocity().y < 50){
				Game.pbullet.ApplyForce(new b2Vec2(0,-Game.pbullet.GetMass()*20), Game.pbullet.GetCenterPosition());			
			}		
		}
		
		//laser logic 
		if (Game.plaser1.GetLinearVelocity().x < 100 && Game.pcanshootlaser == false || Game.plaser1.GetCenterPosition().y < 50 || Game.plaser1.GetLinearVelocity().y > 450){
			Game.plaser1.SetCenterPosition(new b2Vec2(1000,1020),0);
			Game.plaser1.SetLinearVelocity(new b2Vec2(0,0));
			Game.pcanshootlaser = true;
		}		
		//shield logic
		//WeaponShieldExchange(Game.e1bullet, Game.pwdbox, Game.pshield, Game.e1canshoot, 10);
		if (Game.level == 1){
			if (Math.pow(Game.e1bullet.GetCenterPosition().x - Game.pwdbox.GetCenterPosition().x, 2) + Math.pow(Game.e1bullet.GetCenterPosition().y - Game.pwdbox.GetCenterPosition().y, 2) < Math.pow(Game.pshield,2)){					
				Game.e1bullet.SetCenterPosition(new b2Vec2(1020, 1020),0);
				Game.e1bullet.SetLinearVelocity(new b2Vec2(0,0));
				Game.e1canshoot = true;
				Game.pshield = Game.pshield - 10;
			}	
		}
		else if (Game.level == 2){
			if (Math.pow(Game.e2bullet.GetCenterPosition().x - Game.pwdbox.GetCenterPosition().x, 2) + Math.pow(Game.e2bullet.GetCenterPosition().y - Game.pwdbox.GetCenterPosition().y, 2) < Math.pow(Game.pshield,2)){					
				Game.e2bullet.SetCenterPosition(new b2Vec2(1020, 1020),0);
				Game.e2bullet.SetLinearVelocity(new b2Vec2(0,0));
				Game.odcanshoot = true;
				Game.pshield = Game.pshield - 5;
			}	
			if (Math.pow(Game.e3bullet.GetCenterPosition().x - Game.pwdbox.GetCenterPosition().x, 2) + Math.pow(Game.e3bullet.GetCenterPosition().y - Game.pwdbox.GetCenterPosition().y, 2) < Math.pow(Game.pshield,2)){					
				Game.e3bullet.SetCenterPosition(new b2Vec2(1020, 1020),0);
				Game.e3bullet.SetLinearVelocity(new b2Vec2(0,0));
				Game.odcanshoot = true;
				Game.pshield = Game.pshield - 5;
			}	
			if (Math.pow(Game.e4bullet.GetCenterPosition().x - Game.pwdbox.GetCenterPosition().x, 2) + Math.pow(Game.e4bullet.GetCenterPosition().y - Game.pwdbox.GetCenterPosition().y, 2) < Math.pow(Game.pshield,2)){					
				Game.e4bullet.SetCenterPosition(new b2Vec2(1020, 1020),0);
				Game.e4bullet.SetLinearVelocity(new b2Vec2(0,0));
				Game.odcanshoot = true;
				Game.pshield = Game.pshield - 5;
			}	
		}
		else if (Game.level == 4){
			if (Math.pow(Game.odbullet.GetCenterPosition().x - Game.pwdbox.GetCenterPosition().x, 2) + Math.pow(Game.odbullet.GetCenterPosition().y - Game.pwdbox.GetCenterPosition().y, 2) < Math.pow(Game.pshield,2)){					
				Game.odbullet.SetCenterPosition(new b2Vec2(1020, 1020),0);
				Game.odbullet.SetLinearVelocity(new b2Vec2(0,0));
				Game.odcanshoot = true;
				Game.pshield = Game.pshield - 25;
			}	
		}
		if(Game.pshield < 50 && counter % 100 == 0 && Game.plaserpower == 500){
			Game.pshield++;		
		}
		if(Game.pcanshootlaser == true && Game.plaserpower < 500){
			Game.plaserpower++;
		}	
		if (Game.level >= 0){
			Game.perinteg = 0;
			Game.pelinteg = 0;
			Game.perinteg = ColDetect(Game.prengbox, Game.playereng, perbox, perboxfree, Game.perinteg);
			Game.pelinteg = ColDetect(Game.plengbox, Game.playereng, pelbox, pelboxfree, Game.pelinteg);		
		}

		if ((Game.playereng.length - Game.perinteg) / Game.playereng.length < .5 || (Game.playereng.length - Game.pelinteg) / Game.playereng.length < .5){
			Game.pepower = 1;	
			Game.pemess = "Half Power";
			if ((Game.playereng.length - Game.perinteg) / Game.playereng.length < .5 && (Game.playereng.length - Game.pelinteg) / Game.playereng.length < .5){
			Game.pepower = 0;
			Game.pemess = "Failure";
			}
		}
		else{
			Game.pemess = "Full Power";
		}		
	}
	//enemy1 code
	if(Game.level == 1){
		console.log(Game.e1bullet.GetCenterPosition().x);
		Game.e1integ = 0;
		Game.e1integ = ColDetect (Game.e1wdbox, Game.enemy1, e1box, e1boxfree, Game.e1integ);				
		var e1incspeedx = 5 * (Math.random() -.5);
		var e1incspeedy = 3 * (Math.random() -.5);	
		if (Game.e1speedx > -20 && e1incspeedx < 0 && Game.e1wdbox.GetCenterPosition().x > 200){
			Game.e1speedx = Game.e1speedx + e1incspeedx;
		}
		else if (Game.e1speedx < 20 && e1incspeedx > 0 && Game.e1wdbox.GetCenterPosition().x < 700){
			Game.e1speedx = Game.e1speedx + e1incspeedx;
		}
		if (Game.e1speedy > -20 && e1incspeedy < 0 && Game.e1wdbox.GetCenterPosition().y > 100){
			Game.e1speedy = Game.e1speedy + e1incspeedy;
		}
		else if (Game.e1speedy < 20 && e1incspeedy > 0 && Game.e1wdbox.GetCenterPosition().y < 400){
			Game.e1speedy = Game.e1speedy + e1incspeedy;
		}	
		if (Game.e1wdbox.GetCenterPosition().x >= 700 || Game.e1wdbox.GetCenterPosition().y <= 100){
			Game.e1speedx = -1;
			Game.e1speedy = 1;
		}	
		else if (Game.e1wdbox.GetCenterPosition().x <= 200 || Game.e1wdbox.GetCenterPosition().y >= 400){
			Game.e1speedx = 1;
			Game.e1speedy = -1;
		}
		Game.e1wdbox.SetLinearVelocity(new b2Vec2(Game.e1speedx, Game.e1speedy));	
		MoveShip(e1box, e1boxfree, Game.e1speedx, Game.e1speedy);			
		if (Game.e1bullet.GetCenterPosition().x < 5 || Game.e1bullet.GetCenterPosition().y < 55 || Game.e1bullet.GetCenterPosition().y > 435 || Game.e1bulletcounter > 400){
			Game.e1bullet.SetCenterPosition(new b2Vec2(1020, 1020),0);
			Game.e1bullet.SetLinearVelocity(new b2Vec2(0,0));
			Game.e1canshoot = true;
			Game.e1bulletcounter = 0;
		}		
		//shield logic
		if (Math.pow(Game.pbullet.GetCenterPosition().x - Game.e1wdbox.GetCenterPosition().x, 2) + Math.pow(Game.pbullet.GetCenterPosition().y - Game.e1wdbox.GetCenterPosition().y, 2) < Math.pow(Game.e1shield,2)){					
			Game.pbullet.SetCenterPosition(new b2Vec2(1020, 1020),0);
			Game.pbullet.SetLinearVelocity(new b2Vec2(0,0));
			Game.pcanshoot = true;
			Game.e1shield = Game.e1shield - 10;
		}	
		if (Math.pow(Game.plaser1.GetCenterPosition().x - Game.e1wdbox.GetCenterPosition().x, 2) + Math.pow(Game.plaser1.GetCenterPosition().y - Game.e1wdbox.GetCenterPosition().y, 2) < Math.pow(Game.e1shield,2)){					
			Game.plaser1.SetCenterPosition(new b2Vec2(1020, 1020),0);
			Game.plaser1.SetLinearVelocity(new b2Vec2(0,0));
			Game.pcanshoot = true;
			Game.e1shield = Game.e1shield - 10;
		}			
		//why do I have this?
		if (Game.e1canshoot == false)
		{
			Game.e1bulletcounter++;
		}	
		else if (Game.e1canshoot == true && Game.e1dead == false){
			Game.e1bullet.SetCenterPosition(new b2Vec2(Game.e1wdbox.GetCenterPosition().x - 30, Game.e1wdbox.GetCenterPosition().y),0);
			Game.e1bullet.SetLinearVelocity(new b2Vec2(-100,0));
			Game.e1canshoot = false;
		}
		if (Game.e1canshoot == false){
			if (Game.e1bullet.GetCenterPosition().y - Game.pwdbox.GetCenterPosition().y < 0 && Game.e1bullet.GetLinearVelocity().y > -50){
				Game.e1bullet.ApplyForce(new b2Vec2(0,Game.e1bullet.GetMass()*20), Game.e1bullet.GetCenterPosition());			
			}
			if (Game.e1bullet.GetCenterPosition().y - Game.pwdbox.GetCenterPosition().y > 0 && Game.e1bullet.GetLinearVelocity().y < 50){
				Game.e1bullet.ApplyForce(new b2Vec2(0,-Game.e1bullet.GetMass()*20), Game.e1bullet.GetCenterPosition());			
			}		
		}	
		if(Game.e1shield < 30 && counter % 200 == 0){
			Game.e1shield++;		
		}
		if (Game.e1shield > 0){
			ctx.beginPath();
			ctx.arc(Game.e1wdbox.GetCenterPosition().x,Game.e1wdbox.GetCenterPosition().y,Game.e1shield,0,2*Math.PI, true);
			ctx.stroke();	
		}
		if((Game.enemy1.length - Game.e1integ) / Game.enemy1.length < .5)
		{
			Game.e1dead = true;
			endcounter++;
		}
		if (endcounter == 300 && Game.e1dead == true){
			Game.level++;
			buildWorld(Game.level,Game.section);
		}
	}
	
	if(Game.level == 2){
		Game.e2bulletcounter++;
		Game.e2integ = 0;
		Game.e3integ = 0;
		Game.e4integ = 0;
		Game.e2integ = ColDetect (Game.e2wdbox, Game.enemy2, e2box, e2boxfree, Game.e2integ);		
		Game.e3integ = ColDetect (Game.e3wdbox, Game.enemy2, e3box, e3boxfree, Game.e3integ);		
		Game.e4integ = ColDetect (Game.e4wdbox, Game.enemy2, e4box, e4boxfree, Game.e4integ);	
		
		console.log(Game.e2wdbox.GetCenterPosition().x + " " + e2box[5].GetCenterPosition().x + " " + Game.enemy2[5].att.posx + " " + e2boxfree[5]); 
//		+ " " + Game.e2wdbox.GetCenterPosition().y - e2box[5].GetCenterPosition().y + " " + Game.enemy2[5].att.posy);
		if(counter % 20 == 0){			
			var randomnum1 = Math.random() -.5;
			var randomnum2 = Math.random() -.5;	
			if (randomnum1 < 0 && Game.e2wdbox.GetCenterPosition().x > 200){
				Game.e2speedx = -50;
			}
			else if (randomnum1 > 0 && Game.e2wdbox.GetCenterPosition().x < 700){
				Game.e2speedx = 50;
			}
			if (randomnum2 < 0 && Game.e2wdbox.GetCenterPosition().y > 70){
				Game.e2speedy = -5
			}
			else if (randomnum2 > 0 && Game.e2wdbox.GetCenterPosition().y < 150){
				Game.e2speedy = 5;
			}	
			if (Game.e2wdbox.GetCenterPosition().x >= 700 || Game.e2wdbox.GetCenterPosition().y <= 70){
				Game.e2speedx = -50;
				Game.e2speedy = 5;
			}	
			else if (Game.e2wdbox.GetCenterPosition().x <= 200 || Game.e2wdbox.GetCenterPosition().y >= Game.e3wdbox.GetCenterPosition().y - 30){
				Game.e2speedx = 50;
				Game.e2speedy = -5;
			}
			Game.e2wdbox.SetLinearVelocity(new b2Vec2(Game.e2speedx, Game.e2speedy));	
			MoveShip(e2box, e2boxfree, Game.e2speedx, Game.e2speedy);		
			var randomnum1 = Math.random() -.5;
			var randomnum2 = Math.random() -.5;	
			if (randomnum1 < 0 && Game.e3wdbox.GetCenterPosition().x > 200){
				Game.e3speedx = -50;
			}
			else if (randomnum1 > 0 && Game.e3wdbox.GetCenterPosition().x < 700){
				Game.e3speedx = 50;
			}
			if (randomnum2 < 0 && Game.e3wdbox.GetCenterPosition().y > 70){
				Game.e3speedy = -5
			}
			else if (randomnum2 > 0 && Game.e3wdbox.GetCenterPosition().y < 150){
				Game.e3speedy = 5;
			}	
			if (Game.e3wdbox.GetCenterPosition().x >= 700 || Game.e3wdbox.GetCenterPosition().y <= Game.e2wdbox.GetCenterPosition().y){
				Game.e3speedx = -50;
				Game.e3speedy = 5;
			}	
			else if (Game.e3wdbox.GetCenterPosition().x <= 200 || Game.e3wdbox.GetCenterPosition().y >= Game.e4wdbox.GetCenterPosition().y - 30){
				Game.e3speedx = 50;
				Game.e3speedy = -5;
			}
			Game.e3wdbox.SetLinearVelocity(new b2Vec2(Game.e3speedx, Game.e3speedy));	
			MoveShip(e3box, e3boxfree, Game.e3speedx, Game.e3speedy);	
			var randomnum1 = Math.random() -.5;
			var randomnum2 = Math.random() -.5;	
			if (randomnum1 < 0 && Game.e4wdbox.GetCenterPosition().x > 200){
				Game.e4speedx = -50;
			}
			else if (randomnum1 > 0 && Game.e4wdbox.GetCenterPosition().x < 700){
				Game.e4speedx = 50;
			}
			if (randomnum2 < 0 && Game.e4wdbox.GetCenterPosition().y > 70){
				Game.e4speedy = -5
			}
			else if (randomnum2 > 0 && Game.e4wdbox.GetCenterPosition().y < 150){
				Game.e4speedy = 5;
			}	
			if (Game.e4wdbox.GetCenterPosition().x >= 700 || Game.e4wdbox.GetCenterPosition().y <= Game.e3wdbox.GetCenterPosition().y){
				Game.e4speedx = -50;
				Game.e4speedy = 5;
			}	
			else if (Game.e3wdbox.GetCenterPosition().x <= 200 || Game.e3wdbox.GetCenterPosition().y >= 400){
				Game.e4speedx = 50;
				Game.e4speedy = -5;
			}
			Game.e4wdbox.SetLinearVelocity(new b2Vec2(Game.e4speedx, Game.e4speedy));	
			MoveShip(e4box, e4boxfree, Game.e4speedx, Game.e4speedy);	
		}			
		if (Game.e2bullet.GetCenterPosition().x < 5 || Game.e2bullet.GetCenterPosition().y < 55 || Game.e2bullet.GetCenterPosition().y > 435 || Game.e2bulletcounter > 400 || Game.e2bulletcounter == 400){
			Game.e2bullet.SetCenterPosition(new b2Vec2(1020, 1020),0);
			Game.e2bullet.SetLinearVelocity(new b2Vec2(0,0));
			Game.e2canshoot = true;
			Game.e2bulletcounter = 0;
		}			
		if (Game.e2canshoot == true && Game.e2dead == false){
			Game.e2bullet.SetCenterPosition(new b2Vec2(Game.e2wdbox.GetCenterPosition().x - 30, Game.e2wdbox.GetCenterPosition().y),0);
			Game.e2bullet.SetLinearVelocity(new b2Vec2(-100,0));
			Game.e2canshoot = false;
		}
		if (Game.e2canshoot == false && Game.e2dead == false){
			if (Game.e2bullet.GetCenterPosition().y - Game.pwdbox.GetCenterPosition().y < 0 && Game.e2bullet.GetLinearVelocity().y > -50){
				Game.e2bullet.ApplyForce(new b2Vec2(0,Game.e2bullet.GetMass()*20), Game.e2bullet.GetCenterPosition());			
			}
			if (Game.e2bullet.GetCenterPosition().y - Game.pwdbox.GetCenterPosition().y > 0 && Game.e2bullet.GetLinearVelocity().y < 50){
				Game.e2bullet.ApplyForce(new b2Vec2(0,-Game.e2bullet.GetMass()*20), Game.e2bullet.GetCenterPosition());			
			}		
		}
		if (Game.e3bullet.GetCenterPosition().x < 5 || Game.e3bullet.GetCenterPosition().y < 55 || Game.e3bullet.GetCenterPosition().y > 435 || Game.e3bulletcounter > 400 || Game.e3bulletcounter == 400){
			Game.e3bullet.SetCenterPosition(new b2Vec2(1020, 1020),0);
			Game.e3bullet.SetLinearVelocity(new b2Vec2(0,0));
			Game.e3canshoot = true;
			Game.e3bulletcounter = 0;
		}			
		if (Game.e3canshoot == true && Game.e3dead == false){
			Game.e3bullet.SetCenterPosition(new b2Vec2(Game.e3wdbox.GetCenterPosition().x - 30, Game.e3wdbox.GetCenterPosition().y),0);
			Game.e3bullet.SetLinearVelocity(new b2Vec2(-100,0));
			Game.e3canshoot = false;
		}
		if (Game.e3canshoot == false && Game.e3dead == false){
			if (Game.e3bullet.GetCenterPosition().y - Game.pwdbox.GetCenterPosition().y < 0 && Game.e3bullet.GetLinearVelocity().y > -50){
				Game.e3bullet.ApplyForce(new b2Vec2(0,Game.e3bullet.GetMass()*20), Game.e3bullet.GetCenterPosition());			
			}
			if (Game.e3bullet.GetCenterPosition().y - Game.pwdbox.GetCenterPosition().y > 0 && Game.e3bullet.GetLinearVelocity().y < 50){
				Game.e3bullet.ApplyForce(new b2Vec2(0,-Game.e3bullet.GetMass()*20), Game.e3bullet.GetCenterPosition());			
			}		
		}	
		if (Game.e4bullet.GetCenterPosition().x < 5 || Game.e4bullet.GetCenterPosition().y < 55 || Game.e4bullet.GetCenterPosition().y > 435 || Game.e4bulletcounter > 400 || Game.e4bulletcounter == 400){
			Game.e4bullet.SetCenterPosition(new b2Vec2(1020, 1020),0);
			Game.e4bullet.SetLinearVelocity(new b2Vec2(0,0));
			Game.e4canshoot = true;
			Game.e4bulletcounter = 0;
		}			
		if (Game.e4canshoot == true && Game.e4dead == false){
			Game.e4bullet.SetCenterPosition(new b2Vec2(Game.e4wdbox.GetCenterPosition().x - 30, Game.e4wdbox.GetCenterPosition().y),0);
			Game.e4bullet.SetLinearVelocity(new b2Vec2(-100,0));
			Game.e4canshoot = false;
		}
		if (Game.e4canshoot == false && Game.e4dead == false){
			if (Game.e4bullet.GetCenterPosition().y - Game.pwdbox.GetCenterPosition().y < 0 && Game.e4bullet.GetLinearVelocity().y > -50){
				Game.e4bullet.ApplyForce(new b2Vec2(0,Game.e4bullet.GetMass()*20), Game.e4bullet.GetCenterPosition());			
			}
			if (Game.e4bullet.GetCenterPosition().y - Game.pwdbox.GetCenterPosition().y > 0 && Game.e4bullet.GetLinearVelocity().y < 50){
				Game.e4bullet.ApplyForce(new b2Vec2(0,-Game.e4bullet.GetMass()*20), Game.e4bullet.GetCenterPosition());			
			}		
		}			
		if((Game.enemy2.length - Game.e2integ) / Game.enemy2.length < .5){
			Game.e2dead = true;			
		}
		if (endcounter == 300 && Game.e2dead == true && Game.e3dead == true && Game.e4dead == true){
			Game.level++;
			buildWorld(Game.level,Game.section);
		}
		if((Game.enemy2.length - Game.e3integ) / Game.enemy2.length < .5){
			Game.e3dead = true;			
		}		
		if((Game.enemy2.length - Game.e4integ) / Game.enemy2.length < .5){
			Game.e4dead = true;		
		}
		if(Game.e2dead == true && Game.e3dead == true && Game.e4dead == true){
			endcounter++;
		}
	}
	if(Game.level == 3){
		Game.astcounter++;
		if(Game.astcounter == 1){
			var randomnum1 = Math.random() - .5;
			var randomnum2 = Math.random() - .5;
			var randomnum3 = Math.random() - .5;
			var randomnum4 = Math.random() - .5;
			Game.as001box = create1box(700, 100, 1, 1, 0);		
			CreateBody(Game.asteroid, Game.as001box, as001box, astpboxfree);
			Game.as001box.SetLinearVelocity(new b2Vec2(-20, 40 * randomnum1),0);
			MoveShip (as001box, astpboxfree, -20, 40 * randomnum1);
			Game.as002box = create1box(700, 200, 1, 1, 0);		
			CreateBody(Game.asteroid, Game.as002box, as002box, astpboxfree);	
			Game.as002box.SetLinearVelocity(new b2Vec2(-20, 40 * randomnum2),0);
			MoveShip (as002box, astpboxfree, -20, 40 * randomnum2);
			Game.as003box = create1box(700, 300, 1, 1, 0);		
			CreateBody(Game.asteroid, Game.as003box, as003box, astpboxfree);	
			Game.as003box.SetLinearVelocity(new b2Vec2(-20, 40 * randomnum3),0);
			MoveShip (as003box, astpboxfree, -20, 40 * randomnum3);		
			Game.as004box = create1box(700, 400, 1, 1, 0);		
			CreateBody(Game.asteroid, Game.as004box, as004box, astpboxfree);	
			Game.as004box.SetLinearVelocity(new b2Vec2(-20, 40 * randomnum4),0);
			MoveShip (as004box, astpboxfree, -20, 40 * randomnum4);		
		}		
		if(Game.astcounter == 500){
			var randomnum1 = Math.random() - .5;
			var randomnum2 = Math.random() - .5;
			var randomnum3 = Math.random() - .5;
			var randomnum4 = Math.random() - .5;
			Game.as011box = create1box(700, 100, 1, 1, 0);		
			CreateBody(Game.asteroid, Game.as011box, as011box, astpboxfree);
			Game.as011box.SetLinearVelocity(new b2Vec2(-20, 40 * randomnum1),0);
			MoveShip (as011box, astpboxfree, -20, 40 * randomnum1);
			Game.as012box = create1box(700, 200, 1, 1, 0);		
			CreateBody(Game.asteroid, Game.as012box, as012box, astpboxfree);	
			Game.as012box.SetLinearVelocity(new b2Vec2(-20, 40 * randomnum2),0);
			MoveShip (as012box, astpboxfree, -20, 40 * randomnum2);
			Game.as013box = create1box(700, 300, 1, 1, 0);		
			CreateBody(Game.asteroid, Game.as013box, as013box, astpboxfree);	
			Game.as013box.SetLinearVelocity(new b2Vec2(-20, 40 * randomnum3),0);
			MoveShip (as013box, astpboxfree, -20, 40 * randomnum3);
			Game.as014box = create1box(700, 400, 1, 1, 0);		
			CreateBody(Game.asteroid, Game.as014box, as014box, astpboxfree);	
			Game.as014box.SetLinearVelocity(new b2Vec2(-20, 40 * randomnum4),0);
			MoveShip (as014box, astpboxfree, -20, 40 * randomnum4);
		}
		if(Game.astcounter == 1000){
			var randomnum1 = Math.random() - .5;
			var randomnum2 = Math.random() - .5;
			var randomnum3 = Math.random() - .5;
			var randomnum4 = Math.random() - .5;
			Game.as021box = create1box(700, 100, 1, 1, 0);		
			CreateBody(Game.asteroid, Game.as021box, as021box, astpboxfree);
			Game.as021box.SetLinearVelocity(new b2Vec2(-20, 40 * randomnum1),0);
			MoveShip (as021box, astpboxfree, -20, 40 * randomnum1);
			Game.as022box = create1box(700, 200, 1, 1, 0);		
			CreateBody(Game.asteroid, Game.as022box, as022box, astpboxfree);	
			Game.as022box.SetLinearVelocity(new b2Vec2(-20, 40 * randomnum2),0);
			MoveShip (as022box, astpboxfree, -20, 40 * randomnum2);
			Game.as023box = create1box(700, 300, 1, 1, 0);		
			CreateBody(Game.asteroid, Game.as023box, as023box, astpboxfree);	
			Game.as023box.SetLinearVelocity(new b2Vec2(-20, 40 * randomnum3),0);
			MoveShip (as023box, astpboxfree, -20, 40 * randomnum3);
			Game.as024box = create1box(700, 400, 1, 1, 0);		
			CreateBody(Game.asteroid, Game.as024box, as024box, astpboxfree);	
			Game.as024box.SetLinearVelocity(new b2Vec2(-20, 40 * randomnum4),0);
			MoveShip (as024box, astpboxfree, -20, 40 * randomnum4);
		}
		if(Game.astcounter == 1500){
			var randomnum1 = Math.random() - .5;
			var randomnum2 = Math.random() - .5;
			var randomnum3 = Math.random() - .5;
			var randomnum4 = Math.random() - .5;
			Game.as031box = create1box(700, 100, 1, 1, 0);		
			CreateBody(Game.asteroid, Game.as031box, as031box, astpboxfree);
			Game.as031box.SetLinearVelocity(new b2Vec2(-20, 40 * randomnum1),0);
			MoveShip (as031box, astpboxfree, -20, 40 * randomnum1);
			Game.as032box = create1box(700, 200, 1, 1, 0);		
			CreateBody(Game.asteroid, Game.as032box, as032box, astpboxfree);	
			Game.as032box.SetLinearVelocity(new b2Vec2(-20, 40 * randomnum2),0);
			MoveShip (as032box, astpboxfree, -20, 40 * randomnum2);
			Game.as033box = create1box(700, 300, 1, 1, 0);		
			CreateBody(Game.asteroid, Game.as033box, as033box, astpboxfree);	
			Game.as033box.SetLinearVelocity(new b2Vec2(-20, 40 * randomnum3),0);
			MoveShip (as033box, astpboxfree, -20, 40 * randomnum3);
			Game.as034box = create1box(700, 400, 1, 1, 0);		
			CreateBody(Game.asteroid, Game.as034box, as034box, astpboxfree);	
			Game.as034box.SetLinearVelocity(new b2Vec2(-20, 40 * randomnum4),0);
			MoveShip (as034box, astpboxfree, -20, 40 * randomnum4);
		}
		if(Game.astcounter == 2000){
			var randomnum1 = Math.random() - .5;
			var randomnum2 = Math.random() - .5;
			var randomnum3 = Math.random() - .5;
			var randomnum4 = Math.random() - .5;
			Game.as041box = create1box(700, 100, 1, 1, 0);		
			CreateBody(Game.asteroid, Game.as041box, as041box, astpboxfree);
			Game.as041box.SetLinearVelocity(new b2Vec2(-20, 40 * randomnum1),0);
			MoveShip (as041box, astpboxfree, -20, 40 * randomnum1);
			Game.as042box = create1box(700, 200, 1, 1, 0);		
			CreateBody(Game.asteroid, Game.as042box, as042box, astpboxfree);	
			Game.as042box.SetLinearVelocity(new b2Vec2(-20, 40 * randomnum2),0);
			MoveShip (as042box, astpboxfree, -20, 40 * randomnum2);
			Game.as043box = create1box(700, 300, 1, 1, 0);		
			CreateBody(Game.asteroid, Game.as043box, as043box, astpboxfree);	
			Game.as043box.SetLinearVelocity(new b2Vec2(-20, 40 * randomnum3),0);
			MoveShip (as043box, astpboxfree, -20, 40 * randomnum3);
			Game.as044box = create1box(700, 400, 1, 1, 0);		
			CreateBody(Game.asteroid, Game.as044box, as044box, astpboxfree);	
			Game.as044box.SetLinearVelocity(new b2Vec2(-20, 40 * randomnum4),0);
			MoveShip (as044box, astpboxfree, -20, 40 * randomnum4);
		}
		if(Game.astcounter == 3000 && Game.pdead == false){
			Game.level++;
			buildWorld(Game.level, Game.section);
		}
	}
	
	if(Game.level == 4){					
		ctx.beginPath();
		ctx.arc(Game.orbitaldefender.GetCenterPosition().x,Game.orbitaldefender.GetCenterPosition().y,200,0,2*Math.PI, true);
		ctx.stroke();	
		if (Game.orbitaldefender.GetCenterPosition().y < 100){
			Game.orbitaldefender.SetLinearVelocity(new b2Vec2(0, 30));
		}
		else if (Game.orbitaldefender.GetCenterPosition().y > 350){
			Game.orbitaldefender.SetLinearVelocity(new b2Vec2(0, -30));
		}
		
		if(Game.planetshield.GetCenterPosition().x > 700 && counter % 50 == 0){
			Game.planetshield.SetCenterPosition(new b2Vec2(Game.planetshield.GetCenterPosition().x - 2, Game.planetshield.GetCenterPosition().y),0);
		}
		if (Game.pbullet.GetCenterPosition().x > Game.planetshield.GetCenterPosition().x - 5 && Game.pcanshoot == false){
			Game.pbullet.SetCenterPosition(new b2Vec2(1020, 1020),0);
			Game.pbullet.SetLinearVelocity(new b2Vec2(0,0));
			Game.pcanshoot = true;
			Game.planetshield.SetCenterPosition(new b2Vec2(Game.planetshield.GetCenterPosition().x + 10, Game.planetshield.GetCenterPosition().y),0);
		}				
		if (Game.odbullet.GetCenterPosition().x < 5 || Game.odbullet.GetCenterPosition().y < 55 || Game.odbullet.GetCenterPosition().y > 435 || Game.odbullet.GetCenterPosition().x > Game.planetshield.GetCenterPosition().x - 5 || Game.odbulletcounter > 1200){
			Game.odbullet.SetCenterPosition(new b2Vec2(1020, 1020),0);
			Game.odbullet.SetLinearVelocity(new b2Vec2(0,0));
			Game.odcanshoot = true;
			Game.odbulletcounter = 0;			
		}		
		if (Game.odcanshoot == false)
		{
			Game.odbulletcounter++;
		}
		else if (Game.odcanshoot == true){
			Game.odbulletcounter++;
			if(Game.orbitaldefender.GetCenterPosition().x - Game.pwdbox.GetCenterPosition().x > 0){
				Game.odbullet.SetCenterPosition(new b2Vec2(Game.orbitaldefender.GetCenterPosition().x - 50, Game.orbitaldefender.GetCenterPosition().y),0);
				if(Game.odbulletcounter > 200){
					Game.odbullet.SetLinearVelocity(new b2Vec2(-100,0));
					Game.odcanshoot = false;
				}
			}
			else if(Game.orbitaldefender.GetCenterPosition().x - Game.pwdbox.GetCenterPosition().x < 0){
				Game.odbullet.SetCenterPosition(new b2Vec2(Game.orbitaldefender.GetCenterPosition().x + 50, Game.orbitaldefender.GetCenterPosition().y),0);
				if(Game.odbulletcounter > 400){
					Game.odbullet.SetLinearVelocity(new b2Vec2(100,0));
					Game.odcanshoot = false;
				}
			}
		}
		if (Game.odcanshoot == false){
			if (Game.odbullet.GetCenterPosition().y - Game.pwdbox.GetCenterPosition().y < 0 && Game.odbullet.GetLinearVelocity().y > -50){
				Game.odbullet.ApplyForce(new b2Vec2(0,Game.odbullet.GetMass()*20), Game.odbullet.GetCenterPosition());			
			}
			if (Game.odbullet.GetCenterPosition().y - Game.pwdbox.GetCenterPosition().y > 0 && Game.odbullet.GetLinearVelocity().y < 50){
				Game.odbullet.ApplyForce(new b2Vec2(0,-Game.odbullet.GetMass()*20), Game.odbullet.GetCenterPosition());			
			}		
		}	
		if(Game.pbullet.GetCenterPosition().x > 755 && Game.pbullet.GetCenterPosition().x < 800){
			Game.level++;
			buildWorld(Game.level, Game.section);
		}		
		console.log(Game.level);
	}
	
	if (Game.pshield > 0 && ((Game.level >= 0 && Game.section == 2) || (Game.level >= 1 && Game.level < 5))){
		ctx.beginPath();
		ctx.arc(Game.pwdbox.GetCenterPosition().x,Game.pwdbox.GetCenterPosition().y,Game.pshield,0,2*Math.PI, true);
		ctx.stroke();	
	}
	
	if(Game.pcanshootlaser == false){
		ctx.beginPath();
		ctx.moveTo(Game.pwdbox.GetCenterPosition().x + 30, Game.pwdbox.GetCenterPosition().y);
		ctx.lineTo(Game.plaser1.GetCenterPosition().x, Game.plaser1.GetCenterPosition().y);
		ctx.stroke();
	}
	if(Game.level != 5 && Game.level >= 0){
		ctx.font = "20px 'Rock Salt'";
		ctx.fillText("Shield: " + Game.pshield * 2 + "%", 20, 20);
		ctx.fillText("Structural Integrity: " + Math.round(100 * (Game.player.length - Game.pinteg) / Game.player.length) + "%", 20, 40);
		ctx.fillText("Engine: " + Game.pemess, 150, 20);
		if(Game.level >= 1){
			ctx.fillText("X-Velocity: " + Game.pspeedx ,310, 20);
			ctx.fillText("Y-Velocity: " + Game.pspeedy ,310, 40);
		}
		if (Game.level == 1){
			ctx.fillText("Destroy This Ship!", 450, 20);
		}
		else if (Game.level == 2){
			ctx.fillText("Destroy Them!", 450, 20);
		}
		else if (Game.level == 3){
			ctx.fillText("Pass The Asteriod Belt", 450, 20);
		}
		else if (Game.level == 4){
			ctx.fillText("Attack it's weak point", 450, 20);
		}
	}
	else if (Game.level == 5){
		ctx.font = "30px 'Rock Salt'";
		if(counter < 200){
			createCircle(325 + Math.random(), 220 + Math.random(),2,0);	
		}
		if(counter == 180){
			snd4.play();
		}
		if(counter > 600){
			ctx.fillText("Congratulations!", 300, 200);
			ctx.fillText("You saved the Alliance", 300, 300);
		}
	}
	if ((Game.player.length - Game.pinteg) / Game.player.length < .5){
		Game.pdead = true;
		endcounter++;
	}
	if(endcounter == 300 && Game.pdead == true){
		buildWorld(Game.level,Game.section);
	}		
	if (Game.level == 0 && Game.section == 1){
		ctx.fillText("This is a training course", 20, 100);
		ctx.fillText("Fly to the other side of the screen", 20, 125);
		ctx.fillText("Try not to damage the ship to much", 20, 150);
		ctx.fillText("She's brand new!", 20, 175);
		ctx.fillText("To move, use A for left", 20, 325);
		ctx.fillText("To move, use D for right", 20, 350);
		ctx.fillText("To move, use W for up", 20, 375);
		ctx.fillText("To move, use S for down", 20, 400);		
		
		ctx.fillText("<-- Engine Status, try not to damage the engine", 310, 20);		
		ctx.fillText("<-- If this goes under 50%, the ship is dead", 310, 40);	
		if(Game.pwdbox.GetCenterPosition().x > 600){
			Game.section++;
			buildWorld(Game.level,Game.section);
		}
	}
	else if (Game.level == 0 && Game.section == 2){
		ctx.fillText("Red Alert, enemy ahead!", 20, 100);
		ctx.fillText("Destory that other ship!", 20, 125);
		ctx.fillText("Don't worry, it's a simulation!", 20, 150);		
		ctx.fillText("To shoot torpedos, press space", 20, 325);
		ctx.fillText("To shoot your laser click on the target on the screen", 20, 350);
		
		ctx.fillText("<-- Your shield strength decreases if you get", 310, 20);		
		ctx.fillText("<-- hit from enemy weapons", 310, 40);	
		ctx.fillText("<-- Unforuantely, shields do not protect you from other objects", 310, 80);	
		Game.e1integ = 0;
		Game.e1integ = ColDetect (Game.e1wdbox, Game.enemy1, e1box, e1boxfree, Game.e1integ);		
		if((Game.enemy1.length - Game.e1integ) / Game.enemy1.length < .5)
		{
			Game.e1dead = true;
			endcounter++;
		}
		if (endcounter == 300 && Game.e1dead == true){
			Game.level++;
			Game.section = 1;
			buildWorld(Game.level,Game.section);
		}
	}
}

function createWorld() {
	// set the size of the world
	var worldAABB = new b2AABB();
	worldAABB.minVertex.Set(-4000, -4000);
	worldAABB.maxVertex.Set(4000, 4000);
	// Define the gravity
	var gravity = new b2Vec2(0, 0);
	// set to ignore sleeping object
	var doSleep = false;
	// finally create the world with the size, gravity, and sleep object parameter.
	var world = new b2World(worldAABB, gravity, doSleep);
	return world;
}

function drawingImages(){
		//End of drawing images
		ctx.drawImage(Game.background, 0, 0);
}

function createCircle (x, y, radius, rest) {
	// wheel circle definition
	var ballSd = new b2CircleDef();
	ballSd.density = 0.1;
	ballSd.radius = radius;
	ballSd.restitution = rest;
	ballSd.friction = 0;
	// body definition
	var ballBd = new b2BodyDef();
	ballBd.AddShape(ballSd);
	ballBd.position.Set(x,y);
	return Game.world.CreateBody(ballBd);
}

function createMedCircle (x, y, radius, rest) {
	// wheel circle definition
	var ballSd = new b2CircleDef();
	ballSd.density = 10;
	ballSd.radius = radius;
	ballSd.restitution = rest;
	ballSd.friction = 0;
	// body definition
	var ballBd = new b2BodyDef();
	ballBd.AddShape(ballSd);
	ballBd.position.Set(x,y);
	return Game.world.CreateBody(ballBd);
}

function createHeavyCircle (x, y, radius, rest) {
	// wheel circle definition
	var ballSd = new b2CircleDef();
	ballSd.density = 20;
	ballSd.radius = radius;
	ballSd.restitution = rest;
	ballSd.friction = 0;
	// body definition
	var ballBd = new b2BodyDef();
	ballBd.AddShape(ballSd);
	ballBd.position.Set(x,y);
	return Game.world.CreateBody(ballBd);
}

function createLaserCircle (x, y, radius, rest) {
	// wheel circle definition
	var ballSd = new b2CircleDef();
	ballSd.density = 10;
	ballSd.radius = radius;
	ballSd.restitution = rest;
	ballSd.friction = 0;
	// body definition
	var ballBd = new b2BodyDef();
	ballBd.AddShape(ballSd);
	ballBd.position.Set(x,y);
	return Game.world.CreateBody(ballBd);
}

function create1box(x,y,x2,y2, rotation) {
	// create a box
	var boxSd = new b2BoxDef();
	boxSd.density = 10;
	boxSd.friction = 1.5;
	boxSd.restitution = 0;
	boxSd.extents.Set(x2, y2);	
	var boxBd = new b2BodyDef();
	boxBd.AddShape(boxSd);
	boxBd.position.Set(x,y);
	boxBd.rotation = rotation * Math.PI / 180;
	var body = Game.world.CreateBody(boxBd);
	return body;
}

function createGround(x, y, width, height, rotation, rest) {
	// box shape definition
	var groundSd = new b2BoxDef();
	groundSd.extents.Set(width, height);
	groundSd.restitution = rest;
	// body definition with the given shape we just created.
	var groundBd = new b2BodyDef();
	groundBd.AddShape(groundSd);
	groundBd.position.Set(x, y);
	groundBd.rotation = rotation * Math.PI / 180;
	var body = Game.world.CreateBody(groundBd);
	return body;
}

function createBoss (x, y, radius, rest) {
	// wheel circle definition
	var ballSd = new b2CircleDef();	
	ballSd.radius = radius;
	ballSd.restitution = rest;	
	// body definition
	var ballBd = new b2BodyDef();
	ballBd.AddShape(ballSd);
	ballBd.position.Set(x,y);
	
	var body = Game.world.CreateBody(ballBd);
	
	Game.ball001 = createCircle (x - 70, y, 20, 1);
	Game.ball002 = createCircle (x + 70, y, 20, 1);
	
	var jointDef = new b2RevoluteJointDef();
	jointDef.anchorPoint.Set(x-90, y);
	jointDef.body1 = body;
	jointDef.body2 = Game.ball001;
	Game.world.CreateJoint(jointDef);
	
	jointDef.anchorPoint.Set(x+90, y);
	jointDef.body1 = body;
	jointDef.body2 = Game.ball002;
	Game.world.CreateJoint(jointDef);
	
	return body;
}

// drawing functions
function drawWorld(world, context) {
	for (var b = world.m_bodyList; b != null; b = b.m_next) {
		for (var s = b.GetShapeList(); s != null; s = s.GetNext()) {
			drawShape(s, context);
		}
	}
}

// drawShape function directly copy from draw_world.js in Box2dJS library

function drawShape(shape, context) {
	context.strokeStyle = 'white';
	context.beginPath();
	switch (shape.m_type) {
		case b2Shape.e_circleShape:
		var circle = shape;
		var pos = circle.m_position;
		var r = circle.m_radius;
		var segments = 16.0;
		var theta = 0.0;
		var dtheta = 2.0 * Math.PI / segments;
		// draw circle
		context.moveTo(pos.x + r, pos.y);
		for (var i = 0; i < segments; i++) {
			var d = new b2Vec2(r * Math.cos(theta),
			r * Math.sin(theta));
			var v = b2Math.AddVV(pos, d);
			context.lineTo(v.x, v.y);
			theta += dtheta;
		}
		context.lineTo(pos.x + r, pos.y);
		// draw radius
		context.moveTo(pos.x, pos.y);
		var ax = circle.m_R.col1;
		var pos2 = new b2Vec2(pos.x + r * ax.x, pos.y + r * ax.y);
		context.lineTo(pos2.x, pos2.y);
		break;
		case b2Shape.e_polyShape:
		var poly = shape;
		var tV = b2Math.AddVV(poly.m_position,
		b2Math.b2MulMV(poly.m_R, poly.m_vertices[0]));
		context.moveTo(tV.x, tV.y);
		for (var i = 0; i < poly.m_vertexCount; i++) {
			var v = b2Math.AddVV(poly.m_position,
			b2Math.b2MulMV(poly.m_R, poly.m_vertices[i]));
			context.lineTo(v.x, v.y);
		}
		context.lineTo(tV.x, tV.y);
		break;
	}
	context.stroke();
}

function CreateBody(obj1, obj2, array1, array2){
	for (var i = 0; i < obj1.length; i++){
		array1[i] = create1box(obj2.GetCenterPosition().x + obj1[i].att.posx, obj2.GetCenterPosition().y + obj1[i].att.posy, 2, 1, obj1[i].att.deg);			
		array2[i] = false;
	}
}

function ColDetect (obj1, array1, array2, array3, integ){	
	for (var i = 0; i < array1.length; i++){
		if (obj1.GetCenterPosition().x - array2[i].GetCenterPosition().x + array1[i].att.posx > 2 || obj1.GetCenterPosition().x - array2[i].GetCenterPosition().x + array1[i].att.posx < -2){
			array3[i] = true;
		}
		if (obj1.GetCenterPosition().y - array2[i].GetCenterPosition().y + array1[i].att.posy > 2 || obj1.GetCenterPosition().y - array2[i].GetCenterPosition().y + array1[i].att.posy < -2){
			array3[i] = true;
		}
		if (array2[i].GetAngularVelocity() > 2 || array2[i].GetAngularVelocity() < -2){
			array3[i] = true;
		}
		if (array3[i] == true){
			integ++;					
		}		
	}		
	return integ;
}	

function MoveShip (array1, array2, speedx, speedy){
	for (var i = 0; i < array1.length; i++){
		if (array2[i] == false){
			array1[i].SetLinearVelocity(new b2Vec2(speedx,speedy));									
		}
	}	
}
		
function RandomMove (speedx, speedy, minx, maxx, miny, maxy, obj1, power){
	var e1incspeedx = 5 * power * (Math.random() -.5);
	var e1incspeedy = 3 * power * (Math.random() -.5);	
	if (speedx > -20 && e1incspeedx < 0 && Game.e1wdbox.GetCenterPosition().x > minx){
		speedx = speedx + e1incspeedx;
	}
	else if (speedx < 20 && e1incspeedx > 0 && Game.e1wdbox.GetCenterPosition().x < maxx){
		speedx = speedx + e1incspeedx;
	}
	if (speedy > -20 && e1incspeedy < 0 && Game.e1wdbox.GetCenterPosition().y > miny){
		speedy = speedy + e1incspeedy;
	}
	else if (speedy < 20 && e1incspeedy > 0 && Game.e1wdbox.GetCenterPosition().y < maxy){
		speedy = speedy + e1incspeedy;
	}	
	if (Game.e1wdbox.GetCenterPosition().x >= maxx || Game.e1wdbox.GetCenterPosition().y <= miny){
		speedx = -1;
		speedy = 1;
	}	
	else if (Game.e1wdbox.GetCenterPosition().x <= minx || Game.e1wdbox.GetCenterPosition().y >= maxy){
		speedx = 1;
		speedy = -1;
	}
	Game.e1wdbox.SetLinearVelocity(new b2Vec2(speedx, speedy));	
}
		
function buildWorld(level, section) {	
	if (level == -1 && section == 1)
	{	
		delete Game.world;
		Game.world = createWorld();
		Game.background.src = "images/Title.png";	
	}
	else if (level == 0 && section == 1)
	{				
		delete Game.world;
		Game.world = createWorld();
		Game.background.src = "images/Space.png";	
		Game.pdead = false;
		Game.pepower = 2;		
		Game.pshield = 50;
		Game.world = createWorld();
		Game.pbullet = createHeavyCircle(1000, 1000, 2, 0);
		Game.plaser1 = createLaserCircle(1000, 1020, 1, 0);
		//centre of box
		Game.pwdbox = create1box(100,200,1,1,0);
		Game.prengbox = create1box(100 - 25,200 + 10,4,2,0);
		Game.plengbox = create1box(100 - 25,200 - 10,4,2,0);
		Game.prengboxfree = false;
		Game.plengboxfree = false;
		
		Game.ground1 = createGround(400, 50, 400, 1, 0, 1);	
		Game.ground2 = createGround(778, 220, 10, 220, 0, 1);
		Game.ground3 = createGround(0, 220, 1, 220, 0, 1);
		Game.ground4 = createGround(400, 450, 400, 10, 0, 1);	

		CreateBody(Game.player, Game.pwdbox, pbox, pboxfree);	
		
		for (var i = 0; i < Game.playereng.length; i++){
			perbox[i] = create1box(Game.prengbox.GetCenterPosition().x + Game.playereng[i].att.posx, Game.prengbox.GetCenterPosition().y + Game.playereng[i].att.posy, 2, 1, Game.playereng[i].att.deg);			
			perboxfree[i] = false;
			pelbox[i] = create1box(Game.plengbox.GetCenterPosition().x + Game.playereng[i].att.posx, Game.plengbox.GetCenterPosition().y + Game.playereng[i].att.posy, 2, 1, Game.playereng[i].att.deg);			
			pelboxfree[i] = false;
		}		
		
		Game.ground5 = createGround(300, 100, 1, 100, 0, 0);
		Game.ground6 = createGround(300, 400, 1, 100, 0, 0);
		Game.ground7 = createGround(400, 200, 100, 1, 0, 0);
		Game.ground8 = createGround(400, 300, 100, 1, 0, 0);		
	}
	else if (level == 0 && section == 2)
	{				
		delete Game.world;
		Game.world = createWorld();
		Game.background.src = "images/Space.png";	
		Game.pdead = false;
		Game.pepower = 2;		
		Game.pshield = 50;
		Game.world = createWorld();
		Game.pbullet = createHeavyCircle(1000, 1000, 2, 0);
		Game.plaser1 = createLaserCircle(1000, 1020, 1, 0);		
		//centre of box
		Game.pwdbox = create1box(100,200,1,1,0);
		Game.prengbox = create1box(100 - 25,200 + 10,4,2,0);
		Game.plengbox = create1box(100 - 25,200 - 10,4,2,0);
		Game.prengboxfree = false;
		Game.plengboxfree = false;
		Game.e1wdbox = create1box(600,300,1,1,0);
		
		Game.ground1 = createGround(400, 50, 400, 1, 0, 1);	
		Game.ground2 = createGround(778, 220, 10, 220, 0, 1);
		Game.ground3 = createGround(0, 220, 1, 220, 0, 1);
		Game.ground4 = createGround(400, 450, 400, 10, 0, 1);	

		CreateBody(Game.player, Game.pwdbox, pbox, pboxfree);	
		
		for (var i = 0; i < Game.playereng.length; i++){
			perbox[i] = create1box(Game.prengbox.GetCenterPosition().x + Game.playereng[i].att.posx, Game.prengbox.GetCenterPosition().y + Game.playereng[i].att.posy, 2, 1, Game.playereng[i].att.deg);			
			perboxfree[i] = false;
			pelbox[i] = create1box(Game.plengbox.GetCenterPosition().x + Game.playereng[i].att.posx, Game.plengbox.GetCenterPosition().y + Game.playereng[i].att.posy, 2, 1, Game.playereng[i].att.deg);			
			pelboxfree[i] = false;
		}			

		CreateBody(Game.enemy1, Game.e1wdbox, e1box, e1boxfree);			
	}
	else if (level == 1 && section == 1)
	{			
		delete Game.world;
		counter = 0;
		endcounter = 0;
		Game.pdead = false;
		Game.e1dead = false;
		Game.pepower = 2;		
		Game.pshield = 50;
		Game.world = createWorld();
		Game.background.src = "images/Space.png";	
		Game.pbullet = createHeavyCircle(1000, 1000, 2, 0);
		Game.plaser1 = createLaserCircle(1000, 1020, 1, 0);
		Game.e1bullet = createHeavyCircle(1020, 1020, 2, 0);
		Game.pwdbox = create1box(100,200,1,1,0);
		Game.prengbox = create1box(100 - 25,200 + 10,4,2,0);
		Game.plengbox = create1box(100 - 25,200 - 10,4,2,0);
		Game.prengboxfree = false;
		Game.plengboxfree = false;
		Game.e1wdbox = create1box(600,300,1,1,0);		
		
		//Game.bullet.SetLinearVelocity(new b2Vec2(-10,0));		
		
		Game.ground1 = createGround(400, 50, 400, 1, 0, 1);	
		Game.ground2 = createGround(778, 220, 10, 220, 0, 1);
		Game.ground3 = createGround(0, 220, 1, 220, 0, 1);
		Game.ground4 = createGround(400, 450, 400, 10, 0, 1);		
		CreateBody(Game.player, Game.pwdbox, pbox, pboxfree);			
		for (var i = 0; i < Game.playereng.length; i++){
			perbox[i] = create1box(Game.prengbox.GetCenterPosition().x + Game.playereng[i].att.posx, Game.prengbox.GetCenterPosition().y + Game.playereng[i].att.posy, 2, 1, Game.playereng[i].att.deg);			
			perboxfree[i] = false;
			pelbox[i] = create1box(Game.plengbox.GetCenterPosition().x + Game.playereng[i].att.posx, Game.plengbox.GetCenterPosition().y + Game.playereng[i].att.posy, 2, 1, Game.playereng[i].att.deg);			
			pelboxfree[i] = false;
		}		
		CreateBody(Game.enemy1, Game.e1wdbox, e1box, e1boxfree);		
		
		/*for (var i = 0; i < 20; i++){
			createHeavyCircle(Math.random()*500, Math.random()*300 + 100, 2, 0);
		}*/	
	}
	else if (level == 2 && section == 1){		
		delete Game.world;
		counter = 0;
		endcounter = 0;
		Game.pdead = false;
		Game.e2dead = false;
		Game.e3dead = false;
		Game.e4dead = false;
		Game.pepower = 2;		
		Game.pshield = 50;
		Game.world = createWorld();
		Game.background.src = "images/Space.png";	
		Game.pbullet = createHeavyCircle(1000, 1000, 2, 0);
		Game.plaser1 = createLaserCircle(1000, 1020, 1, 0);
		//centre of box
		Game.pwdbox = create1box(100,200,1,1,0);
		Game.prengbox = create1box(100 - 25,200 + 10,4,2,0);
		Game.plengbox = create1box(100 - 25,200 - 10,4,2,0);
		Game.prengboxfree = false;
		Game.plengboxfree = false;
		
		Game.ground1 = createGround(400, 50, 400, 1, 0, 1);	
		Game.ground2 = createGround(778, 220, 10, 220, 0, 1);
		Game.ground3 = createGround(0, 220, 1, 220, 0, 1);
		Game.ground4 = createGround(400, 450, 400, 10, 0, 1);	

		CreateBody(Game.player, Game.pwdbox, pbox, pboxfree);	
		
		for (var i = 0; i < Game.playereng.length; i++){
			perbox[i] = create1box(Game.prengbox.GetCenterPosition().x + Game.playereng[i].att.posx, Game.prengbox.GetCenterPosition().y + Game.playereng[i].att.posy, 2, 1, Game.playereng[i].att.deg);			
			perboxfree[i] = false;
			pelbox[i] = create1box(Game.plengbox.GetCenterPosition().x + Game.playereng[i].att.posx, Game.plengbox.GetCenterPosition().y + Game.playereng[i].att.posy, 2, 1, Game.playereng[i].att.deg);			
			pelboxfree[i] = false;
		}		
		
		Game.e2bullet = createMedCircle(1020, 1040, 2, 0);
		Game.e2wdbox = create1box(600,100,1,1,0);
		Game.e2canshoot = true;
		CreateBody(Game.enemy2, Game.e2wdbox, e2box, e2boxfree);		
		
		Game.e3bullet = createMedCircle(1020, 1060, 2, 0);
		Game.e3wdbox = create1box(600,200,1,1,0);
		Game.e3canshoot = true;
		CreateBody(Game.enemy2, Game.e3wdbox, e3box, e3boxfree);		
		
		Game.e4bullet = createMedCircle(1020, 1080, 2, 0);
		Game.e4wdbox = create1box(600,300,1,1,0);
		Game.e4canshoot = true;
		CreateBody(Game.enemy2, Game.e4wdbox, e4box, e4boxfree);			
	}
	else if (level == 3 && section == 1){
		delete Game.world;
		Game.world = createWorld();
		counter = 0;
		endcounter = 0;
		Game.pdead = false;
		Game.pepower = 2;		
		Game.pshield = 50;
		Game.astcounter = 0;
		Game.background.src = "images/Space.png";	
		Game.pbullet = createHeavyCircle(1000, 1000, 2, 0);
		Game.plaser1 = createLaserCircle(1000, 1020, 1, 0);
		//centre of box
		Game.pwdbox = create1box(100,200,1,1,0);
		Game.prengbox = create1box(100 - 25,200 + 10,4,2,0);
		Game.plengbox = create1box(100 - 25,200 - 10,4,2,0);
		Game.prengboxfree = false;
		Game.plengboxfree = false;
		
		Game.ground1 = createGround(400, 50, 400, 1, 0, 1);	
		Game.ground2 = createGround(778, 220, 10, 220, 0, 1);
		Game.ground3 = createGround(0, 220, 1, 220, 0, 1);
		Game.ground4 = createGround(400, 450, 400, 10, 0, 1);	

		CreateBody(Game.player, Game.pwdbox, pbox, pboxfree);	
		
		for (var i = 0; i < Game.playereng.length; i++){
			perbox[i] = create1box(Game.prengbox.GetCenterPosition().x + Game.playereng[i].att.posx, Game.prengbox.GetCenterPosition().y + Game.playereng[i].att.posy, 2, 1, Game.playereng[i].att.deg);			
			perboxfree[i] = false;
			pelbox[i] = create1box(Game.plengbox.GetCenterPosition().x + Game.playereng[i].att.posx, Game.plengbox.GetCenterPosition().y + Game.playereng[i].att.posy, 2, 1, Game.playereng[i].att.deg);			
			pelboxfree[i] = false;
		}			
	}
	else if (level == 4 && section == 1){
		delete Game.world;
		Game.world = createWorld();
		counter = 0;
		endcounter = 0;
		Game.pdead = false;
		Game.pepower = 2;		
		Game.pshield = 50;
		Game.detection = false;
		Game.background.src = "images/Space.png";	
		Game.pbullet = createHeavyCircle(1000, 1000, 2, 0);
		Game.plaser1 = createLaserCircle(1000, 1020, 1, 0);
		//centre of box
		Game.pwdbox = create1box(100,200,1,1,0);
		Game.prengbox = create1box(100 - 25,200 + 10,4,2,0);
		Game.plengbox = create1box(100 - 25,200 - 10,4,2,0);
		Game.prengboxfree = false;
		Game.plengboxfree = false;
		
		Game.ground1 = createGround(400, 50, 400, 1, 0, 1);	
		Game.ground2 = createGround(778, 220, 10, 220, 0, 1);
		Game.ground3 = createGround(0, 220, 1, 220, 0, 1);
		Game.ground4 = createGround(400, 450, 400, 10, 0, 1);	

		CreateBody(Game.player, Game.pwdbox, pbox, pboxfree);	
		
		for (var i = 0; i < Game.playereng.length; i++){
			perbox[i] = create1box(Game.prengbox.GetCenterPosition().x + Game.playereng[i].att.posx, Game.prengbox.GetCenterPosition().y + Game.playereng[i].att.posy, 2, 1, Game.playereng[i].att.deg);			
			perboxfree[i] = false;
			pelbox[i] = create1box(Game.plengbox.GetCenterPosition().x + Game.playereng[i].att.posx, Game.plengbox.GetCenterPosition().y + Game.playereng[i].att.posy, 2, 1, Game.playereng[i].att.deg);			
			pelboxfree[i] = false;
		}
		
		Game.planet1 = createGround(768, 140, 30, 90, 0, 0);
		Game.planet2 = createGround(768, 350, 30, 110, 0, 0);
		Game.planetshield = createGround(700, 250, 2, 200, 0, 1);
		
		Game.orbitaldefender = createHeavyCircle(350, 100, 40, 0);
		Game.orbitaldefender.SetLinearVelocity(new b2Vec2(0, 30));
		Game.odbullet = createHeavyCircle(1000, 1000, 4, 0);
		Game.odcanshoot = true;
		
	}
	else if (Game.level == 5 && Game.section == 1){
		delete Game.world;
		Game.world = createWorld();
		counter = 0;
		Game.background.src = "images/Space.png";			
		for (var i = 0; i < 99; i++){
			createCircle(325 + Math.random(), 220 + Math.random(),2,0);			
		}		
		Game.bomb = createHeavyCircle(20, 220,2, 0);		
		Game.bomb.SetLinearVelocity(new b2Vec2(100,0));
	}	
}
