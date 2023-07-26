let score=JSON.parse(localStorage.getItem('score')) ||{
    wins:0,
    losses:0,
    draws:0
};
displayScore();

function displayScore()
{
    document.querySelector('.js-showScore').
    innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, draws: ${score.draws}`
}
function displayResult(res)
{
    document.querySelector('.js-showResult').innerHTML=res
}
function getMove()
{
    num=Math.random();
    if (num>=0 && num<1/3) return 'rock';
    if (num>=1/3 && num<2/3) return 'paper';
    if (num>=2/3 && num<1) return 'scissors';
}
function displayMove(userMove,compMove)
{
    document.querySelector('.js-showMove').
    innerHTML= `You 
        <img class="move-icon" src="images/${userMove}-emoji.png">
        <img class="move-icon" src="images/${compMove}-emoji.png">
computer`
}

function getWinner(userMove,compMove)
{
    if (userMove===compMove)
    {
        score.draws++;
        displayResult('DRAW!');
        displayMove(userMove,compMove);
        displayScore();
    }
    else if (userMove==='rock')
    {
        if(compMove=='scissors')
        {
            score.wins++;
            displayResult('You Win!');
            displayMove(userMove,compMove);
            displayScore();
        }
        else if (compMove==='paper')
        {
            score.losses++;
            displayResult('You loose.');
            displayMove(userMove,compMove);
            displayScore();
        }
    }
    else if (userMove==='paper')
    {
        if(compMove=='rock')
        {
            score.wins++;
            displayResult('You Win!');
            displayMove(userMove,compMove);
            displayScore();
        }
        else if (compMove==='scissors')
        {
            score.losses++;
            displayResult('You loose.');
            displayMove(userMove,compMove);
            displayScore();
        }
    }
    else if (userMove==='scissors')
    {
        if(compMove==='rock')
       {
           score.losses++;
           displayResult('You loose');
           displayMove(userMove,compMove);
           displayScore();
       }
        else if (compMove==='paper')
        {
            score.wins++;  
            displayResult('You Win!');
            displayMove(userMove,compMove);
            displayScore();              
        }
    }
    localStorage.setItem('score',JSON.stringify(score));
}
function resetScore()
{
    localStorage.removeItem('score');
    score.wins=0
    score.losses=0
    score.draws=0
    displayScore();
}