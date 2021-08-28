var prompt = require('prompt-sync')();
var storedUsers = [];
function homePage() {console.log('1- View Balance', '\n', '2- Deposit Amount', '\n', '3- Change PIN', '\n', '4- Logout')
                var signedIn = prompt("What do you want to access? ")
                switch(signedIn){
                    case '1': 
                        console.log("Current Balance: ", storedUsers[0].initialBalance);
                        homePage();
                        break;
                    case '2':
                        var depositAmount = prompt("Enter Deposited Amount: ")
                        parseInt(depositAmount)
                        var newBalance = depositAmount + storedUsers[0].initialBalance;
                        storedUsers.push({newBalance})
                        console.log(storedUsers)
                        console.log('Your new balance is: ', newBalance)
                        homePage();
                        break;
                    case '3': 
                        pin = prompt("Enter new PIN: ")
                        console.log("New Pin Saved Succesfully")
                        homePage();
                        break;
                    case '4':
                    loginPage()
                        break;
                }
                }

function loginPage() {
        var loginName = prompt("Enter Username: ");
        var loginPin = prompt("Your 4 Digit PIN? ", {echo: '*'});
        
            if((loginName == storedUsers[0].userName) && (loginPin == storedUsers[0].pin)){
                console.log('Successfully Signed In')
                homePage();}
            else if((loginName != storedUsers[0].userName) || (loginPin != storedUsers[0].pin)){
                console.log('Retry')
                loginPage();
            }
                
            }

console.log('\n','1- Add User','\n', '2- Login', '\n', '3- Admin Panel')

var access = prompt("What do you want to access? ");

switch(access){
    case '1': {
        function signup() {var userName = prompt("Your Full Name? ");
        var age = prompt("Your Age? ");
        var gender = prompt("Your Gender? ");
        var pin = prompt("Your secret 4 Digit PIN? ");
        var initialBalance = prompt("Initial Deposit? ");
        parseInt(initialBalance)
        var accNum = Math.floor((Math.random() * 1000000000000) + 1);
        console.log("Your new account number: ", accNum )
        storedUsers.push({userName, age, gender, pin, initialBalance, accNum})
        console.log(storedUsers)
        var askLogin = prompt('Do you want to Log in?(Y/N) ')
        if(askLogin == 'Y'){
            loginPage();
        }
        else if(askLogin == 'N'){
            var newUser = prompt('Add new User? ')
            if(newUser == 'Y' || 'y'){
                signup();
            }
        }
        }
        signup();
        break;
    }
    case '2': {
        loginPage();}
    case '3': 
        console.log('Coming Soon')
        break;
}