// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
	
	 this.x = x;
	 this.y = y;
	
	 this.speed=Math.random()*200+10;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	
	//this.x = this.x + this.speed * dt;
	if (this.x < 505) {
        this.x += (this.speed * dt);
    }
    else {this.x = -90;}
	
	//this.y = this.y + this.speed * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
	 this.sprite = 'images/char-boy.png';
	 this.x = Math.random()*200+38;
	 this.y = Math.random()*200+38;
	//location.reload();
};
Player.prototype.update = function(){
	
};
Player.prototype.render = function(){
	
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	
};
Player.prototype.handleInput = function(direction){
	 if(direction == 'left' && this.x > 0) {
        this.x -= 50;
    }
    if(direction == 'right' && this.x < 400) {
        this.x += 50;
    }
    if(direction == 'up' && this.y > 0.5) {
        this.y -= 50;
    }
    if(direction == 'down' && this.y < 388) {
        this.y += 50;
    }
};
var player = new Player();

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//var allEnemies = [new Enemy()];
/*var allEnemies = [];
var enemy = new Enemy();
for (var i = 0; i < Math.random(); i++) {
    allEnemies.push(enemy);
}*/

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
var enemy1 = new Enemy(-90, 60);
var enemy2 = new Enemy(-190, 140);
var enemy3 = new Enemy(-290, 230);
var enemy4 = new Enemy(-390, 140);
var enemy5 = new Enemy(-490, 60);
var enemy6 = new Enemy(-890, 230);
var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];


