let randomNum = Math.floor(Math.random() * 25) +1;
const checkButton = document.querySelector('.check');
const guess = document.getElementById('guess');
const message = document.querySelector('.message');
let point = 10;
const endPoint = document.querySelector('.score');
const againButton = document.querySelector('.again');
const number = document.querySelector('.number');
const highscore = document.querySelector('.highscore')
let highpoint = 0;

checkButton.addEventListener('click',function(){
  number.innerHTML = guess.value;
  console.log(randomNum);
  console.log(guess.value)
  
    if(guess.value > 0 && guess.value <= 25){
      if(guess.value>randomNum){
        message.innerHTML = 'it is to high';
        point--;
        endPoint.innerHTML = point
      } else if (guess.value < randomNum){
        message.innerHTML = 'it is to low';
        point--;
        endPoint.innerHTML = point
      } else {
        message.innerHTML = 'You are Winner!'
        document.body.style.background = 'green';
        if(point>highpoint){
          highpoint = point;
          highscore.innerHTML = highpoint;
        }
      }
      
    } else {
      alert('please enter valid number!')
    }
    if(point===0){
    // point--
    message.innerHTML = 'You are Looser!'
    document.body.style.background = 'red';
    checkButton.disabled = true;
    }
})


againButton.addEventListener('click', function(){
  point= 10;
  randomNum = Math.floor(Math.random() * 25) +1;
  message.innerHTML = 'Start guessing..';
  document.body.style.background = '#222';
  endPoint.innerHTML = 10;
  number.innerHTML = '?'
  guess.value=''
  checkButton.disabled = false;
  
})
