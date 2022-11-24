// Write your code in this file!
const currentUser = 'Grace Hopper';
console.log(currentUser)
/*const welcomeMessage = 'Welcome to Flatbook, ';*/

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
console.log(welcomeMessage)
console.log(excitedWelcomeMessage)

/*const cUser = 'G'*
const shortGreeting = '';*/
currentUser.slice(0, 1);
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
console.log(shortGreeting)