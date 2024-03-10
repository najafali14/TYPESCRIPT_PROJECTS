import chalk from 'chalk';
import inquirer from 'inquirer';
// Follow the GenAi channel on WhatsApp: https://whatsapp.com/channel/0029VaDV3lsADTOK3izlJx0p
async function ATM_project() {
  let { userId, userPin } = await inquirer.prompt([
    {
      type: 'input',
      name: 'userId',
      message: chalk.green('Enter Id: ')
    },
    {
      type: 'input',
      name: 'userPin',
      message: chalk.green('Enter Pin: ')
    }
  ])
  // conditions
  if (userId == 'najafali14' && userPin == '1414') {
    console.log('1 Balance Inquiry \t 2 Cash Withdrawal \t \n 3 Transfer Funds \t 4 Change PIN')
    // function i
    async function Functionalities() {
      const { userChoice } = await inquirer.prompt([
        {
          type: 'input',
          name: 'userChoice',
          message: chalk.green('Enter your choice: ')
        }
      ])
      if (userChoice == 1) {
        console.log('Your balance is: 5000$') ;
      } else if (userChoice == 2){
        console.log('1. 500$ \t 2. 1000$ \t 3. 1500$ \t 4. 2000$')
        // withdrawal function in else if
        async function Withdrawal(){
          const { userWithdrawal } = await inquirer.prompt([
            {
              type: 'input',
              name: 'userWithdrawal',
              message: chalk.green('Enter your Withdrawal amount: ')
            }
            
          ])
          // withdrawal conditions
            if (userWithdrawal == 1){
              console.log('500$ withdrawed successfully')
            }else if (userWithdrawal == 2){
            console.log('1000$ withdrawed successfully')
          }else if (userWithdrawal == 3){
              console.log('1500$ withdrawed successfully')
            }else if (userWithdrawal == 4){
              console.log('2000$ withdrawed successfully')
            }else{
              console.log('Enter valid amount number')
            }
        }
        Withdrawal()

      } else if (userChoice == 3) {
        console.log('1. 500$ \t 2. 1000$ \t 3. 1500$ \t 4. 2000$')
        // fund transfer function in else if
        async function fundTransfer(){
          const { fund } = await inquirer.prompt([
            {
              type: 'input',
              name: 'fund',
              message: chalk.green('Enter your Transfer fund amount: ')
            }

          ])
          // transfer fund conditions
            if (fund == 1){
              // console.log('500$ transfered successfully')
              // withdrawal function in else if
              async function transferTo(){
                const { receiverAccountNumber } = await inquirer.prompt([
                  {
                    type: 'input',
                    name: 'receiverAccountNumber',
                    message: chalk.green('Enter your receiver account number: ')
                  }

                ])
                // transfer conditions
                  if (receiverAccountNumber){
                    console.log('500$ transfer successfully to: ' + receiverAccountNumber)
                  }else if (receiverAccountNumber){
                  console.log('1000$ transfer successfully to: ' + receiverAccountNumber)
                }else if (receiverAccountNumber){
                    console.log('1500$ transfer successfully to: ' + receiverAccountNumber)
                  }else if (receiverAccountNumber){
                    console.log('2000$ transfer successfully to : ' + receiverAccountNumber)
                  }else{
                    console.log('Enter valid account number')
                  }
              }
              transferTo()
            }else if (fund == 2){
            // console.log('1000$ transfered successfully')
              // console.log('500$ transfered successfully')
              // withdrawal function in else if
              async function transferTo(){
                const { receiverAccountNumber } = await inquirer.prompt([
                  {
                    type: 'input',
                    name: 'receiverAccountNumber',
                    message: chalk.green('Enter your receiver account number: ')
                  }

                ])
                // transfer conditions
                  if (receiverAccountNumber){
                    console.log('500$ transfer successfully to: ' + receiverAccountNumber)
                  }else if (receiverAccountNumber){
                  console.log('1000$ transfer successfully to: ' + receiverAccountNumber)
                }else if (receiverAccountNumber){
                    console.log('1500$ transfer successfully to: ' + receiverAccountNumber)
                  }else if (receiverAccountNumber){
                    console.log('2000$ transfer successfully to : ' + receiverAccountNumber)
                  }else{
                    console.log('Enter valid account number')
                  }
              }
              transferTo()
          }else if (fund == 3){
              // console.log('1500$ transfered successfully')
              // console.log('500$ transfered successfully')
              // withdrawal function in else if
              async function transferTo(){
                const { receiverAccountNumber } = await inquirer.prompt([
                  {
                    type: 'input',
                    name: 'receiverAccountNumber',
                    message: chalk.green('Enter your receiver account number: ')
                  }

                ])
                // transfer conditions
                  if (receiverAccountNumber){
                    console.log('500$ transfer successfully to: ' + receiverAccountNumber)
                  }else if (receiverAccountNumber){
                  console.log('1000$ transfer successfully to: ' + receiverAccountNumber)
                }else if (receiverAccountNumber){
                    console.log('1500$ transfer successfully to: ' + receiverAccountNumber)
                  }else if (receiverAccountNumber){
                    console.log('2000$ transfer successfully to : ' + receiverAccountNumber)
                  }else{
                    console.log('Enter valid account number')
                  }
              }
              transferTo()
            }else if (fund == 4){
              // console.log('2000$ transfered successfully')
              // console.log('500$ transfered successfully')
              // withdrawal function in else if
              async function transferTo(){
                const { receiverAccountNumber } = await inquirer.prompt([
                  {
                    type: 'input',
                    name: 'receiverAccountNumber',
                    message: chalk.green('Enter your receiver account number: ')
                  }

                ])
                // transfer conditions
                  if (receiverAccountNumber){
                    console.log('500$ transfer successfully to: ' + receiverAccountNumber)
                  }else if (receiverAccountNumber){
                  console.log('1000$ transfer successfully to: ' + receiverAccountNumber)
                }else if (receiverAccountNumber){
                    console.log('1500$ transfer successfully to: ' + receiverAccountNumber)
                  }else if (receiverAccountNumber){
                    console.log('2000$ transfer successfully to : ' + receiverAccountNumber)
                  }else{
                    console.log('Enter valid account number')
                  }
              }
              transferTo()
            }else{
              console.log('Enter valid fund transfer amount number')
            }
        }
        fundTransfer()
      } else if (userChoice == 4){
        // console.log('Pin is updated')
        // withdrawal function in else if
        async function changePin(){
          let { cPin } = await inquirer.prompt([
            {
              type: 'input',
              name: 'cPin',
              message: chalk.green('Enter your new password: ')
            }

          ])
          
         userId = cPin;
          console.log('Your new password updated successfully, '+userId)
        }
        changePin()
      } else{
        console.log('please enter a valid choice 1 to 4')
      }
    }
    // function calling
    Functionalities()


  } else {
    console.log(chalk.red('Invalid User Id or Pin ⚠️'))
    
  }
  
}

ATM_project()

