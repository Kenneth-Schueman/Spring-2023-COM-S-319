/*
Kenneth Schueman
Feb 8, 2023
Activity06 ~ Variables
*/

// Q1 : Is it permited the next ?
console.log("Q1 ---------------")
var var1 = "Iowa";
console.log(var1);
var var1 = 124; 
console.log(var1);

// Is it permited ?
console.log("Is it permited? (Yes or Not): Yes, the second declearation overrides the first");

// Q2 : Is it valid ?
console.log("Q2 ----------------");
var var2 = "Ames"; //changed from let
console.log(var2);
var var2 = 124; //changed from let

// Is it valid ?
console.log("Is it permited? (Yes or Not): No, variables declared with let can not be overriden");

// Q3 : Is it valid ?
console.log("Q3 ----------------");
let var3 = "ISU";
console.log(var3);
var3 = 2023;
console.log(var3);
console.log("Valid?: Yes, because this operation sets var3 using = instead of 'let'")

// Q4 : Explain the Error.
console.log("Q4 ----------------");
let var4;
const var5 = 0;
console.log("What's the error: Var5 had not been initialized")

// Q5 : Explain the Error.
console.log("Q5 ----------------");
const var6 = 3.1415;
//var6 = 2.8;
console.log("What's the error: The function is attempting to override a constant, wich is not recomeneded :)")

// Q6 : Explain the Error.
console.log("Q6 ----------------");
let first_name = "Kenneth";
console.log("Q6a) let cannot be used to decalare a string using quotation marks, must of ''");
let numbers2 = [1,2];
console.log("Q6b) declarations of variable names cannot start with a number");
let city_state = "Ames Iowa";
console.log("Hyphins or '-' are not valid char when declaring the var name, instead use underscore or '_'");

// Q7 : What !! ??
console.log("Q7 ----------------");
let mainCity = "DesMoines";
console.log("This is the Capital :", mainCity)
console.log("var names are case sensitve, the call in the console function had the first letter capitalized")

// Q8 : "let" and "const" scope vs "var" scope
console.log("Q8 ----------------");
if (5 === 5) {
var var7 = 100;
}
console.log(var7);
if (5 === 5) {
var var8 = 100;
}
console.log(var8);
console.log("let cannot be used to declare/initialize inside a conditional")