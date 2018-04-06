This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### FizzBuzz Challenge

I first heard about fizzbuzz as a simple interview questions.  A coding challenge that any developer should be able to solve yet many candidates struggle to solve it.  I rediscovered it at [Coding Dojo](http://codingdojo.org/kata/FizzBuzz/) and used their description for this set up.

### Challenge

Create a function that takes a positive integer and returns an array of all positive integers from 1 to the number passed into the function.  Sort of.  If the number is divisible by 3, instead of the number the array will contain the word "Fizz".  If it is divisible by 5 it will contain the word "Buzz".  If the integer is divisible by both 3 and 5 then the array will instead contain the word "FizzBuzz".

### Setup

I used Reactjs to create a simple UI to display the results of the function and to create unit tests (if you aren't familiar with unit tests don't worry, I'll explain more below).  I picked React mostly because I want to learn more about it but also because it has a scaffolding tool that set up the ui and the unit test harness for me.  Laziness is a virtue when you do it right.

That means you will need to [install Nodejs](https://nodejs.org) to run the app.  After that's installed running the app takes two commands.  Navigate to the root directory of this project using your preferred command line and try the following:

```
npm install
npm start
```

The first command, npm install, can take some time but only needs to be run once.  After that's done, npm start should bring up a browser with a list displaying 1, 2, 3.  If you alter any of the code while npm start is loading it will refresh the page and automatically show your updates.  You can test this by going to the FizzBuzz.js file under src/fizzbuzz and change the generateList function to return an array of 4 numbers instead of an array of 3 numbers.  When you save the file your browser should automatically refresh.

You can put all the code you need to pass this challenge in the generateList function.

### Unit Tests

If you run 

```
npm test
```

You see some output saying there are two failing tests.  I added two tests to the FizzBuzz.test.js file that check if a number divisible by 3 is replaced with "Fizz" and if a number divisible by 5 is replaced with "Buzz".  Try to get just one of the tests to pass and then work on the other one.  After both tests pass try writing a third test for a number that is divisible by both 3 and 5.  Initially that test should fail but then you can update your code to pass the test you just wrote.
