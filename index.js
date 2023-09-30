// Code your solutions in this file
const birthdayName = ["Guadalupe", "Ollie", "Aki"];

function writeCards(birthdayName, eventName) {
    const messages = []; 
  
    for (let i = 0; i < birthdayName.length; i++) {
      const message = `Thank you, ${birthdayName[i]}, for the wonderful ${eventName} gift!`;
      messages.push(message); 
    }
  
    return messages; 
  }
  
  const birthdayMessages = writeCards(birthdayName, "birthday"); 
  console.log(birthdayMessages);

function countDown(age) {
  while (age >= 0) {
    console.log(age);
    age--;
  }
}

console.log(countDown(10))