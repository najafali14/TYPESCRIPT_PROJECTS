import inquirer from 'inquirer'
import chalk from 'chalk'
async function NameStyler(){
  while (true){
    
  let uname = await inquirer.prompt([
    {
      'name':"nam",
      'type':'string',
      'message':'Enter your name...'
    },
    {
      'name':"style",
      'type':'string',
      'message':'Color To Style'
    }
  ])
  let st = uname.style.toLowerCase()
  if (st == 'green'){
    console.log(chalk.green(uname.nam))
  }
  else if (st == 'red'){
    console.log(chalk.red(uname.nam))
  }
  else if (st == 'yellow'){
    console.log(chalk.yellow(uname.nam))
  }
  else if (st == 'blue'){
    console.log(chalk.blue(uname.nam))
  }
  else if (st == 'black'){
    console.log(chalk.black(uname.nam))
  }
  else if (st == 'white'){
    console.log(chalk.white(uname.nam))
  }
  else{
    console.log('try again')
  }
    }

}
NameStyler()
