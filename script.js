console.log("javascript is fun 💖😎");

// console.log('JavaScript is interesting 😍😎')

// // Javascript Variables

// let fullName = 'Adeshola';
// let birthYear = 1990;
// const isMarried = true;
// console.log(`My name is ${fullName} and I was born in ${birthYear} and the ${isMarried} is I am married`);

// console.log(typeof(isMarried));



// let fullName, birthYear, job, isMarried;
// fullName = 'Big Eazi';            //string
// birthYear = 1999;                 //number
// job = 'Journalist';                //string
// isMarried = true;                //boolean

// console.log(fullName);
// console.log(birthYear);
// console.log(job);
// console.log(isMarried);
// console.log('My name is ' + fullName + '. I was born in ' + birthYear + ', \n I am a ' + job + 'and my marital status is ' + isMarried );
// console.log('My name is ' + fullName + '. I was born in ' + birthYear + ', I am a ' + job + 'and my marital status is ' + isMarried );
// console.log('My name is ' + fullName + '. I was born in ' + birthYear + ', I\'m a ' + job + 'and my marital status is ' + isMarried );

// using 'typeof' to check variables

// console.log(typeof(fullName));
// console.log(typeof(birthYear));
// console.log(typeof(job));
// console.log(typeof(isMarried));

//the 7 DATA-TYPES of JavaScript
//1. Numbers...Numbers have decimals
// let myNumber = 7;

//2. String...are text written in between single or double quotes
// let myCountry = "Nigeria";

//3. Boolean...Javascipt logic which returns either truth or false
// let _canVote = true;

//4.Undefined...this is the VALUE if we dont assign any VARIABLE.
// Undefined can be used to set a VALUE or a VARIABLE also.
// let mySchool;
// let myDepartment = undefined;

//5. Null...is an empty object
// let $can_drive = null

/**Javascript KEYWORDS that can't be used to set VARIABLES
//1. name
//2. new
//3. keyword
//4. function
//5. array
//6. variables keywords like 'let const var'


/** VARIABLE MUTABILITY ===> Between const, let, var*/ 
// let age = 30;
// age = 40;
// age = 50;
// console.log(age);

// const birthYear = 1990;
// console.log(birthYear);

// let myRegion;
// myRegion = 'south west'
// console.log(myRegion);

// const favColor = 'red';
// console.log(favColor)

// var job;
// job = 'programmer';
// job = 'teacher'
// console.log(job);


// // JAVASCRIPT BASIC OPERATORS
// // Minus Operator (-)
// const thisYear = 2022;
// const ageJohn = thisYear - 1990;
// const ageSarah = thisYear - 2004;
// const ageBob = thisYear - 1973;
// console.log(ageJohn,ageSarah,ageBob);

// // Plus Operator (+)
// const myBalance = 2500 + 658;
// console.log(myBalance);

/**The Plus Operator can be used for CONCATENATION */ 
// const firstName = 'Jack';
// const lastName = 'Sparrow';
// const fullName = firstName + lastName;
// console.log(fullName);
// console.log(firstName + '' + lastName);

/**JAVASCRIPT ASSIGNMENT OPERATORS */  
// // Plus or Equal (+=)
// let salary = 1000;
// console.log(salary);
// let moreSalary = salary+=600;
// console.log(moreSalary);

// // Minus or Equal (-=)
// let fee = 2345;
// let newFee = fee -= 120;
// console.log(newFee);

// // Times or Equal (-=)
// let ageSola = 22;
// let ageMummy = ageSola *= 2;
// console.log(ageMummy);

// // Division or Equal (/=)
// let naijaPop = 200000;
// let ghanaPop = naijaPop /= 2;
// console.log(ghanaPop);

// // Exponetiation (**)
// const powerThree = 3 ** 2;
// console.log(powerThree);

/**JAVASCRIPT COMPARISON OPERATORS */ 
// // Less than (<) and Greater than (>)
// const isLess = 86 < 72;
// console.log(isLess);        //false

// // Less or Equal (<=) and Greater or Equal (>=)
// const isGreater = 86 >= 86;
// console.log(isGreater);     //true

// console.log(ageSarah >= 18); //true


// // coding challenge 1
// const markMass = 78;
// const markHeight = 1.69;
// const markBmi = markMass / markHeight **2;

// const johnMass = 92;
// const johnHeight = 1.95;
// const johnBmi = johnMass / johnHeight **2;

// // const isHigher = markBmi > johnBmi;
// // console.log(isHigher);    //True

// // // coding challenge 1
// if (markBmi < johnBmi ) {
//     console.log(`John's BMI is the highest` );
// } else {
//     console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})`);
// }



/**JAVASCRIPT STRINGS & TEMPLATE LITERALS */

// const firstName = 'Jane';
// const lastName = 'Mena';
// const job = 'Therapist';
// const yearOfBirth = 1994;

// //ES5 Strings
// const janeES5 = 'I\'m ' + firstName + ' ' + lastName + ', I\'m a ' + job + ',\n\and I am ' + (2022-yearOfBirth) + 'years old';
// // console.log(janeES5);

// //ES6 Template Literals
// const janeES6 = `I'm ${firstName} ${lastName}, I'm a ${job} and I'm ${2022-yearOfBirth} years old.`;
// console.log(janeES6);

/**JAVASCRIPT DECISION MAKING (IF/ELSE STATEMENT) */ 
// const ageSarah = 18;

// if (ageSarah >= 18) {
//     console.log(`Sarah is old enough to drive 🚕`)
// } else {
//     console.log(`Sarah is too young to drive`)
// }

// ////////////////////////
// const birthYear = 1999;
// let century;

// if (birthYear < 2000) {
//     century = 20;
//     console.log(`${century}th`);
// } else {
//     century = 21;
//     console.log(`${century}st`);
// }

// const firstName = 'Jane';
// const job = 'Soldier';

// if (job === 'actor') {
//     console.log(`${firstName} is a popular ${job}`);
// } else if (job === 'Teacher') {
//     console.log (`${firstName} teaches children how to code`);
// } else if (job === 'Soldier') {
//     console.log(`${firstName} is a member of Nigeria navy`);
// } else if (job === 'footballer') {
//     console.log(`${firstName} plays for Manchester United`);
// } else {
//     console.log(`${firstName} works as a waiter`);
// }

/**JAVASCRIPT TYPE CONVERSION AND COERSION */
// const inputYear = '1991';
// console.log(inputYear);            //String
// console.log(Number(inputYear));    //Number

// console.log(Number('John'));   //NaN
// console.log(typeof(NaN));

// const myLocalNum = 23;
// console.log(String(myLocalNum));        //String
// console.log(myLocalNum.toString());     //String

// //Coersion
// //when you add a number to a string it will become a string
// console.log('I am ' + 23 + ' years old');

// console.log('78' + '42');       // 7842 ===>string
// console.log('78' - '42');       // 36 ===> number
// console.log('72' / '8');        // 9 ===> number
// console.log('28' * '7');        //196 ===> number
// console.log('23' - '10' - 3);
// console.log('23' - '10' + 5);

// //Guess the answer
// let n = '1' + 1;
// n + n - 1;
// console.log(n);


// const firstNumber = document.querySelector('#firstNum');
// const secondNumber = document.getElementById('secondNum');
// const submitBtn = document.getElementById('submitBtn');
// const calcOutput = document.getElementById(`calcOutput`);

// submitBtn.addEventListener('click', function (e) {
//     e.preventDefault();
//     const firstValue = Number(firstNumber.value);
//     const secondValue = Number(secondNumber.value);

//     function multiplyNums (a, b) {
//         return (a * b);
//     }
//     multiplyNums (firstValue, secondValue);
//     calcOutput.textContent = multiplyNums (firstValue, secondValue);
// });

/**JAVASCRIPT FALSY AND TRUSTHY VALUES */
// // Falsy Values
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// // Truthy Values
// console.log(Boolean(27))
// console.log(Boolean('Ade'));

// const money = 100;

// if (money) {
//     console.log(`Dont spend all that $${money}`);
// }else {
//     console.log(`You need to get a job`);
// }

/**JAVASCRIPT EQUALITY OPERATORS */
// Double-equal (==) 👉 this does type-coersion.
// console.log('18' == 18);

// // Triple-equal (===) 👉 this does not do type-coersion.
// console.log('84' === 84);

// const favNum = String (prompt ('Whats your favorite number'));
// console.log(favNum);



// if (favNum !== 7) {
//     console.log('Your favourite number is a string');
// } else if (favNum === 7) {
//     console.log('Now, you have a real number');
// }

// /**JAVASCRIPT BOOLEAN LOGIC */

// AND-Operator (&&) 👉when ALL conditions are TRUE
// OR--perator (||) 👉when one of the condition is TRUE

// const firstName = 'Alabi';
// const hasDriverLicence = false;
// const hasGoodVision = false;
// const isTired = false;

// if (hasDriverLicence && isTired) {
//     console.log(`Mr. ${firstName} can drive because he is not tired`);
// } else if (hasGoodVision || isTired) {
//     console.log(`Mr. ${firstName} can not drive in the night`);
// } else if (!hasDriverLicence || !hasGoodVision) {
//     console.log(`Mr, ${firstName} can drive at anytime`);
// }

// coding challenge class work 1
// const scoreDolphins = ((96 + 108 +89) / 3);
// console.log(scoreDolphins);
// const scoreKoalas = ((88 + 91 + 110) / 3);
// console.log(scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins is the winning team`);
// } else if (scoreDolphins < scoreKoalas) {
//     console.log(`Koalas emerged as the winner`)
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('That mean they played draw')
// }


// // coding challenge class work 2
// const scoreDolphins = ((97 + 110 +90) / 3);
// console.log(scoreDolphins);
// const scoreKoalas = ((109 + 95 + 93) / 3);
// console.log(scoreKoalas);
// const commonScore = 100;

// if (scoreDolphins > scoreKoalas && scoreDolphins >= commonScore) {
//     console.log(`Dolphins is the winning team 🏆`);
// } else if (scoreDolphins < scoreKoalas && scoreKoalas >= commonScore) {
//     console.log(`Koalas emerged as the winner 🏆`);
// } else if (scoreDolphins === scoreKoalas && scoreDolphins <= 100 && scoreKoalas <= 100 ) {
//     console.log(`Nobody wins the match because they have less than ${commonScore} points`);
// }


/**JAVASCRIPT SWITCH STATEMENT */


// const dayOfTheWeek = prompt ('Imput your birth day 😍');
// console.log(dayOfTheWeek);

// if (dayOfTheWeek === 'monday') {
//     console.log(`Today is the first day of the week`);
// } else if (dayOfTheWeek === 'tuesday') {
//     console.log(`It's a free day for me`);
//     console.log(`I can decide to sleep all day`);
// } else if (dayOfTheWeek === 'wednesday' || dayOfTheWeek === 'thursday' ) {
//     console.log(`On ${dayOfTheWeek}, I have to go and teach at the bootcamp`);
// } else if (dayOfTheWeek === 'friday') {
//     console.log(`${dayOfTheWeek} is for Jummah and I will go to the mosque `);
//     console.log(`Thank God is ${dayOfTheWeek} we club all night `);
// } else if (dayOfTheWeek === 'saturday') {
//     console.log(`It's half day at the work. Nothing much!`);
// } else if (dayOfTheWeek === 'sunday') {
//     console.log(`Yay! It's weekend and I watches football ⚽`);
// } else {
//     console.log(`You have enter a wrong week day...🚨`);
// }


// switch (dayOfTheWeek) {
//     case 'monday':
//         console.log(`Today is the first day of the week`);        break;
//     case 'tuesday':
//         console.log(`It's a free day for me`);
//         console.log(`I can decide to sleep all day`);
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log(`On ${dayOfTheWeek}, I have to go and teach at the bootcamp`);
//         break;
//     case 'friday':
//         console.log(`${dayOfTheWeek} is for Jummah and I will go to the mosque `);
//         console.log(`Thank God is ${dayOfTheWeek} we club all night `);
//         break;
//     case 'saturday':
//         console.log(`It's half day at the work. Nothing much!`);
//         break;
//     case 'sunday':
//         console.log(`Yay! It's weekend and I watched football ⚽`);
//         break;
//     default:
//         console.log(`You have enter a wrong week day...🚨`);
// }

/**JAVASCRIPT TERNARY OPERATOR */
// const age = 24;
// const canDrink = age >= 18 ? `can take alcoholic whine 🥃` : `can't take alcoholic whine cos he is under 18 ⚠`
// console.log(canDrink);


// if (age >= 18) {
//     console.log(`This person can take alcoholic whine 🥃`);
// } else {
//     console.log(`The person can't take alcoholic whine cos he is under 18 ⚠`);
// }

// const fitToMarry = true;
// console.log(fitToMarry ? `can get marry 😘💋🌹` : `can not get marry ☹😦`);


// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// console.log(`The bill was `)



// 1. Write a JavaScript program to display the current time
// Sample Output : Current time is : 10 PM : 30

// const d = new Date();
// const hour = d.getHours();
// const _hour = d.getHours() > 12 ? hour - 12: hour;
// const minute = d.getMinutes();
// const prepand = hour < 12 ? 'am' : 'pm'
// console.log(`Current Time is ${_hour} : ${minute} ${prepand}`)











