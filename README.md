#How to Run the application

1. Open link to https://nglthu.github.io/Arcade_Game/ to run online

2. If you run on local, download this source code, then open index.html in a browser, and enjoy playing

#How to Play the application

1. Moving player (left, right, up or down) by using arrow key on the keyboard against any enemy.

2. If player have a collision with an enemy, the player will be back to a default position (at the bottom of game screen), and a point will be decreased.

3. If player reach the top of the game screen without any enemy's collision, the player will have a point. 

4. Default 10-points are bonus at the beginning

5. When player arrives to Gem at the top without any enemy's collision, energy will be dramatically increased, blood will be filled until staying there without any enemy.


#How to code
##Building: 
1.Create class of 'Contestant'
Both Enemy and Player are Contestant, they have same method of 'render'

2.Declare global variables at the top

###Create its own method for 'Player' and 'Enemy'

1. update
2. handleInput
3. Create a class of Gem and its method. 
Render two Images Gem and blood when player coming that position.  
4. Create allEnemies as array of object of class Enemy
All enemy objects in an array called 'allEnemies'
All enemies have their own random positions and speeds running the screen. 

##Modified index for score input



