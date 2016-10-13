#How to play
1. Open link to play
https://nglthu.github.io/Arcade_Game/
2. 10 points is bonus
3. When make collision with enemy, point will lose 1
4. When come to Gem, energy will be dramatically increased, blood will be filled until staying there without any enemy.


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


#frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).
