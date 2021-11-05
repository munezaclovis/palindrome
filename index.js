const pilandrome = (name) => {
    name = name.toLowerCase();
    const reverse = name.split('').reverse().join('');
    return (name === reverse) ? console.log('the name is a Palindrome') : console.log('the name is NOT a Palindrome');
}

const inquirer = require('inquirer')

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "Please enter a name?"
  }
]

inquirer.prompt(questions).then(answers => {
    pilandrome(answers['name'])
});