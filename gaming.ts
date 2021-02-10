import * as yargs from 'yargs';
import * as inquirer from 'inquirer';
import { Move, Place } from './modules/commands/command';
import { Robot } from './modules/robot';
var output: Array<string> = [];
let robot = new Robot(0, 0, 'NORTH')
let place = 'PLACE'
let move = 'MOVE'
const PlaceCommand = new Place(place)
var questions = [
  {
    type: 'confirm',
    name: 'start',
    message: "Shall we play?",
  },
  {
    type: 'input',
    name: 'firstCommand',
    message: 'Now you have a robot on a 5*5 map, please PLACE the robot somewhere, e.g. PLACE 0, 0, NORTH',
    default: 'PLACE 0, 0, NORTH',
  }
]

let firstCommandValid = false;
let continueCommandValid = true;
function continueCommand() {
  return firstCommandValid && continueCommandValid;
}
function ask() {
  inquirer.prompt(questions).then((answers) => {
    if (answers.start) {

    }
    if (answers.firstCommand.startsWith('PLACE')) {
      const { x, y } = PlaceCommand.parseCommand(answers.firstCommand)
      if (!robot.isFalling(x, y)) {
        firstCommandValid = true; // continue
        commandRecursionOuter()
      }
    }
    if (answers.command === 'exit') {
      continueCommandValid = false
      console.log('Thank you for playing!')
    }
    if (answers.askAgain) {
      ask();
    } else {
      console.log('Your favorite TV Shows:', output.join(', '));
    }
  });
}

function commandRecursionOuter() {
  var prompt = inquirer.createPromptModule();
  var questions2 = [
    {
      type: 'input',
      name: 'command',
      message: 'Type your next command, or type exit to end:',
      when: continueCommand()
    }
  ]
  function commandRecursion() {
    prompt(questions2).then((answers) => {
      if (answers.command === 'exit') {
        continueCommandValid = false
        console.log('Thank you for playing!')
      } else {
        console.log(answers)
        commandRecursion()
      }
    });
  }
  commandRecursion()
}

ask();