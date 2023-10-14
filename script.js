
    /***const mark={
        fullname:'mark Mello',
        mass:718,
        height:1.99,
        calcBMI:function(){
            this.bmi=this.mass/this.height**2;
            return this.bmi;
        
        }
    }

    const jonas={
        fullname:'jonas s',
        mass:92,
        height:1.95,
        calcBMI:function(){
            this.bmi=this.mass/this.height**2;
            return this.bmi;
        
        }
    }
    mark.calcBMI();
    jonas.calcBMI();
    console.log(mark.bmi);
    console.log(jonas.bmi);
    console.log(mark);
    console.log(`${jonas.fullname} BMI is ${mark.bmi>jonas.bmi?'higher':'lower'} than ${mark.fullname} ${jonas.bmi}` );

    for(let i=0;i<10;i++){
        console.log(i+1);
    }***/

/**    var rand=function(val){
        const x=Math.random()*10;
        if(val===x){
            console.log("you won");
        }
        else if(val>x){
            console.log("too big ");
        }
        else{
            console.log("too low");
        }
    }
rand(5);**/
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
