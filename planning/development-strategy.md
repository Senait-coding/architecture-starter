<!--

  There will be different types of tasks for each user story:
    `type: interface`
    `type: business logic`
    `type: interaction`
    
    ...

-->
 # Data 
We use data object of questions arrays in JSON format

 # Data-access
  - Data-access functions used to access the data
 - find()
 - save()
 - findAll())

# Business logic
- business logic function which can incerate the value of currentQuestionIndex by 1 
- create a function which will sort and shuffle our questions
- create a function that calculate correct and incorrect answers

# Interface(presentation)
 a user can read instructions for the quiz
### Homepage 

- **Html**

- div class name="title" 
- div class name="text-instructions"
- button class name="btn", id ="btn-start" (to start a quiz)
- **Css**
- .title
- .text-instructions
- .btn #id btn-start
 ### Quiz page
- **Html**

- div class name="quiz-container" 
- button class name="btn", id ="btn-answers"
- button class name="btn", id ="btn-answers"
- button class name="btn", id ="btn-answers"
- button class name="btn", id ="btn-answers"
- button class name="btn", id ="btn-next" 

- **Css**
- .quiz-container
- .btn #id btn-answers
- .btn #id btn-next

 ### Quiz result-page
- **Html**
- div class name="score"
- button class name="btn", id ="btn-finish" 

- **Css**
- .score
- .btn #id btn-finish

 # Interaction
- Listeners attach event Listener to different buttons(btn-start,btn-answers,btn-next,btn-finish)
- Handlers create a functions that use a business-logic

- function showQuestions (questionId ) (using data access find function)
- function showChoices (questionId) (using data access findAll function)
- function  checkCorrect(answerId) (using data access find function)
- function  saveAnswer(answerId) (using data access find function)
- **optional* findScore(answerId)(using data access findAll function)
  
