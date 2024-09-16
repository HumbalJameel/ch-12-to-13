//CH 12 TO 13
//1.1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a
//number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
var str = prompt ("Enter a character");
if (str >= '0' && str <= '9') {
      alert('The character is a number.');
} else if (str >= 'A' && str <= 'Z') {
      alert('The character is an uppercase letter.');
} else if (str >= 'a' && str <= 'z') {
      alert('The character is a lowercase letter.');
} else {
      alert('The character is neither a number nor a letter.');
}
  

//2. Write a JavaScript program that accept two integers and
//display the larger. Also show if the two integers are equal.
var num1, num2;

// Uncomment the following lines to take input from the user
num1 = window.prompt("Enter the First integer", "0");
num2 = window.prompt("Enter the second integer", "0");

// Compare the values and print the larger or equality message
if (parseInt(num1, 10) > parseInt(num2, 10)) {
  alert("Larger integer is" +  parseInt(num1, 10));
} else if (parseInt(num1, 10) < parseInt(num2, 10)) {
  alert(" larger integer is" +  parseInt(num2, 10));
} else if(parseInt(num1, 10) == parseInt(num2, 10)){
  alert("both integers are equal");
}


//3. Write a program that takes input a number from user &
//state whether the number is positive, negative or zero.
const number = parseInt(prompt ("Enter a number"));
if(number > 0){
    alert('number is positive');
}else if(number == 0){
    alert('zero');
}else if(number < 0){
    alert('number is negative');
}


//4. Write a program that takes a character (i.e. string of
//length 1) and returns true if it is a vowel, false otherwise.
 const vowel = prompt ("Enter a vowel");
if(vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u'){
    alert("true")
}else{
    alert("false")
}


//5. Write a program that
//a. Store correct password in a JS variable.
//b. Asks user to enter his/her password
//c. Validate the two passwords:
//i. Check if user has entered password. If not, then give message “ Please enter your password”
//ii. Check if both passwords are same. If they are same, show message “Correct! The password you
//entered matches the original password”. Show “Incorrect password” otherwise.
var Mypass = ("234567")
var password = prompt("Enter your password")
if(password == Mypass){
    alert("Correct!The password you enter matches the original password")
}else if(password !== Mypass){
    alert("Incorrect password")
}


//6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
var hour = 13
var greeting;
if (hour < 18) {
  greeting=("Good day");
}else{
  greeting=("Good evening");
}


//7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the
//following case using if, else & else if statements.
var time = prompt("Enter the time in 24 hours format (e.g. 1900 = 7pm):");
if(time >= "0000" && time < "1200"){
   alert("Good Morning!");
}else if(time >= "1200" && time < "1700"){
    alert("Good Afternoon!");
}else if(time >= "1700" && time > "2100"){
    alert("Good Evening1");
}else if(time >= "2100" && time >= "2359"){
    alert("Good Night!");
}

