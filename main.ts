import dotenv from 'dotenv';
dotenv.config();  // Load environment variables from .env file 
const PASS = process.env.PASSWORD;  // Retrieve the environment variable 

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter your password: ', password => {
    if (password === PASS){
        console.log(`Password check went successfully`);
        readline.close();
    } else console.log('Wrong password'); readline.close();
});  

/*
 later add special symbols checking to password
*/
// const passw: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
// if (!password.match(passw)) {
//   res.send("bad password");
// }
