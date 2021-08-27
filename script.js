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
  outputElement.style.display = "block";
  outputElement.textContent = isLucky ? "Wow, your birthday is lucky! 🍀" : 'Not so lucky, but hey, we make our own luck. 💪'
}

const hideOutput = () => {
  outputElement.style.display = "none";
}

const displayError = (errMessage) => {
  errorElement.style.display = 'block';
  errorElement.textContent = errMessage
}
const hideError = () => {
  errorElement.style.display = 'none';
  errorElement.textContent = '';
}

checkBtn.addEventListener('click', () => {
  const luckyNum = Number(luckyNumElement.value);
  const dateValue = dobElement.value;

  try{
    if(luckyNum <= 0 || !dateValue){
      const err = { message: "Please check if the date and lucky number are entered correctly" };
      throw err;
    }
    
    hideError();

    const isLucky = calculateIfLucky(luckyNum, dobElement.value);
    displayOutput(isLucky);

  } catch(err){
    hideOutput();
    displayError(err.message);
  }

})

