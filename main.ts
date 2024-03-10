import dotenv from 'dotenv';
dotenv.config();  // Load environment variables from .env file 
const PASS = process.env.PASSWORD;  // Retrieve the environment variable 

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter your password: ', password => {
    if (password === PASS){
        console.log(`Success`);
        readline.close();
    } else console.log('Wrong password'); readline.close();
    // console.log(`Your password ${password}!`);
    // readline.close();
});  

//console.log('password: ', PASS);

// const passw: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
// if (!password.match(passw)) {
//   res.send("bad password");
// }
