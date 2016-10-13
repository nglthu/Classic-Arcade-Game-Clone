//Declare all using variables 
var enemyX1 = Math.random();
var enemyY1 = Math.random() + 80;
var enemyX2 = Math.random() - 100;
var enemyY2 = enemyY1 + 100;
var enemyX3 = Math.random() - 200;
var enemyY3 = enemyY1 + 90;
var enemyX4 = Math.random() - 300;
var enemyY4 = enemyY1 + 130;
var enemyX5 = Math.random() - 400;
var enemyY5 = enemyY1 + 50;
var enemyX6 = Math.random() - 500;
var enemyY6 = enemyY1 + 70;
var enemyImage = 'images/enemy-bug.png';
var enemySpeedX1 = Math.random() * 100 + 10;
var enemySpeedX2 = Math.random() * 200 + 10;
var enemySpeedX3 = Math.random() * 300 + 10;
var enemySpeedX4 = Math.random() * 400 + 10;
var enemySpeedX5 = Math.random() * 500 + 10;
var enemySpeedX6 = Math.random() * 600 + 10;
var playerPositionMaxX = 400;
var playerPositionMaxY = 388;
var playerPositionMinX = 0;
var playerPositionMinY = 0.5;
var playerX = 200;
var playerY = 330;
var playerImage = 'images/char-boy.png';
var canvasWidthMin = -100;
var score = 10;
document.getElementById('score').value = score;
var positionReachPointY = 20;
var movement = 100;
var gemImage = 'images/GemOrange.png';
var heart = 'images/Heart.png';
var gemX = Math.random() + 300;
var gemY = 50;
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
var Enemy = function (x, y, speed) {
	Contestant.call(this, enemyImage, x, y, speed);
};
//Declare that Enemy's prototype can inherit form Contestant's method.
Enemy.prototype = Object.create(Contestant.prototype);
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
//Update score and where enemy collised with player, losing score.
Enemy.prototype.update = function (dt) {
	//this.x = this.x + this.speed * dt;
	if (this.x < canvas.height) {
		this.x += (this.speed * dt);
	}
	else {
		this.x = canvasWidthMin;
	}
	//when enemy close to player
	//score decrease
	if (this.x < player.x + 30 && this.x + 60 > player.x && this.y < player.y + 50 && this.y + 40 > player.y) {
		if (score > 0) {
			score--;
		}
		else {
			score = score;
		}
		document.getElementById('score').value = score;
		player.reset(playerX,playerY);
	}
};
//Declare Player inherit from Contestant Class
var Player = function () {
	Contestant.call(this, playerImage, playerX, playerY, 0);
};
//Player inherite method of Contestant
Player.prototype = Object.create(Contestant.prototype);
//Declare and implement method for Player
Player.prototype.update = function () {
	if (player.y < positionReachPointY) {
		score++;
		document.getElementById('score').value = score;
		this.reset(playerX,playerY);
		console.log('score:' + score);
	}
	//player at position of gem 
	//score increase
	if ((player.y < gemY + 10) && (player.y = gemY) && (player.x > gemX - 30) && (player.x < gemX + 30)) {
		score++;
		document.getElementById('score').value = score;
		console.log('score gem:' + score);
	}
};
//Handle input moving left, right, up, down with movement position
Player.prototype.handleInput = function (direction) {
	if (direction == 'left' && this.x > playerPositionMinX) {
		this.x -= movement;
	}
	if (direction == 'right' && this.x < playerPositionMaxX) {
		this.x += movement;
	}
	if (direction == 'up' && this.y > playerPositionMinY) {
		this.y -= movement;
	}
	if (direction == 'down' && this.y < playerPositionMaxY) {
		this.y += movement;
	}
};
Player.prototype.reset = function (x,y) {
	this.x = x;
	this.y = y;
};
//instance enemy
//All enemies have their own random positions and speeds running the screen.
var enemy1 = new Enemy(enemyX1, enemyY1, enemySpeedX1);
var enemy2 = new Enemy(enemyX2, enemyY2, enemySpeedX2);
var enemy3 = new Enemy(enemyX3, enemyY3, enemySpeedX3);
var enemy4 = new Enemy(enemyX4, enemyY4, enemySpeedX4);
var enemy5 = new Enemy(enemyX5, enemyY5, enemySpeedX5);
var enemy6 = new Enemy(enemyX6, enemyY6, enemySpeedX6);
var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];
//new instance object of Player
var player = new Player();
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
	if ((player.y < gem.y + 10) && (player.y = gem.y) && (player.x > gem.x - 30) && (player.x < gem.x + 30)) {
		ctx.drawImage(Resources.get(heart), this.x, this.y);
		console.log("image not render:")
	}
	else {
		ctx.drawImage(Resources.get(gemImage), this.x, this.y);
	}
};
//new instance object of Gem
var gem = new Gem(gemX, gemY);