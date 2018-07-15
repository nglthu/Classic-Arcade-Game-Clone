[![licence badge]][licence]
[![stars badge]][stars]
[![forks badge]][forks]
[![issues badge]][issues]

[licence badge]:https://img.shields.io/badge/license-MIT-blue.svg
[stars badge]:https://img.shields.io/github/stars/hey-red/Markdown.svg
[forks badge]:https://img.shields.io/github/forks/hey-red/Markdown.svg
[issues badge]:https://img.shields.io/github/issues/hey-red/Markdown.svg

[licence]:https://github.com/nglthu/Arcade_Game/blob/master/LICENSE.md
[stars]:https://github.com/nglthu/Arcade_Game/stargazers
[forks]:https://github.com/nglthu/Arcade_Game/network
[issues]:https://github.com/nglthu/Arcade_Game/issues


# Run the application

1. Open [Link](https://nglthu.github.io/Classic-Arcade-Game-Clone/)  to run online

<img src="/images/gif/play.gif">

2. If you run on local, download this source code, then open index.html in a browser, and enjoy playing

# Play the application

1. Moving player (left, right, up or down) by using arrow key on the keyboard against any enemy.

2. If player have a collision with an enemy, the player will be back to a default position (at the bottom of game screen), and a point will be decreased.

3. If player reach the top of the game screen without any enemy's collision, the player will have a point. 

4. Default 10-points are bonus at the beginning

5. When player arrives to Gem at the top without any enemy's collision, energy will be dramatically increased, blood will be filled until staying there without any enemy.


# Code
## Building: 
1. Create class of 'Contestant'
Both Enemy and Player are Contestant, they have same method of 'render'

2. Declare global variables at the top

### Create its own method for 'Player' and 'Enemy'

1. update
2. handleInput
3. Create a class of Gem and its method. 
Render two Images Gem and blood when player coming that position.  
4. Create allEnemies as array of object of class Enemy

+ All enemy objects in an array called 'allEnemies'
+ All enemies have their own random positions and speeds running the screen. 

## Modified index for score input



