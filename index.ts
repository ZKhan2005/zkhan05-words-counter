#! /usr/bin/env node

import inquirer from 'inquirer';

import chalk from "chalk";
// Declare a constant 'answers' & assign it to the result of inquirer
const answers: { 
    sentence: string 
} = await inquirer.prompt([{
    type: 'input',
    name: 'sentence',
    message:chalk.yellowBright('Enter Your Sentence to Count Words :')
}]);
let  words = answers.sentence.trim().split(' ')
console.log(words)
console.log(chalk.magentaBright(`Your Sentence Contain ${words.length} Words !`));


