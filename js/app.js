"use strict";
//Declare all using variables 
var ENEMY_X1 = Math.random();
var ENEMY_Y1 = Math.random() + 80;
var ENEMY_X2 = Math.random() - 100;
var ENEMY_Y2 = ENEMY_Y1 + 100;
var ENEMY_X3 = Math.random() - 200;
var ENEMY_Y3 = ENEMY_Y1 + 90;
var ENEMY_X4 = Math.random() - 300;
var ENEMY_Y4 = ENEMY_Y1 + 130;
var ENEMY_X5 = Math.random() - 400;
var ENEMY_Y5 = ENEMY_Y1 + 50;
var ENEMY_X6 = Math.random() - 500;
var ENEMY_Y6 = ENEMY_Y1 + 70;
var ENEMY_IMAGE = 'images/enemy-bug.png';
var ENEMY_SPEED_X1 = Math.random() * 100 + 10;
var ENEMY_SPEED_X2 = Math.random() * 200 + 10;
var ENEMY_SPEED_X3 = Math.random() * 300 + 10;
var ENEMY_SPEED_X4 = Math.random() * 400 + 10;
var ENEMY_SPEED_X5 = Math.random() * 500 + 10;
var ENEMY_SPEED_X6 = Math.random() * 600 + 10;
var PLAYER_POSITION_MAX_X = 400;
var PLAYER_POSITION_MAX_Y = 388;
var PLAYER_POSITION_MIN_X = 0;
var PLAYER_POSITION_MIN_Y = 0.5;
var PLAYER_X = 200;
var PLAYER_Y = 330;
var PLAYER_IMAGE = 'images/char-boy.png';
var CANVAS_WIDTH_MIN = -100;
var POSITION_REACH_POINT_Y = 20;
var MOVEMENT = 100;
var GEM_IMAGE = 'images/GemOrange.png';
var HEART = 'images/Heart.png';
var GEM_X = Math.random() + 300;
var GEM_Y = 50;
var score = 10;
document.getElementById('score').value = score;
//Declare super class of Contestant that Enemy and Player can inherit
var Contestant = function (image, x, y, speed) {
	this.image = image;
	this.x = x;
	this.y = y;
	this.speed = speed;
};
//Declare and implement method for Contestant class
Contestant.prototype.render = function () {
	ctx.drawImage(Resources.get(this.image), this.x, this.y);
};
//Declare enemy class that inherit form Contestant
var Enemy = function (image, x, y, speed) {
	Contestant.call(this, image, x, y, speed);
};
//Declare that Enemy's prototype can inherit form Contestant's method.
Enemy.prototype = Object.create(Contestant.prototype);
//Constructor of Enemy
Enemy.prototype.constructor = Enemy;
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
//Update score and where enemy collised with player, losing score.
Enemy.prototype.update = function (dt) {
	//this.x = this.x + this.speed * dt;
	if (this.x < canvas.height) {
		this.x += (this.speed * dt);
	}
	else {
		this.x = CANVAS_WIDTH_MIN;
	}
	//when enemy close to player
	//score decrease
	if (this.x < player.x + 30 && this.x + 60 > player.x && this.y < player.y + 50 && this.y + 40 > player.y) {
		if (score > 0) {
			score--;
		}
		else {
			score = 0;
		}
		document.getElementById('score').value = score;
		player.reset(PLAYER_X, PLAYER_Y);
	}
};
//Declare Player inherit from Contestant Class
var Player = function (image, x, y, speed) {
	Contestant.call(this, image, x, y, speed);
};
//Player inherite method of Contestant
Player.prototype = Object.create(Contestant.prototype);
//Declare and implement method for Player
Player.prototype.update = function () {
	if (this.y < POSITION_REACH_POINT_Y) {
		score++;
		document.getElementById('score').value = score;
		this.reset(PLAYER_X, PLAYER_Y);
		console.log('score:' + score);
	}
	//player at position of gem 
	//score increase
	if ((this.y < gem.y + 10) && (this.y = gem.y) && (this.x > gem.x - 30) && (this.x < gem.x + 30)) {
		score++;
		document.getElementById('score').value = score;
		console.log('score gem:' + score);
	}
};
//Handle input moving left, right, up, down with MOVEMENT position
Player.prototype.handleInput = function (direction) {
	if (direction == 'left' && this.x > PLAYER_POSITION_MIN_X) {
		this.x -= MOVEMENT;
	}
	if (direction == 'right' && this.x < PLAYER_POSITION_MAX_X) {
		this.x += MOVEMENT;
	}
	if (direction == 'up' && this.y > PLAYER_POSITION_MIN_Y) {
		this.y -= MOVEMENT;
	}
	if (direction == 'down' && this.y < PLAYER_POSITION_MAX_Y) {
		this.y += MOVEMENT;
	}
};
Player.prototype.reset = function (x, y) {
	this.x = x;
	this.y = y;
};
//Constructor of Player
Player.prototype.constructor = Player;
//instance enemy
//All enemies have their own random positions and speeds running the screen.
var enemy1 = new Enemy(ENEMY_IMAGE, ENEMY_X1, ENEMY_Y1, ENEMY_SPEED_X1);
var enemy2 = new Enemy(ENEMY_IMAGE, ENEMY_X2, ENEMY_Y2, ENEMY_SPEED_X2);
var enemy3 = new Enemy(ENEMY_IMAGE, ENEMY_X3, ENEMY_Y3, ENEMY_SPEED_X3);
var enemy4 = new Enemy(ENEMY_IMAGE, ENEMY_X4, ENEMY_Y4, ENEMY_SPEED_X4);
var enemy5 = new Enemy(ENEMY_IMAGE, ENEMY_X5, ENEMY_Y5, ENEMY_SPEED_X5);
var enemy6 = new Enemy(ENEMY_IMAGE, ENEMY_X6, ENEMY_Y6, ENEMY_SPEED_X6);
var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];
//new instance object of Player
var player = new Player(PLAYER_IMAGE, PLAYER_X, PLAYER_Y, 0);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. 
document.addEventListener('keyup', function (e) {
	var allowedKeys = {
		37: 'left'
		, 38: 'up'
		, 39: 'right'
		, 40: 'down'
	};
	player.handleInput(allowedKeys[e.keyCode]);
});
var Gem = function (x, y) {
	this.x = x;
	this.y = y;
};
//Gem when player is Gem, blood is filled
Gem.prototype.render = function () {
	if ((player.y < this.y + 10) && (player.y = this.y) && (player.x > this.x - 30) && (player.x < this.x + 30)) {
		ctx.drawImage(Resources.get(HEART), this.x, this.y);
		console.log("image not render:")
	}
	else {
		ctx.drawImage(Resources.get(GEM_IMAGE), this.x, this.y);
	}
};
//new instance object of Gem
var gem = new Gem(GEM_X, GEM_Y);