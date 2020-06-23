const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement=document.getElementById('question')
const answerButtonsElement=document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionsIndex


startButton.addEventListener('click',startGame)

function startGame(){
 startButton.classList.add('hide')   
 console.log('history') 
 shuffledQuestions=questions.sort(()=> Math.random() - .5)
 currentQuestionIndex = 0
 questionContainerElement.classlist.remove('hide')
 setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText=question.question
    question.answers.forEach(element => {
        const button = document.createElement('button') 
        button.innerText=answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
    });
}


function selectAnswer() {

}

const questions = [
{
   question: 'How many Fire signs are there in the Zodiac Calendar',
   answers:[
       {text:'3', correct:true},
       {text:'2',correct:false},
       {text:'4',correct:false},
       {text:'1',correct:false}
   ] 
}    
]
{
    question: 'How many water signs are there in the Zodiac Calendar',
    answers:[
        {text:'3', correct:false},
        {text:'2',correct:false},
        {text:'1',correct:false},
        {text:'4',correct:true}
    ] 
 }    
 ]
 {
    question: 'What sign is the archer?',
    answers:[
        {text:'cancer', correct:false},
        {text:'gemini',correct:false},
        {text:'scorpio',correct:false},
        {text:'sagittarius',correct:true}
    ] 
 }    
 ]