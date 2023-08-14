'use strict';

let randomNum = Math.trunc(Math.random()*20) + 1
console.log(randomNum)

let resultNum = Number(document.querySelector('.number').textContent)
let resultMsg = document.querySelector('.message')
let score = document.querySelector('.score')
let scoreNum = Number(document.querySelector('.score').textContent)
let highScore = document.querySelector('.highscore')
let hiddenNum = document.querySelector('.number')

document.querySelector('.check').addEventListener('click', function(){
    let guessNum = Number(document.querySelector('.guess').value)
    let highScoreNum = Number(document.querySelector('.highscore').textContent)
    if(guessNum === 0){
        resultMsg.textContent = 'No Number!'
    }else if(guessNum === randomNum){
        resultMsg.textContent = `Correct!`
        hiddenNum.textContent = randomNum
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.check').style.visibility = 'hidden'
        if(scoreNum > highScoreNum){
            highScore.textContent = scoreNum}
    }else if(guessNum > randomNum){
        resultMsg.textContent = 'Too high!'
        scoreNum = scoreNum - 1
        if(scoreNum <= 0){
            resultMsg.textContent = 'You lost the game.'
            score.textContent = 0
        }else{
            score.textContent = scoreNum
        }
    }else if(guessNum < randomNum){
        resultMsg.textContent = 'Too low!'
        scoreNum = scoreNum - 1
        if(scoreNum <= 0){
            resultMsg.textContent = 'You lost the game.'
            score.textContent = 0
        }else{
            score.textContent = scoreNum
        }
        
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score.textContent = 20
    resultMsg.textContent = 'Start guessing...'
    randomNum = Math.trunc(Math.random()*20) + 1
    console.log(randomNum)
    document.querySelector('body').style.backgroundColor = '#000'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.check').style.visibility = 'visible'
})