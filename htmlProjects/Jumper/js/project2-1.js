var Game = {
}

var snd = new Audio("sounds/bossgrunt.mp3");
var snd2 = new Audio("sounds/bullet.mp3");
var snd3 = new Audio("sounds/explos.mp3");
var snd4 = new Audio("sounds/grunt.mp3");
var snd5 = new Audio("sounds/jump.mp3");
var snd6 = new Audio("sounds/swim.mp3");
var canvas;
var ctx;
var canvasWidth;
var canvasHeight;
var counter = 0;
var counter1 = 0;
var counter2 = 0;
var v1 = 0;
var v2 = 0;
Game.level = -1;
Game.section = 1;
Game.force = 300;
Game.health = 20;
Game.bosshealth = 3;
Game.textcounter = 0;
Game.explosioncounter = 0;
$(function() {	
	//Images
	Game.background = new Image();
	Game.background.src = "images/Title.png";
	Game.playerright1pic = new Image();
	Game.playerright1pic.src = "images/player-right-1.png";
	Game.playerright2pic = new Image();
	Game.playerright2pic.src = "images/player-right-2.png";
	Game.playerright3pic = new Image();
	Game.playerright3pic.src = "images/player-right-3.png";
	Game.playerright4pic = new Image();
	Game.playerright4pic.src = "images/player-right-4.png";
	Game.playerright5pic = new Image();
	Game.playerright5pic.src = "images/player-right-5.png";
	Game.playerright6pic = new Image();
	Game.playerright6pic.src = "images/player-right-6.png";
	Game.playerleft1pic = new Image();
	Game.playerleft1pic.src = "images/player-left-1.png";
	Game.playerleft2pic = new Image();
	Game.playerleft2pic.src = "images/player-left-2.png";
	Game.playerleft3pic = new Image();
	Game.playerleft3pic.src = "images/player-left-3.png";
	Game.playerleft4pic = new Image();
	Game.playerleft4pic.src = "images/player-left-4.png";
	Game.playerleft5pic = new Image();
	Game.playerleft5pic.src = "images/player-left-5.png";
	Game.playerleft6pic = new Image();
	Game.playerleft6pic.src = "images/player-left-6.png";
	Game.boxpic = new Image();
	Game.boxpic.src = "images/box.png";
	Game.ballenemy1pic = new Image();
	Game.ballenemy1pic.src = "images/enemy1.png";
	Game.ground1pic = new Image();
	Game.ground1pic.src = "images/ground1.png";
	Game.cartpic = new Image();
	Game.cartpic.src = "images/cart.png";
	Game.bulletpic = new Image();
	Game.bulletpic.src = "images/bullet.png";
	Game.bossredpic = new Image();
	Game.bossredpic.src = "images/bossred.png";
	Game.bossbluepic = new Image();
	Game.bossbluepic.src = "images/bossblue.png";
	Game.leftclaw = new Image();
	Game.leftclaw.src = "images/leftclaw.png";
	Game.rightclaw = new Image();
	Game.rightclaw.src = "images/rightclaw.png";
	//
	Game.world = createWorld();
	console.log("The world is created. ",Game.world);	
	Game.player = createPlayer(50, 210);
	Game.dummyplayer = createPlayer(50, 210);
	Game.playerjump = false;
	Game.playerdirect = 1;	
	Game.gamewinWall = createGround(600, 215, 15, 25, 0, 0);
	Game.sectionPlus = createGround(600, 215, 15, 25, 0, 0);
	//create the ground x, y, width, height, rotation
	Game.ground1 = createGround(150, 430, 150, 25, 0, 0);	
	Game.ground2 = createGround(600, 430, 170, 25, 0, 0);	
	Game.ground3 = createGround(600, 430, 170, 25, 0, 0);	
	Game.ground4 = createGround(600, 430, 170, 25, 0, 0);	
	Game.groundam1 = createGround(150, 430, 150, 25, 0, 0);	
	Game.groundam2 = createGround(600, 430, 170, 25, 0, 0);	
	Game.groundam3 = createGround(600, 430, 170, 25, 0, 0);		
	//create walls
	Game.wallleft = createGround(0,220,1,440,0, 0);
	Game.walltop = createGround(384,50,768,1,0, 0);	
	Game.wallright = createGround(768, 220,1,440,0, 0);
	Game.cart = createGround (500,430,70,25,0,0);
	Game.cartStart = false;
		
	Game.box1 = createBox(300,200);
	Game.box1oposy = Game.box1.GetCenterPosition().y;
	Game.box1move = true;
	
	Game.box2 = createBox(400,200);	
	Game.box2oposx = Game.box2.GetCenterPosition().x;
	Game.box2move = true;
	
	//Game.player.SetLinearVelocity(new b2Vec2(Game.player.velocity,0));
	Game.ball1 = createCircle (400, 50, 10, 1);
	Game.ball1.SetLinearVelocity(new b2Vec2(-200,0));
	Game.ball2 = createCircle (400, 50, 10, 1);
	Game.ball1.SetLinearVelocity(new b2Vec2(-200,0));
	Game.ballnograv1 = createCircle (400, 50, 10, 1);
	Game.ballnograv2 = createCircle (400, 50, 10, 1);
	Game.ballenemy1 = createCircle (400, 50, 20, 0);
	Game.boss = createBoss (400, 50, 20, 0);
	Game.bossdown = false;
	Game.getbullet = createCircle (0,0,5,0);
	Game.bullet = createCircle (0,0,5,0);
	Game.bossbullet = createCircle (0,0,5,0);
	Game.bulletamount = 0;
	
	Game.playerExplosionx = Game.player.GetCenterPosition().x;
	Game.playerExplosiony = Game.player.GetCenterPosition().x;
	Game.bossExplosionx = Game.boss.GetCenterPosition().x;
	Game.bossExplosiony = Game.boss.GetCenterPosition().y;
	Game.ball1Explosionx = Game.ball1.GetCenterPosition().x;
	Game.ball1Explosiony = Game.ball1.GetCenterPosition().y;
	Game.ball2Explosionx = Game.ball2.GetCenterPosition().x;
	Game.ball2Explosiony = Game.ball1.GetCenterPosition().y;
	
	buildWorld(Game.level,Game.section);
	
	canvas = document.getElementById('game');
	ctx = canvas.getContext('2d');
	canvasWidth = parseInt(canvas.width);
	canvasHeight = parseInt(canvas.height);
	// Keyboard event
	$(document).keydown(function(e) {	
		if(e.keyCode == 68 && Game.player.GetLinearVelocity().x < 100){
			Game.playerdirect = 1;
			if (Game.level == 2){
				Game.player.ApplyForce(new b2Vec2(Game.player.GetMass()*1000,0), Game.player.GetCenterPosition());	
			}
			else{
				Game.player.ApplyForce(new b2Vec2(Game.player.GetMass()*5000,0), Game.player.GetCenterPosition());								
			}
		}
		else if (e.keyCode == 65 && Game.player.GetLinearVelocity().x > -100){	
			Game.playerdirect = -1;
			if (Game.level == 2){
				Game.player.ApplyForce(new b2Vec2(-Game.player.GetMass()*1000,0), Game.player.GetCenterPosition());	
			}
			else{
				Game.player.ApplyForce(new b2Vec2(-Game.player.GetMass()*5000,0), Game.player.GetCenterPosition());	
			}	
		}
		/*else if (e.keyCode == 32 && Game.player.GetLinearVelocity().y <= .1 && Game.player.GetLinearVelocity().y >= 0){		
			console.log(Game.player.GetLinearVelocity().y);		
			Game.player.ApplyForce	(new b2Vec2(0, -Game.player.GetMass()*15000), Game.player.GetCenterPosition());				
		}	*/	
		else if (e.keyCode == 87 && Game.playerjump == true && Game.level != 2){			
			Game.playerjump = false;
			snd5.play();
			Game.player.ApplyForce	(new b2Vec2(0, -Game.player.GetMass()*15000), Game.player.GetCenterPosition());							
		}
		else if (e.keyCode == 87 && Game.level == 2 && Game.player.GetLinearVelocity().y > -100){			
			Game.playerjump = false;
			snd6.play();
			Game.player.ApplyForce	(new b2Vec2(0, -Game.player.GetMass()*5000), Game.player.GetCenterPosition());							
		}
		
		
		//level jumps
		else if (e.keyCode == 82){
			buildWorld(Game.level,Game.section);
		}
		else if (e.keyCode == 38){
			Game.section++;
			buildWorld(Game.level,Game.section);
		}
		else if (e.keyCode == 40){	
			Game.section = 1;
			Game.level++;
			buildWorld(Game.level,Game.section);
		}
		
		if (e.keyCode == 13){
			if(Game.level == -1 || Game.level == 0){
				Game.level++;
				buildWorld(Game.level,Game.section);
			}
			if(Game.level == 5){
				Game.level = 1;
				Game.section = 1;
				Game.health = 20;
				Game.bosshealth = 3;
				Game.bulletamount = 0;
				buildWorld(Game.level,Game.section);
			}
		}
		if (e.keyCode == 32 && Game.bulletamount == 1){
			snd2.play();
			Game.bulletamount = 0;		
			Game.bullet.SetCenterPosition(new b2Vec2 (Game.player.GetCenterPosition().x + Game.playerdirect * 20,Game.player.GetCenterPosition().y),0);					
			Game.bullet.SetLinearVelocity(new b2Vec2(300*Game.playerdirect,0));
		}
	});
	step();
});

function step() {	
	console.log(Game.level + " " + Game.section);
	Game.world.Step(1.0/60, 1);
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	drawWorld(Game.world, ctx);	
	
	drawingImages();
	
	setTimeout(step, 10);	
	counter++;		
	//Gives gravity to objects that don't want to float
	gravity(Game.force);
	
	v2 = Game.player.GetLinearVelocity().y;
	canJump();
	/*if (counter % 5 == 0)
	{
		Game.ground1.SetCenterPosition(new b2Vec2(150 + counter/5,270), 0);
	}*/
	boxMovement (Game.box1move, Game.box2move);
	
	
	ballMovement();	
	
	if (Game.player.GetCenterPosition().y - Game.ballenemy1.GetCenterPosition().y < 0){
		if (Game.player.GetCenterPosition().x - Game.ballenemy1.GetCenterPosition().x > 0){
			Game.ballenemy1.ApplyForce(new b2Vec2(Game.ballenemy1.GetMass()*50, -Game.ballenemy1.GetMass()*50), Game.ballenemy1.GetCenterPosition());		
		}
		else{
			Game.ballenemy1.ApplyForce(new b2Vec2(-Game.ballenemy1.GetMass()*50, -Game.ballenemy1.GetMass()*50), Game.ballenemy1.GetCenterPosition());		
		}
	}
	
	if (Game.level == 3 && counter % 5 == 0)
	{
		Game.ground1.SetCenterPosition(new b2Vec2 (400, 430 - counter/5),0);
	}
	if (Game.level == 3 & Game.section == 3 && counter % 100 == 0)
	{
		var box = createBox(Math.random() * 600 + 20, 100);			
		box.ApplyForce(new b2Vec2(0, box.GetMass()*Game.force*10), box.GetCenterPosition());		
	}
	
	/*if (Game.level == 4)
	{
		if(Game.section == 1 && counter % 150 == 0)
		{			
			var box1 = createBox (600, 100, 10, 0);				
			box1.SetLinearVelocity(new b2Vec2(-50,200));
			ball1.ApplyForce(new b2Vec2(0, ball1.GetMass()*force), ball1.GetCenterPosition());
			var ball2 = createBox (200, 100, 10, 0 );
			ball2.SetAngularVelocity(200);
			ball2.SetLinearVelocity(new b2Vec2(50,200));
			ball2.ApplyForce(new b2Vec2(0, ball2.GetMass()*force), ball2.GetCenterPosition());
		}
		
	}*/
	
	ColDetect();		
	
	if (Game.player.GetCenterPosition().y > 500 && Game.level != 2){		
		buildWorld(Game.level,Game.section);
		snd4.play();
		Game.health--;
	}
	if (Game.player.GetCenterPosition().x > 768 && Game.level != 2){
		Game.section++;
		buildWorld(Game.level,Game.section);
	}	
	else if (Game.player.GetCenterPosition().y > 500 && Game.level == 2){
		Game.section++;
		buildWorld(Game.level,Game.section);
	}	
	
	// Level 4 Cart movement data
	if(Game.level == 4 && Game.section == 2 && Game.player.GetCenterPosition().x > 450 && Game.cartStart == false){
		Game.cartStart = true;
		counter = 0;
	}	
	else if (Game.level == 4 && Game.section == 2 && Game.cartStart == true && counter % 5 == 0){		
		Game.cart.SetCenterPosition(new b2Vec2 (Game.cart.GetCenterPosition().x + 2, Game.cart.GetCenterPosition().y),0);
	}
	else if (Game.level == 4 && Game.section == 3 && counter % 5 == 0 && Game.cart.GetCenterPosition().x < 350){		
		Game.cart.SetCenterPosition(new b2Vec2 (Game.cart.GetCenterPosition().x + 2, Game.cart.GetCenterPosition().y),0);
	}
	else if (Game.level == 4 && Game.section == 3 && counter % 5 == 0 && Game.cart.GetCenterPosition().x == 350 && Game.cart.GetCenterPosition().y > 200){
		Game.cart.SetCenterPosition(new b2Vec2 (Game.cart.GetCenterPosition().x, Game.cart.GetCenterPosition().y - 2),0);
	}
	else if (counter % 5 == 0 && Game.cartStart == true){
		Game.cart.SetCenterPosition(new b2Vec2 (Game.cart.GetCenterPosition().x + 2, Game.cart.GetCenterPosition().y),0);
	}
	
	if(Game.level == 4 && Game.section == 3 && counter % 200 == 0)
	{
		Game.box1.SetCenterPosition(new b2Vec2 (600, Math.random() * 250 + 150),0);
		Game.box1.SetLinearVelocity(new b2Vec2 (-150,0));				
	}
	
	bossBattle();	
	
	if(Game.bosshealth == 0){		
		Game.playerExplosionx = Game.player.GetCenterPosition().x;
		Game.playerExplosiony = Game.player.GetCenterPosition().x;
		Game.bossExplosionx = Game.boss.GetCenterPosition().x;
		Game.bossExplosiony = Game.boss.GetCenterPosition().y;
		Game.ball1Explosionx = Game.ball1.GetCenterPosition().x;
		Game.ball1Explosiony = Game.ball1.GetCenterPosition().y;
		Game.ball2Explosionx = Game.ball2.GetCenterPosition().x;
		Game.ball2Explosiony = Game.ball1.GetCenterPosition().y;
		Game.level = 6;
		Game.section = 1;
		buildWorld(Game.level,Game.section);		
	}
	if (Game.level == 6 && Game.section == 1){
		explosion();		
	}
	if (Game.level == 6 && Game.section == 2){
		buildWorld(Game.level, Game.section);
		ctx.drawImage(Game.background, 0, 0);
	}
	
	if(Game.health == 0){
		Game.level = 5;
		Game.section = 1;
		buildWorld(Game.level,Game.section);
	}
	
	animation();	
	
	if(Game.player.GetLinearVelocity().x == 0){
		counter2 = 0;
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
//Drawing images
	ctx.drawImage(Game.background, 0, 0);
	if (Game.level == -1 || Game.level == 0 || Game.level == 5){
		drawEnterMessage("to Continue")
	}		
	else if (Game.level >= 1 && Game.level <= 4){
		if (Game.playerdirect == 1){
			ctx.drawImage(Game.playerright1pic,Game.player.GetCenterPosition().x-10,Game.player.GetCenterPosition().y-20);
		}
		else if (Game.playerdirect == -1){
			ctx.drawImage(Game.playerleft1pic,Game.player.GetCenterPosition().x-10,Game.player.GetCenterPosition().y-20);
		}
		if (Game.level == 1 && Game.section == 3){
			ctx.drawImage(Game.boxpic,Game.box1.GetCenterPosition().x-40,Game.box1.GetCenterPosition().y-20);
			ctx.drawImage(Game.boxpic,Game.box2.GetCenterPosition().x-40,Game.box2.GetCenterPosition().y-20);
		}
		else if (Game.level == 1 && Game.section == 4){
			ctx.drawImage(Game.boxpic,Game.box1.GetCenterPosition().x-40,Game.box1.GetCenterPosition().y-20);		
		}
		else if (Game.level == 2 && Game.section == 3){
			var circle_gradient = ctx.createRadialGradient(50,50,1,50,50,10);
			circle_gradient.addColorStop(0, "#fff");
			circle_gradient.addColorStop(1, "yellow");
			ctx.fillStyle = circle_gradient;
			ctx.beginPath();
			ctx.arc(Game.ballnograv1.GetCenterPosition().x, Game.ballnograv1.GetCenterPosition().y, 10, 0, Math.PI*2, true);
			ctx.closePath();
			ctx.fill();
			ctx.beginPath();
			ctx.arc(Game.ballnograv2.GetCenterPosition().x, Game.ballnograv2.GetCenterPosition().y, 10, 0, Math.PI*2, true);
			ctx.closePath();
			ctx.fill();
		}
		else if (Game.level == 2 && Game.section == 4){
			ctx.drawImage(Game.ballenemy1pic,Game.ballenemy1.GetCenterPosition().x-20,Game.ballenemy1.GetCenterPosition().y-20);
		}
		else if (Game.level == 3){
			ctx.drawImage(Game.ground1pic, Game.ground1.GetCenterPosition().x - 400, Game.ground1.GetCenterPosition().y - 25);
			if (Game.section == 2){
				var circle_gradient = ctx.createRadialGradient(50,50,1,50,50,10);
				circle_gradient.addColorStop(0, "#fff");
				circle_gradient.addColorStop(1, "yellow");
				ctx.fillStyle = circle_gradient;
				ctx.beginPath();
				ctx.arc(Game.ball1.GetCenterPosition().x, Game.ball1.GetCenterPosition().y, 10, 0, Math.PI*2, true);
				ctx.closePath();
				ctx.fill();
				ctx.beginPath();
				ctx.arc(Game.ball2.GetCenterPosition().x, Game.ball2.GetCenterPosition().y, 10, 0, Math.PI*2, true);
				ctx.closePath();
				ctx.fill();
			}
			else if (Game.section == 3){
				drawWorld(Game.world, ctx);	
			}
			else if (Game.section == 4){
				ctx.drawImage(Game.boxpic, Game.box1.GetCenterPosition().x-40, Game.box1.GetCenterPosition().y-20);			
			}
		}
		else if (Game.level == 4){
			ctx.drawImage(Game.bulletpic, Game.bullet.GetCenterPosition().x-5, Game.bullet.GetCenterPosition().y-5);	
			if (Game.section >= 2 && Game.section <= 4){
				ctx.drawImage(Game.cartpic, Game.cart.GetCenterPosition().x-70, Game.cart.GetCenterPosition().y-25);	
				if (Game.section == 3){
					ctx.drawImage(Game.boxpic, Game.box1.GetCenterPosition().x-40, Game.box1.GetCenterPosition().y-20);		
				}
				else if (Game.section == 4){
					drawWorld(Game.world, ctx);	
					console.log("yes");
				}			
			}
			if (Game.section == 5){
				counter1++;
				ctx.drawImage(Game.bossredpic, Game.boss.GetCenterPosition().x - 40, Game.boss.GetCenterPosition().y - 40);
				ctx.drawImage(Game.leftclaw, Game.ball1.GetCenterPosition().x - 20, Game.ball1.GetCenterPosition().y - 20);	
				ctx.drawImage(Game.rightclaw, Game.ball2.GetCenterPosition().x - 20, Game.ball2.GetCenterPosition().y - 20);
				ctx.drawImage(Game.bulletpic, Game.bossbullet.GetCenterPosition().x-5, Game.bossbullet.GetCenterPosition().y-5);
				if (counter1 < 100){
					ctx.drawImage(Game.bossbluepic, Game.boss.GetCenterPosition().x - 40, Game.boss.GetCenterPosition().y - 40);
				}
			}
		}
		ctx.fillStyle = "white";
		ctx.font = "26px Arial";
		ctx.fillText("Level: " + Game.level + "-" + Game.section, 200, 30);
		ctx.fillText("Health: " + Game.health, 600, 30);
		//End of drawing images
	}
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

function createBox(x,y) {
	// create a box
	var boxSd = new b2BoxDef();
	boxSd.density = 10;
	boxSd.friction = 1.5;
	boxSd.restitution = 0;
	boxSd.extents.Set(40, 20);	
	var boxBd = new b2BodyDef();
	boxBd.AddShape(boxSd);
	boxBd.position.Set(x,y);
	boxBd.preventRotation = true;
	var body = Game.world.CreateBody(boxBd);
	return body;
}

function createPlayer(x, y) {
	// the player box definition
	var boxSd = new b2BoxDef();
	boxSd.density = 1;
	boxSd.friction = 1.5;
	boxSd.restitution = 0;
	boxSd.extents.Set(10, 20);
	// the player body definition
	var boxBd = new b2BodyDef();
	boxBd.AddShape(boxSd);
	boxBd.position.Set(x,y);
	boxBd.preventRotation = true;
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
	
	Game.ball1 = createCircle (x - 70, y, 20, 1);
	Game.ball2 = createCircle (x + 70, y, 20, 1);
	
	var jointDef = new b2RevoluteJointDef();
	jointDef.anchorPoint.Set(x-90, y);
	jointDef.body1 = body;
	jointDef.body2 = Game.ball1;
	Game.world.CreateJoint(jointDef);
	
	jointDef.anchorPoint.Set(x+90, y);
	jointDef.body1 = body;
	jointDef.body2 = Game.ball2;
	Game.world.CreateJoint(jointDef);
	
	return body;
}

function canJump() {
	if (Math.abs(v2 - v1) == 5){			
		v1 = v2;
		Game.playerjump = false;
	}
	else{
		v1 = v2;
		Game.playerjump = true;
	}
}

function ColDetect(){
	for (var cn = Game.world.GetContactList(); cn != null;cn = cn.GetNext()) {
		var body1 = cn.GetShape1().GetBody();
		var body2 = cn.GetShape2().GetBody();
		if ((body1 == Game.player && body2 == Game.gamewinWall) ||	(body2 == Game.player && body1 == Game.gamewinWall)){
			console.log("Level Passed!");
			Game.level++;
			Game.health = Game.health + 5;
			Game.section = 1;
			buildWorld(Game.level, Game.section);
		}	
		else if ((body1 == Game.player && body2 == Game.sectionPlus) ||	(body2 == Game.player && body1 == Game.sectionPlus)){
			console.log("Level Passed!");
			Game.section++;
			buildWorld(Game.level, Game.section);
		}
		else if((body1 == Game.player && body2 == Game.ball1) || (body2 == Game.player && body1 == Game.ball1)){
			Game.health--;	
			snd4.play();
			buildWorld(Game.level, Game.section);	
		}
		else if((body1 == Game.player && body2 == Game.ball2) || (body2 == Game.player && body1 == Game.ball2)){
			Game.health--;	
			snd4.play();			
			buildWorld(Game.level, Game.section);
		}
		if((body1 == Game.player && body2 == Game.groundam1) || (body2 == Game.player && body1 == Game.groundam1) || (body1 == Game.player && body2 == Game.groundam2) || (body2 == Game.player && body1 == Game.groundam2) || (body1 == Game.player && body2 == Game.groundam3) || (body2 == Game.player && body1 == Game.groundam3)){
			Game.health--;			
			snd4.play();
			buildWorld(Game.level, Game.section);
		}
		if((body1 == Game.player && body2 == Game.ballnograv1) || (body2 == Game.player && body1 == Game.ballnograv1) || (body1 == Game.player && body2 == Game.ballnograv2) || (body2 == Game.player && body1 == Game.ballnograv2) || (body1 == Game.player && body2 == Game.ballenemy1) || (body2 == Game.player && body1 == Game.ballenemy1)){
			Game.health--;	
			snd4.play();			
			buildWorld(Game.level, Game.section);
		}
		if (body2 == Game.bullet){
			Game.bullet.SetCenterPosition(new b2Vec2 (1000,1000),0);
			Game.bullet.SetLinearVelocity(new b2Vec2(0,0),Game.bullet.GetCenterPosition());
			Game.bulletamount++;
		}
		if ((body2 == Game.player && body1 == Game.getbullet) || (body1 == Game.player && body2 == Game.getbullet)){
			Game.bulletamount = 1;
			Game.getbullet.SetCenterPosition(new b2Vec2 (1050,1050),0);		
			Game.getbullet.SetLinearVelocity(new b2Vec2(0,0),Game.getbullet.GetCenterPosition());	
		}
		if ((body1 == Game.bullet && body2 == Game.boss) || (body2 == Game.bullet && body1 == Game.boss)){
			counter1 = 0;
			snd.play();
			Game.bosshealth--;
		}
		if ((body1 == Game.bossbullet && body2 == Game.player) || (body2 == Game.bossbullet && body1 == Game.player)){			
			Game.health--;
			snd4.play();
			if (Game.boss.GetCenterPosition().x - Game.player.GetCenterPosition().x > 0){			
				Game.bossbullet.SetCenterPosition(new b2Vec2(Game.ball1.GetCenterPosition().x - 30, Game.ball1.GetCenterPosition().y),0);
				Game.bossbullet.SetLinearVelocity(new b2Vec2 (.5*(Game.player.GetCenterPosition().x - Game.bossbullet.GetCenterPosition().x),.5*(Game.player.GetCenterPosition().y - Game.bossbullet.GetCenterPosition().y)));
			}
			else if (Game.boss.GetCenterPosition().x - Game.player.GetCenterPosition().x < 0){				
				Game.bossbullet.SetCenterPosition(new b2Vec2(Game.ball2.GetCenterPosition().x + 30, Game.ball2.GetCenterPosition().y),0);
				Game.bossbullet.SetLinearVelocity(new b2Vec2 (.5*(Game.player.GetCenterPosition().x - Game.bossbullet.GetCenterPosition().x),.5*(Game.player.GetCenterPosition().y - Game.bossbullet.GetCenterPosition().y)));
			}
		}
	}	
	if (Game.level == 3 && (Game.ground1.GetCenterPosition().y - Game.player.GetCenterPosition().y) < 40)
	{
		Game.health--;
		snd4.play();
		buildWorld(Game.level,Game.section);
	}
}

function gravity (force){
		Game.player.ApplyForce(new b2Vec2(0, Game.player.GetMass()*force), Game.player.GetCenterPosition());
		Game.ball1.ApplyForce(new b2Vec2(0, Game.ball1.GetMass()*force), Game.ball1.GetCenterPosition());
		Game.ball2.ApplyForce(new b2Vec2(0, Game.ball2.GetMass()*force), Game.ball2.GetCenterPosition());
		Game.ballenemy1.ApplyForce(new b2Vec2(0, Game.ballenemy1.GetMass()*force), Game.ballenemy1.GetCenterPosition());
}

function ballMovement(){	
	if (Game.ballnograv1.GetCenterPosition().x <= 140 && Game.ballnograv1.GetCenterPosition().y >= 210){
		Game.ballnograv1.SetLinearVelocity(new b2Vec2(100,0));
	}
	else if (Game.ballnograv1.GetCenterPosition().x >= 260 && Game.ballnograv1.GetCenterPosition().y >= 210){
		Game.ballnograv1.SetLinearVelocity(new b2Vec2(0,-100));
	}	
	else if (Game.ballnograv1.GetCenterPosition().x >= 260 && Game.ballnograv1.GetCenterPosition().y <= 90){
		Game.ballnograv1.SetLinearVelocity(new b2Vec2(-100,0));
	}
	else if (Game.ballnograv1.GetCenterPosition().x <= 140 && Game.ballnograv1.GetCenterPosition().y <= 90){
		Game.ballnograv1.SetLinearVelocity(new b2Vec2(0,100));
	}
	if (Game.ballnograv2.GetCenterPosition().x <= 340 && Game.ballnograv2.GetCenterPosition().y >= 360){
		Game.ballnograv2.SetLinearVelocity(new b2Vec2(100,0));
	}
	else if (Game.ballnograv2.GetCenterPosition().x >= 460 && Game.ballnograv2.GetCenterPosition().y >= 360){
		Game.ballnograv2.SetLinearVelocity(new b2Vec2(0,-100));
	}	
	else if (Game.ballnograv2.GetCenterPosition().x >= 460 && Game.ballnograv2.GetCenterPosition().y <= 240){
		Game.ballnograv2.SetLinearVelocity(new b2Vec2(-100,0));
	}
	else if (Game.ballnograv2.GetCenterPosition().x <= 340 && Game.ballnograv2.GetCenterPosition().y <= 240){
		Game.ballnograv2.SetLinearVelocity(new b2Vec2(0,100));
	}
}

function boxMovement (move1, move2){
	if (move1 == true){
		if (Game.box1.GetCenterPosition().x > 500)
		{
			Game.box1.SetLinearVelocity(new b2Vec2(-70,0));
		}
		else if (Game.box1.GetCenterPosition().x < 250)
		{
			Game.box1.SetLinearVelocity(new b2Vec2(70,0));
		}
		if (Game.box1.GetCenterPosition().y < Game.box1oposy)
		{
			Game.box1.ApplyForce(new b2Vec2(0, (Game.player.GetMass()+Game.box1.GetMass())*15), Game.box1.GetCenterPosition());			
		}
		else if (Game.box1.GetCenterPosition().y > Game.box1oposy)
		{
			Game.box1.ApplyForce(new b2Vec2(0, -(Game.player.GetMass()+Game.box1.GetMass())*15), Game.box1.GetCenterPosition());			
		}
		//console.log(Game.box1.GetCenterPosition().y + " " + Game.box1oposy);
	}
	if (move2 == true){
		if (Game.box2.GetCenterPosition().y > 380)
		{
			Game.box2.SetLinearVelocity(new b2Vec2(0,-70));
		}
		else if (Game.box2.GetCenterPosition().y < 150)
		{
			Game.box2.SetLinearVelocity(new b2Vec2(0,70));
		}
		if (Game.box2.GetCenterPosition().x < Game.box2oposx)
		{
			Game.box2.ApplyForce(new b2Vec2((Game.player.GetMass()+Game.box2.GetMass())*15, 0), Game.box2.GetCenterPosition());			
		}
		else if (Game.box2.GetCenterPosition().x > Game.box2oposx)
		{
			Game.box2.ApplyForce(new b2Vec2(-(Game.player.GetMass()+Game.box2.GetMass())*15, 0), Game.box2.GetCenterPosition());			
		}
	}
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
	context.strokeStyle = '#003300';
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

function bossBattle(){
	if(Game.level == 4 && Game.section == 5)
	{
		Game.player.ApplyForce(new b2Vec2(0, Game.player.GetMass()*300), Game.player.GetCenterPosition());		
		if (counter % 50 == 0){
			Game.boss.SetCenterPosition(new b2Vec2(Game.boss.GetCenterPosition().x + (Math.random() - .5) * 10, Game.boss.GetCenterPosition().y),0);
			Game.ball1.SetLinearVelocity(new b2Vec2 (-300 * Math.random(),0));
			Game.ball2.SetLinearVelocity(new b2Vec2 (300 * Math.random(),0));
		}
		if (counter % 120 == 0){
			if (Game.boss.GetCenterPosition().x - Game.player.GetCenterPosition().x > 0){
				Game.bossbullet.SetCenterPosition(new b2Vec2(Game.ball1.GetCenterPosition().x - 30, Game.ball1.GetCenterPosition().y),0);
				Game.bossbullet.SetLinearVelocity(new b2Vec2 (.5*(Game.player.GetCenterPosition().x - Game.bossbullet.GetCenterPosition().x),.5*(Game.player.GetCenterPosition().y - Game.bossbullet.GetCenterPosition().y)));
			}
			else if (Game.boss.GetCenterPosition().x - Game.player.GetCenterPosition().x < 0){
				Game.bossbullet.SetCenterPosition(new b2Vec2(Game.ball2.GetCenterPosition().x + 30, Game.ball2.GetCenterPosition().y),0);
				Game.bossbullet.SetLinearVelocity(new b2Vec2 (.5*(Game.player.GetCenterPosition().x - Game.bossbullet.GetCenterPosition().x),.5*(Game.player.GetCenterPosition().y - Game.bossbullet.GetCenterPosition().y)));
			}
		}
		if (counter % 500 == 0)
		{	
			if (Game.bossdown == false){
				Game.bossdown = true;
			}
			else{
				Game.bossdown = false;
			}
		}
		if (Game.bossdown == true && Game.boss.GetCenterPosition().y < 250){
			Game.boss.SetCenterPosition(new b2Vec2(Game.boss.GetCenterPosition().x, Game.boss.GetCenterPosition().y + 1),0);
		}
		if (Game.bossdown == false && Game.boss.GetCenterPosition().y > 150){
			Game.boss.SetCenterPosition(new b2Vec2(Game.boss.GetCenterPosition().x, Game.boss.GetCenterPosition().y - 1),0);
		}
	}
}

function animation(){	
	if(Game.player.GetLinearVelocity().x < 0 && counter % 10 && Game.playerdirect == -1 && Game.level >= 1 && Game.level <= 4){
		if(counter2 == 0){
			ctx.drawImage(Game.playerleft1pic,Game.player.GetCenterPosition().x-10,Game.player.GetCenterPosition().y-20);
		}
		else if(counter2 == 1){
			ctx.drawImage(Game.playerleft2pic,Game.player.GetCenterPosition().x-10,Game.player.GetCenterPosition().y-20);
		}
		else if(counter2 == 2){
			ctx.drawImage(Game.playerleft3pic,Game.player.GetCenterPosition().x-10,Game.player.GetCenterPosition().y-20);
		}
		else if(counter2 == 3){
			ctx.drawImage(Game.playerleft4pic,Game.player.GetCenterPosition().x-10,Game.player.GetCenterPosition().y-20);
		}
		else if(counter2 == 4){
			ctx.drawImage(Game.playerleft5pic,Game.player.GetCenterPosition().x-10,Game.player.GetCenterPosition().y-20);
		}
		else if(counter2 == 5){
			ctx.drawImage(Game.playerleft6pic,Game.player.GetCenterPosition().x-10,Game.player.GetCenterPosition().y-20);
			counter2 = 0;
		}
		counter2++;
	}
	if(Game.player.GetLinearVelocity().x > 0 && counter % 10 && Game.playerdirect == 1 && Game.level >= 1 && Game.level <= 4){
		if(counter2 == 0){
			ctx.drawImage(Game.playerright1pic,Game.player.GetCenterPosition().x-10,Game.player.GetCenterPosition().y-20);
		}
		else if(counter2 == 1){
			ctx.drawImage(Game.playerright2pic,Game.player.GetCenterPosition().x-10,Game.player.GetCenterPosition().y-20);
		}
		else if(counter2 == 2){
			ctx.drawImage(Game.playerright3pic,Game.player.GetCenterPosition().x-10,Game.player.GetCenterPosition().y-20);
		}
		else if(counter2 == 3){
			ctx.drawImage(Game.playerright4pic,Game.player.GetCenterPosition().x-10,Game.player.GetCenterPosition().y-20);
		}
		else if(counter2 == 4){
			ctx.drawImage(Game.playerright5pic,Game.player.GetCenterPosition().x-10,Game.player.GetCenterPosition().y-20);
		}
		else if(counter2 == 5){
			ctx.drawImage(Game.playerright6pic,Game.player.GetCenterPosition().x-10,Game.player.GetCenterPosition().y-20);
			counter2 = 0;
		}
		counter2++;
	}
}

function drawEnterMessage (message){
	if (Game.textcounter == 0)
	{
		ctx.fillStyle = "red";
		ctx.font = "26px 'Rock Salt'";
		ctx.fillText("Press Enter", 100, 300);
		ctx.fillText(message, 100, 350);
		Game.textcounter++;
	}
	else if (Game.textcounter == 1)
	{
		ctx.fillStyle = "orange";
		ctx.font = "26px 'Rock Salt'";
		ctx.fillText("Press Enter", 100, 300);
		ctx.fillText(message, 100, 350);
		Game.textcounter++;
	}
	else if (Game.textcounter == 2)
	{
		ctx.fillStyle = "yellow";
		ctx.font = "26px 'Rock Salt'";
		ctx.fillText("Press Enter", 100, 300);
		ctx.fillText(message, 100, 350);
		Game.textcounter++;
	}
	else if (Game.textcounter == 3)
	{
		ctx.fillStyle = "green";
		ctx.font = "26px 'Rock Salt'";
		ctx.fillText("Press Enter", 100, 300);
		ctx.fillText(message, 100, 350);
		Game.textcounter++;
	}
	else if (Game.textcounter == 4)
	{
		ctx.fillStyle = "blue";
		ctx.font = "26px 'Rock Salt'";
		ctx.fillText("Press Enter", 100, 300);
		ctx.fillText(message, 100, 350);
		Game.textcounter = 0;
	}
}

function explosion(){
	ctx.drawImage(Game.bossbluepic, Game.bossExplosionx - 40, Game.bossExplosiony - 40);
	ctx.drawImage(Game.leftclaw, Game.ball1Explosionx - 20, Game.ball1Explosiony - 20);	
	ctx.drawImage(Game.rightclaw,Game.ball2Explosionx - 20, Game.ball2Explosiony - 20);	
	ctx.drawImage(Game.playerright1pic, Game.playerExplosionx - 10, Game.playerExplosiony - 20);	
	if(Game.explosioncounter < 300){
		var circle_gradient = ctx.createRadialGradient(50,50,1,50,50,2*Game.explosioncounter/2);
		circle_gradient.addColorStop(0, "#fff");
		circle_gradient.addColorStop(1, "yellow");
		ctx.fillStyle = circle_gradient;
		ctx.beginPath();
		ctx.arc(Game.bossExplosionx, Game.bossExplosiony, 2*Game.explosioncounter/2, 0, Math.PI*2, true);
		ctx.closePath();
		ctx.fill();
		Game.explosioncounter++;
	}
	else{
		Game.section = 2;
		buildWorld(6,2);
	}
}

function buildWorld(level, section) {	
	if (level == -1 && section == 1)
	{			
		Game.background.src = "images/Title.png";				
		delete Game.world;
		Game.world = createWorld();
	}
	else if (level == 0 && section == 1)
	{			
		Game.background.src = "images/Title2.png";				
		delete Game.world;
		Game.world = createWorld();
	}
	else if (level == 1 && section == 1)
	{			
		Game.background.src = "images/Level11.png";		
		Game.force = 300;
		delete Game.world;
		Game.world = createWorld();
		Game.ground1 = createGround(150, 430, 170, 25, 0, 0);	
		Game.ground2 = createGround(650, 430, 170, 25, 0, 0);	
		//create walls
		Game.wallleft = createGround(0,220,1,440,0, 0);
		Game.walltop = createGround(384,50,768,1,0, 0);
		Game.player = createPlayer(50, 210);
	}
	else if (level == 1 && section == 2){
		Game.background.src = "images/Level12.png";
		delete Game.world;
		Game.world = createWorld();
		Game.ground1 = createGround(100, 430, 150, 25, 0, 0);	
		Game.ground2 = createGround(350, 330, 50, 15, 0, 0);	
		Game.ground3 = createGround(350, 200, 50, 15, 0, 0);	
		Game.ground4 = createGround(700, 430, 100, 25, 0, 0);	
		//create walls		
		Game.walltop = createGround(384,50,768,1,0, 0);
		Game.wallleft = createGround(0,220,1,440,0);
		Game.player = createPlayer(10, 400);			
	}
	else if (level == 1 && section == 3){
		Game.background.src = "images/Level13.png";
		delete Game.world;
		Game.world = createWorld();
		Game.ground1 = createGround(200, 430, 200, 25, 0, 0);			
		Game.ground2 = createGround(400, 430, 25, 150, 0, 0);	
		Game.ground4 = createGround(700, 430, 130, 25, 0, 0);	
		Game.box1 = createBox(300,200);
		Game.box1.SetLinearVelocity(new b2Vec2(200,0));
		Game.box1oposy = Game.box1.GetCenterPosition().y;
		Game.box2 = createBox(150,200);	
		Game.box2oposx = Game.box2.GetCenterPosition().x;
		Game.box2.SetLinearVelocity(new b2Vec2(0,-200));
		Game.walltop = createGround(384,50,768,1,0, 0);
		Game.wallleft = createGround(0,220,1,440,0);
		Game.player = createPlayer(10, 400);	
	}
	else if (level == 1 && section == 4){
		Game.background.src = "images/Level14.png";
		delete Game.world;
		Game.world = createWorld();
		Game.ground1 = createGround(50, 430, 50, 25, 0, 0);			
		Game.ground4 = createGround(700, 430, 130, 25, 0, 0);	
		Game.box1 = createBox(300,360);
		Game.box1.SetLinearVelocity(new b2Vec2(-200,0));
		Game.walltop = createGround(384,50,768,1,0, 0);
		Game.wallleft = createGround(0,220,1,440,0);
		Game.player = createPlayer(10, 400);			
		Game.gamewinWall = createGround(700, 430, 25, 25, 0, 0);
		Game.box1oposy = Game.box1.GetCenterPosition().y;
	}
	else if (level == 2 && section == 1){
		Game.background.src = "images/Level21.png";
		delete Game.world;
		Game.world = createWorld();
		Game.force = 20;
		Game.wallleft = createGround(0,220,1,440,0, 0);
		Game.walltop = createGround(384,50,768,1,0, 0);	
		Game.wallright = createGround(768, 220,1,440,0, 0);
		Game.ground1 = createGround(150, 430, 500, 25, 0, 0);
		Game.ground2 = createGround(200, 150, 50, 50, 0, 0);	
		Game.ground3 = createGround(400, 300, 50, 50, 0, 0);	
		Game.player = createPlayer(10, 100);
	}
	else if (level == 2 && section == 2){
		Game.background.src = "images/Level22.png";
		delete Game.world;
		Game.world = createWorld();		
		Game.wallleft = createGround(0,220,1,440,0, 0);
		Game.walltop = createGround(384,50,768,1,0, 0);	
		Game.wallright = createGround(768, 220,1,440,0, 0);		
		Game.ground1 = createGround(450, 430, 350, 25, 0, 0);
		Game.groundam1 = createGround(120, 305, 20, 100, 0, 0);
		Game.groundam2 = createGround(300, 150, 20, 100, 0, 0);	
		Game.groundam3 = createGround(550, 305, 20, 100, 0, 0);			
		Game.player = createPlayer(750, 100);
	}
	else if (level == 2 && section == 3){
		Game.background.src = "images/Level23.png";
		delete Game.world;
		Game.world = createWorld();		
		Game.wallleft = createGround(0,220,1,440,0, 0);
		Game.walltop = createGround(384,50,768,1,0, 0);	
		Game.wallright = createGround(768, 220,1,440,0, 0);
		Game.ground1 = createGround(150, 430, 500, 25, 0, 0);
		Game.ground2 = createGround(200, 150, 50, 50, 0, 0);	
		Game.ground3 = createGround(400, 300, 50, 50, 0, 0);	
		Game.ground4 = createGround(485, 250, 10, 150, 0, 0);
		Game.player = createPlayer(10, 100);
		Game.ballnograv1 = createCircle (140, 90, 10, 10);
		Game.ballnograv2 = createCircle (460, 360, 10, 10);
		Game.ballnograv1.SetLinearVelocity(new b2Vec2(0,100));
		Game.ballnograv2.SetLinearVelocity(new b2Vec2(0,-100));
	}
	else if (level == 2 && section == 4){   
		Game.background.src = "images/Level24.png";
		delete Game.world;
		Game.world = createWorld();		
		Game.wallleft = createGround(0,220,1,440,0, 0);
		Game.walltop = createGround(384,50,768,1,0, 0);	
		Game.wallright = createGround(768, 220,1,440,0, 0);
		Game.ground1 = createGround(450, 430, 350, 25, 0, 0);
		Game.ground2 = createGround(120, 305, 20, 100, 0, 0);
		Game.ground3 = createGround(500, 150, 20, 100, 0, 0);	
		Game.player = createPlayer(750, 100);
		Game.ballenemy1 = createCircle (200, 300, 20, 0);
		Game.gamewinWall = createGround(50, 430, 50, 25, 0, 0);
	}
	else if (level == 3 && section == 1){
		Game.background.src = "images/Level31.png";
		delete Game.world;
		Game.force = 300;
		Game.world = createWorld();		
		Game.wallleft = createGround(0,220,1,440,0, 0);
		Game.walltop = createGround(384,50,768,1,0, 0);	
		Game.wallright = createGround(768, 220,1,440,0, 0);
		Game.ground1 = createGround(400, 430, 400, 25, 0, 0);
		Game.ground2 = createGround(150, 250, 300, 20, 0, 0);
		Game.ground3 = createGround(550, 150, 300, 20, 0, 0);	
		Game.player = createPlayer(50, 380);
		Game.sectionPlus = createGround(700, 50, 25, 1, 0, 0);
		counter = 0;
	}
	else if (level == 3 && section == 2){
		Game.background.src = "images/Level32.png";
		delete Game.world;		
		Game.box1move = false;
		Game.box2move = false;
		Game.world = createWorld();		
		Game.wallleft = createGround(0,220,1,440,0, 0);
		Game.walltop = createGround(384,50,768,1,0, 0);	
		Game.wallright = createGround(768, 220,1,440,0, 0);
		Game.ground1 = createGround(400, 430, 400, 25, 0, 0);
		Game.ground2 = createGround(350, 300, 40, 40, 0, 0);
		Game.ground3 = createGround(550, 200, 40, 40, 0, 0);	
		Game.ground4 = createGround(200, 200, 40, 40, 0, 0);	
		Game.player = createPlayer(650, 380);
		Game.sectionPlus = createGround(100, 50, 25, 1, 0, 0);
		Game.ball1 = createCircle (600, 420, 10, 1);
		Game.ball1.SetLinearVelocity(new b2Vec2(-200,0));
		Game.ball2 = createCircle (200, 420, 10, 1);
		Game.ball2.SetLinearVelocity(new b2Vec2(200,0));
		counter = 0;
	}
	else if (level == 3 && section == 3){
		Game.background.src = "images/Level33.png";
		delete Game.world;		
		Game.world = createWorld();		
		Game.wallleft = createGround(0,220,1,440,0);
		Game.walltop = createGround(384,50,768,1,0);	
		Game.wallright = createGround(768, 220,1,440,0);
		Game.ground1 = createGround(400, 430, 400, 25, 0, 0);
		Game.player = createPlayer(50, 380);
		Game.sectionPlus = createGround(700, 50, 25, 1, 0);
		counter = 0;
	}
	else if (level == 3 && section == 4){
		Game.background.src = "images/Level34.png";
		delete Game.world;		
		Game.box1move = true;
		Game.world = createWorld();		
		Game.wallleft = createGround(0,220,1,440,0);
		Game.walltop = createGround(384,50,768,1,0);	
		Game.wallright = createGround(768, 220,1,440,0);
		Game.ground1 = createGround(400, 430, 400, 25, 0);
		Game.ground2 = createGround(400, 350, 20, 150, 0);
		Game.ground3 = createGround(200, 200, 200, 20, 0);	
		//Game.ground4 = createGround(550, 150, 300, 20, 0);	
		Game.player = createPlayer(700, 380);
		Game.gamewinWall = createGround(100, 50, 25, 1, 0);
		Game.box1 = createBox(300,150);
		Game.box1.SetLinearVelocity(new b2Vec2(200,0));
		Game.box1oposy = Game.box1.GetCenterPosition().y;
		counter = 0;
	}
	else if (level == 4 && section == 1){
		Game.background.src = "images/Level41.png";
		delete Game.world;				
		Game.world = createWorld();				
		Game.wallleft = createGround(0,220,1,440,0);
		Game.walltop = createGround(384,50,768,1,0);	
		Game.wallright = createGround(800, 220,1,440,0, 0);		
		Game.ground1 = createGround(400, 430, 400, 25, 0);
		Game.ground2 = createGround(200, 380, 100, 20, 0);
		Game.ground3 = createGround(400, 330, 100, 20, 0);	
		Game.ground4 = createGround(600, 280, 100, 20, 0);
		createGround(170, 280, 70, 20, 0);
		Game.player = createPlayer(50, 380);	
		Game.getbullet = createCircle (200,330,5,0);	
		Game.bullet = createCircle (1000,1000,5,0);		
		counter = 0;
	}
	else if (level == 4 && section == 2){
		Game.background.src = "images/Level42.png";
		delete Game.world;		
		Game.bulletamount = 1;
		Game.world = createWorld();		
		Game.wallleft = createGround(0,220,1,440,0);
		Game.walltop = createGround(384,50,768,1,0);
		Game.wallright = createGround(800, 220,1,440,0, 0);		
		Game.ground1 = createGround(200, 430, 200, 25, 0);
		Game.player = createPlayer(50, 380);				
		Game.bullet = createCircle (1000,1000,5,0);
		Game.cart = createGround (500,430,70,25,0,0);
		counter = 0;
	}
	else if (level == 4 && section == 3){
		Game.background.src = "images/Level43.png";
		delete Game.world;		
		Game.box1move = false;
		Game.world = createWorld();	
		Game.bulletamount = 1;
		Game.wallleft = createGround(0,220,1,440,0);
		Game.walltop = createGround(384,50,768,1,0);
		Game.wallright = createGround(800, 220,1,440,0, 0);	
		Game.player = createPlayer(50, 380);
		Game.bullet = createCircle (1000,1000,5,0);
		Game.cart = createGround (70,430,70,25,0,0);
		Game.box1 = createBox(600, Math.random() * 250 + 150);		
		Game.box1.SetLinearVelocity(new b2Vec2 (-150,0));
		counter = 0;
	}
	else if (level == 4 && section == 4){
		Game.background.src = "images/Level44.png";
		delete Game.world;				
		Game.world = createWorld();	
		Game.bulletamount = 1;
		Game.wallleft = createGround(0,220,1,440,0);
		Game.walltop = createGround(384,50,768,1,0);
		Game.wallright = createGround(800, 220,1,440,0, 0);	
		createGround (400,550,400,1,0,0);
		Game.player = createPlayer(50, 150);
		Game.bullet = createCircle (1000,1000,5,0);
		Game.cart = createGround (70,200,70,25,0,0);
		var ball1 = createHeavyCircle (Math.random()*650, Math.random()*300 + 100, 10, 1);
		ball1.SetLinearVelocity(new b2Vec2(Math.random() * 150,Math.random() * -150));
		var ball2 = createHeavyCircle (Math.random()*650, Math.random()*300 + 100, 10, 1);
		ball2.SetLinearVelocity(new b2Vec2(Math.random() * -150,Math.random() * -150));
		var ball3 = createHeavyCircle (Math.random()*650, Math.random()*300 + 100, 10, 1);
		ball3.SetLinearVelocity(new b2Vec2(Math.random() * 150,Math.random() * -150));
		var ball4 = createHeavyCircle (Math.random()*650, Math.random()*300 + 100, 10, 1);
		ball4.SetLinearVelocity(new b2Vec2(Math.random() * -150,Math.random() * -150));
		var ball5 = createHeavyCircle (Math.random()*650, Math.random()*300 + 100, 10, 1);
		ball5.SetLinearVelocity(new b2Vec2(Math.random() * 150,Math.random() * -150));
		var ball6 = createHeavyCircle (Math.random()*650, Math.random()*300 + 100, 10, 1);
		ball6.SetLinearVelocity(new b2Vec2(Math.random() * -150,Math.random() * -150));
		var ball7 = createHeavyCircle (Math.random()*650, Math.random()*300 + 100, 10, 1);
		ball7.SetLinearVelocity(new b2Vec2(Math.random() * 150,Math.random() * -150));
		var ball8 = createHeavyCircle (Math.random()*650, Math.random()*300 + 100, 10, 1);
		ball8.SetLinearVelocity(new b2Vec2(Math.random() * -150,Math.random() * -150));
		counter = 1;
	}
	else if (level == 4 && section == 5){
		Game.background.src = "images/Level45.png";
		delete Game.world;	
		Game.force = 0;
		Game.world = createWorld();	
		Game.bulletamount = 1;
		Game.wallleft = createGround(0,220,1,440,0);
		Game.walltop = createGround(384,50,768,1,0);
		Game.wallright = createGround(768, 220,1,440,0, 0);	
		Game.ground1 = createGround(400, 430, 400, 25, 0);
		Game.boss = createBoss (400, 150, 40, 0);			
		Game.player = createPlayer(50, 150);
		Game.ground2 = createGround (25, 384, 25, 30, 0, 1.5);
		Game.ground2 = createGround (743, 384, 25, 30, 0, 1.5);	
		Game.bossbullet = createCircle (1100,1100,5,0);		
		Game.bullet = createCircle (1000,1000,5,0);
		
		/*Game.ball1 = createCircle (600, 420, 10, 1);
		Game.ball1.SetLinearVelocity(new b2Vec2(-200,0));
		Game.ball2 = createCircle (200, 420, 10, 1);
		Game.ball2.SetLinearVelocity(new b2Vec2(200,0));*/
		
		counter = 1;
		counter1 = 101;
	}
	else if (level == 5 && section == 1){
		Game.background.src = "images/Lose.png";
		delete Game.world;			
		Game.world = createWorld();			
	}
	else if (level == 6 && section == 1){
		Game.background.src = "images/Level45.png";
		delete Game.world;			
		Game.world = createWorld();		
		//snd3.play();			
	}
	else if (level == 6 && section == 2){		
		Game.background.src = "images/Win.png";
		delete Game.world;			
		Game.world = createWorld();			
	}
}