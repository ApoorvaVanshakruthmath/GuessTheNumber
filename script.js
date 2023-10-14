
document.addEventListener('DOMContentLoaded', function () {
    const snum=Math.trunc(Math.random()*20)+1;
    let score=20;
    document.querySelector('.btn-check').addEventListener('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        if (!guess) {
            document.querySelector('.message').textContent = 'No number';
        }
        else if(guess===snum){
            
           
            document.querySelector('.number').textContent=snum;
    document.querySelector('.message').textContent='you won';
            document.querySelector('.score').value=score;
            document.querySelector('body').style.backgroundColor='green';
            document.querySelector('.number').style.width='44px';
        }
        else if(guess>snum){
            if(score>1){

                document.querySelector('.message').textContent='too high';
                score--;
                document.querySelector('.score').textContent=score;
            }
        }
        else if(guess<snum){
            if(score>1){

                document.querySelector('.message').textContent
                ='too low';
                score--;
                document.querySelector('.score').textContent=score;
            }
        }
    });
});
