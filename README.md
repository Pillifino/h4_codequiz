# h4_codequiz

/*
 1. Design UI
    - Draw a picture
    - Determine where you will display feedback
    - Determine what is clickable, what will recieve keytinput, change input
      timers, scroll events, etc
    - rough in the elements in HTML, style is less important
*/

Project Outline
Variables
    Time variables (Activities 9 & 10)
        var seconds left = 60 
        var timeEL = document.queryselector("#countdown)

    Score variables (Activity 11 & 12)
        var score = 60 
        var incrementEl = document.querySelector('#increment")
        var losetimeEl (connect to countdown function) = document.querySelector('#decrement")
        var countEl

Functions 
    Time Function
        -Use WebAPI: setInterval
        -use if statment for when time gets to 0 that will stop timer and bring up final score
        -create a function that displays the timeEL var using .textContent
    Score Function
        -create increment function with on click
        -to print new score: countEl.textContent = score; 

Tite Page
    Start Button
        - When clicked, link to the first question

Questions 1-5 (Create Object with each property being a question with an array of answers)
    Answer Buttons
        -When Correct answer is clicked, add one point to score

/*
 2. Identify events
    - Identify HTML elements that generate events, create variables at the top of 
      the page.

      var theElement = document.querySelector([CSS Selector for your element]);
    - Create event handlers

      theElement.addeventListener([EVENT TYPE], function(event){
        // do stuff here...
      })

    ...where [EVENT TYPE] is "click" or "change" or "keydown" or whatver

    - Identify the things that should happen in the click handlers
    - there is always a page load event. Usually have a function for anything
      that needs setting up at the beginning, before people interact with the 
      page. Start the execution of this setup function at the bottom of page
*/

/*
 3. Declare variables
    - Global state variables emerge while working on event handlers (i.e., it
      becomes clearer what needs to be tracked across the application)
    - state variables:
      "State describes the status of the entire program or an individual
       object. It could be text, a number, a boolean, or another data type.

       It’s a common tool for coordinating code. For example, once you update state, a bunch of different functions can instantly react to that change."
       https://www.freecodecamp.org/news/state-in-javascript-explained-by-cooking-a-simple-meal-2baf10a787ee/
    - Does the state variable need to be global (i.e., used by all the event handlers) or does it only need to be local
      to the event handler?
*/

/*
 3. Refactor
    - identify tasks that can be broken into their own functions, outside the event handlers
    - Are there tasks that more than one event handler share?
*/
