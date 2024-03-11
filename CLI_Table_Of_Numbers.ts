import inquirer from 'inquirer';
import chalk from 'chalk';
// functions creations for CLI Table , command line interface
async function Table(){
  let {numberForTable} = await inquirer.prompt([
    {
      type: 'number',
      name: 'numberForTable',
      message: chalk.bgGreen('Enter number: \n') 
    }
  ])
  for (let i=1; i<=10; i++){
    console.log(chalk.red(`${numberForTable} x ${i} = ${i*numberForTable}`))

  }

}
// cal function
Table()                                                                                                                                                          
