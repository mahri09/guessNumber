GUESS NUMBER

Guess Number game creates random number between any value you choose. User trying to find the secret number lowest turn.
Game will guide user according to estimation.

1. 
First create a random number generator function. It genereate 1-25 each time randomly. 
(a function or a variable)

2.
Create a variable checkButton to select check button by using id. 
Create a variable guess to select input field value. 

Refresh your page and print out your quess and randum number to the console.

3.
Assign checkButton clicking expression to an empty arrow function.
This function will compare two values (guess and random number).

4.
Inside this function ;
Create an if/else statement and for each condition, write something to the .message class element content. Guide the user like; “it is low” or “it is high”

Start your function and see if it is working.

5.
Change .number class elements content to the secretNumber if the guess is correct. And also change the background color of the page. And write to the .message class element: “You are winner”

6.
Refresh your page and see if your game is working when you are clicking the button. Dont forget to warn user when the user enters invalid numbers.

7.
Now your game is ready to play but there is no end point. 
Make a global variable point. And every unlucky try; decrease this variable from the given number (For example user have 10 chances to find the secret number).
And write users remaining chances to the .score class element content.

8.
Check point after every unlucky estimation.
When it reaches “0”, user loose.
write “You are a looser” to the .message class element content.

9.
Now your game is working for one turn, you need to refresh your page every time. Instead of this, in your index.html file, create an again button that has class names “.btn” and “.again”. 

10.
Select the element with the 'again' class and attach a click event handler.
When user clicks this button, every value come backs to its starting condition.
•	Restore initial values of the score and secretNumber variables,
•	Restore the initial conditions of the message, number, score and guess input field,
•	Also restore the original background color (#222).


11. CHALLENGE
What about high score?
Make a global variable highScore. And assign it “0” for starting condition.
This variable should keep high score of the user’s plays. 
For example: first turn if user find the number for 13 points, the highscore is 13. Second turn if the user find the number with point 16, so the highscore should become 16.
Be careful; don’t change this score with the again button.




Good luck!
