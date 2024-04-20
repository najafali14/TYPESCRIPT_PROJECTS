import inquirer from 'inquirer'
import chalk from 'chalk'
console.log(chalk.bold.bgGreen('\t\t\t\tTodoList Project\n'))
// youtube:  @genai14
async function TodoList(){
  let todotasks = []

  while (true){
  let todolist = await inquirer.prompt([
    {
      name: 'todo1',
      message: 'Enter your todo task: ',
      type: 'input'
    },
    {
      name: 'p1',
      message: 'you want to add other todo?: ',
      type: 'list',
      choices:['yes','no']
    }
    
  ]);

  todotasks.push(todolist.todo1)
if (todolist.p1 === 'no'){
  break
}
    
  }
  console.log(chalk.bold.bgGreen('your final todo list is: '),todotasks)

}
TodoList()
