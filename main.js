const inputBirthday = document.querySelector('#input-birthday');
const checkButton = document.querySelector('#check-btn');
const outputMessage = document.querySelector('#output-div');

outputMessage.style.display = 'none';

const showMessage = (msg) => {
  outputMessage.style.display = 'block';
  outputMessage.innerText = 'Result - ' + msg;
};

const checkPalindrome = (dob, reverseDob) => {
  if (!inputBirthday.value) {
    outputMessage.style.display = 'none';
    alert('Input field is empty. Please enter your Birthdate.');
  } else if (dob === reverseDob) {
    showMessage('Yes, Your birthday is palindrome.');
  } else showMessage('No, Your birthday is not palindrome.');
};

const eventHandler = () => {
  const birthdayInArrayFormat = inputBirthday.value.toString().split('-');

  const birthdayInStringFormat =
    birthdayInArrayFormat[2] +
    birthdayInArrayFormat[1] +
    birthdayInArrayFormat[0];

  const reversedBirthday = birthdayInStringFormat.split('').reverse().join('');

  checkPalindrome(birthdayInStringFormat, reversedBirthday);
};

checkButton.addEventListener('click', eventHandler);
