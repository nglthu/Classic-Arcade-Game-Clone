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
var playerY = 320;
var playerImage = 'images/char-boy.png';
var canvasWidthMin = -100;
var score = 10;
document.getElementById('score').value = score;
var movement = 50;
var gemImage = 'images/GemOrange.png';
var heart = 'images/Heart.png';
var gemX = Math.random() + 300;
var gemY = 50;
var positionReachPointY = 20;
var Contestant = function (image, x, y, speed) {
	this.image = image;
	this.x = x;
	this.y = y;
	this.speed = speed;
};
Contestant.prototype.render = function () {
	ctx.drawImage(Resources.get(this.image), this.x, this.y);
};
// Enemies our player must avoid
var Enemy = function (x, y, speed) {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started
	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	Contestant.call(this, enemyImage, x, y, speed);
};
Enemy.prototype = Object.create(Contestant.prototype);
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	//this.x = this.x + this.speed * dt;
	if (this.x < canvas.height) {
		this.x += (this.speed * dt);
	}
	else {
		this.x = canvasWidthMin;
	}
	//this.y = this.y + this.speed * dt;
	if (this.x < player.x + 30 && this.x + 60 > player.x && this.y < player.y + 50 && this.y + 40 > player.y) {
		if (score > 0) {
			score--;
		}
		else {
			score = score;
		}
		document.getElementById('score').value = score;
		player.reset();
	}
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
	Contestant.call(this, playerImage, playerX, playerY, 0);
};
Player.prototype = Object.create(Contestant.prototype);
Player.prototype.update = function () {
	if (player.y < positionReachPointY) {
		score++;
		document.getElementById('score').value = score;
		this.reset();
		console.log('score:' + score);
	}
	if ((player.y < gemY + 10) && (player.y = gemY) && (player.x > gemX - 30) && (player.x < gemX + 30)) {
		score++;
		document.getElementById('score').value = score;
		//this.reset();
		console.log('score gem:' + score);
	}
};
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
Player.prototype.reset = function () {
	this.x = 200;
	this.y = 340;
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//var allEnemies = [new Enemy()];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
var enemy1 = new Enemy(enemyX1, enemyY1, enemySpeedX1);
var enemy2 = new Enemy(enemyX2, enemyY2, enemySpeedX2);
var enemy3 = new Enemy(enemyX3, enemyY3, enemySpeedX3);
var enemy4 = new Enemy(enemyX4, enemyY4, enemySpeedX4);
var enemy5 = new Enemy(enemyX5, enemyY5, enemySpeedX5);
var enemy6 = new Enemy(enemyX6, enemyY6, enemySpeedX6);
var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

var player = new Player();

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

Gem.prototype.render = function () {
	if ((player.y < gem.y + 10) && (player.y = gem.y) && (player.x > gem.x - 30) && (player.x < gem.x + 30)) {
		ctx.drawImage(Resources.get(heart), this.x, this.y);
		console.log("image not render:")
	}
	else {
		ctx.drawImage(Resources.get(gemImage), this.x, this.y);
	}
};

var gem = new Gem(gemX, gemY);