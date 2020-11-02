const chalk = require('chalk');
const log = console.log;

const names = {
    'name1': 'AYA',
    'name2': 'TEIKO',
    'name3': 'JACOPO',
    'name4': 'VIET'
}

log(chalk.red(names.name1));
log(chalk.green(names.name2));
log(chalk.yellow(names.name3));
log(chalk.blue(names.name4));

//МАРК НАПИСАЛ ТАК:

let students = [
    {
      name: 'Aya',
      color: 'blue'
    },
    {
      name: 'Jane',
      color: 'red'
    },
    {
      name: 'Jacopo',
      color: 'yellow'
    },
    {
      name: 'Ioan',
      color: 'green'
    },
  ]
  for(let i =0; i < students.length; i++){
    console.log(chalk[students[i].color](students[i].name))
  }
  