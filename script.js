const dobElement = document.querySelector('#dob');
const luckyNumElement = document.querySelector('#lucky-number');
const checkBtn = document.querySelector('button');
const outputElement = document.querySelector('#output');
const errorElement = document.querySelector('#error');

const calculateIfLucky = (num, dob) => {

  dob = dob.replaceAll('-','');

  let sum = 0;

  for(let char of dob){
    sum += Number(char);
  }

  return sum % num === 0;
}

const displayOutput = (isLucky) => {
  outputElement.textContent = isLucky ? "Wow, your birthday is lucky!" : 'Not so lucky, but hey, we make our own luck.'
}

const displayError = (errMessage) => {
  errorElement.textContent = errMessage
}
const hideError = () => {
  errorElement.textContent = '';
}

checkBtn.addEventListener('click', () => {
  const luckyNum = luckyNumElement.value;

  try{
    if(luckyNum <= 0){
      const err = { message: "A negative lucky number? Really?"};
      throw err;
    }
    
    hideError();

    const isLucky = calculateIfLucky(luckyNum, dobElement.value);
    displayOutput(isLucky);

  } catch(err){
    displayError(err.message);
  }

})

