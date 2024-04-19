#! /usr/bin/env node
//import inquirer and chalk packages:
import inquirer from "inquirer";
import chalk from "chalk";
//Display a coloufull welcome message:
console.log("=".repeat(60));
console.log(chalk.bold.bgCyanBright("\n \t\t Code With Ayesha - Word Counter"));
console.log("=".repeat(60));
//Prompt the user to enter a sentence:
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
//Triming the sentence and spliting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
// Analysis of user input sentence:
console.log("=".repeat(60));
console.log(chalk.bold("\n - Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
