import * as inquirer from 'inquirer'
import { Move, Place, Left, Right, Report } from './src/commands'
import { Robot } from './src/robot'
import { Board } from './src/board'
import {Directions} from './src/directions'
let robot = new Robot(0, 0, Directions.NORTH, 'A')
let board = new Board(5)
const PlaceCommand = new Place()
const MoveCommand = new Move()
const LeftCommand = new Left()
const RightCommand = new Right()
const ReportCommand = new Report()
var questions = [
  {
    type: 'input',
    name: 'firstCommand',
    message: 'Now you have a robot on a 5*5 map, please PLACE the robot somewhere.',
    default: 'PLACE 0, 0, NORTH',
  }
]

let firstCommandValid = false
let continueCommandValid = true
function continueCommand() {
  return firstCommandValid && continueCommandValid
}
function ask() {
  inquirer.prompt(questions).then((answers) => {
    if (answers.firstCommand.startsWith('PLACE')) {
      const { x, y, facing } = PlaceCommand.parseCommand(answers.firstCommand)
      if (!board.isOutside(x, y)) {
        robot.takeAction(x, y, facing)
        firstCommandValid = true // continue
        commandRecursionOuter()
      } else {
        console.log('Robot is not placed correctly. try again.')
        ask()
      }
    } else if (answers.firstCommand === 'exit') {
      continueCommandValid = false
      console.log('Thank you for playing!')
    } else {
      console.log('Please PLACE the robot before other command.')
      ask()
    }
  }).catch(error=>{
    console.log('Wrong command, try again or exit', error)
    ask()
  })
}

function commandRecursionOuter() {
  var prompt = inquirer.createPromptModule()
  var questions2 = [
    {
      type: 'input',
      name: 'command',
      message: 'Type your next command, or type exit to end:',
      when: continueCommand(),
      // validate: board.isOutside()
    }
  ]
  function commandRecursion() {
    let newPosition = {
      x: robot.x,
      y: robot.y,
      facing: robot.facing
    }
    prompt(questions2).then((answers) => {
      if (answers.command.startsWith('PLACE')) {
        try {
          newPosition = PlaceCommand.parseCommand(answers.command)
        } catch (error) {
          console.log(error)
        }
      } else {
        switch (answers.command) {
          case 'MOVE':
            newPosition = MoveCommand.action(robot)
            break
          case 'LEFT':
            newPosition = LeftCommand.action(robot)
            break
          case 'RIGHT':
            newPosition = RightCommand.action(robot)
            break
          case 'REPORT':
            newPosition = ReportCommand.action(robot)
            break
          case 'exit':
            continueCommandValid = false
            console.log('Thank you for playing!')
            break
          default:
            console.log('Invalid command.')
            break
        }
      }
      if (!board.isOutside(newPosition.x, newPosition.y)) {
        robot.takeAction(newPosition.x, newPosition.y, newPosition.facing)
      } else {
        console.log('Robot falling outside the board.')
      }
      if (continueCommandValid) { // next command
        commandRecursion()
      }
    })
  }
  commandRecursion()
}

ask()