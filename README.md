# About
## Wordle
I've seen this game before, but didn't know exactly what it was, it's always to see little things like this gain such popularity and I believe this spesific developer is known for this kind of project.

I like that you chose this as the project because it shows that you don't need to be an expert at code to make something that people like.

## Tools
For this I've used **javascript** and **vite** as a build tool so that I can test changes rapidly.

An overview of how it works is that the main elements are simply inserted into the main container of the html #app and the components are query selected at the beginning to ensure that every function has free access to them (which is okay to meet the mimimum requirements here).

After that, I just tried to break down the problem into chunks so I could get away with crappy logic. Performance doesn't matter for something like this so I didn't spend any time cleaning up any loops or if statements.

## Install
- Clone this repository
- run ```npm install``` (though no node packages were used here)
- run ```npm run dev``` 
- open the local server shown in the terminal by ```ctrl + click``` or typing ```o```

## Requirements met

- Runs the game and has a win and loss condition
- Displays 'hints' like the original game
- Allows you to restart the game 
    - Ramdomizes words with unique values for at least 3 attempts