/*
Given a string, write a function that will determine whether the braces 
 - including parentheses (), square brackets [], and curly brackets {}
 - within the string are valid. That means that any braces within other 
   braces must close before the outer set closes.

HINT: Keep in mind that you may use arrays and objects to keep your information organized!

Example: bracesValid("{{()}}[]") returns true because the inner braces close before the outer braces. 
    Each opening brace has a matching closing brace.

Example:  bracesValid("{(})") returns false because the curly braces close 
    before the parentheses, which starts within the curly braces, had a chance to close.
*/
function validBraces(str){
    
    // type validation
    if(typeof str !== 'string'){
        console.log("invalid type, please input a string")
        return false;
    }

    let parenDic = {
        "{" : 0,
        "[" : 0,
        "(" : 0
    }

    for(let i = 0; i < str.length; i++){
        // always check if number ever becomes negative
        for(let key in parenDic){
            if(parenDic[key] < 0){
                console.log("errored with the neg count")
                return false;
            }
        }

        // increase if the count if begining parenthese appearse
        if(str[i] == '{'){
            parenDic["{"] += 1;
        }
        if(str[i] == '['){
            parenDic["["] += 1;
        }
        if(str[i] == '('){
            parenDic["("] += 1;
        }

        // decreasing if there is an ending parenthese
        if(str[i] == '}'){
            parenDic["{"] -= 1;
        }
        if(str[i] == ']'){
            parenDic["["] -= 1;
        }
        if(str[i] == ')'){
            parenDic["("] -= 1;
        }
    }

    for(let key in parenDic){
        if(parenDic[key] != 0){
            console.log("errored on the positive count")
            return false;
        }
    }

    return true

}
// console.log(validBraces("lskdl[asdfa]aa"))
// console.log(validBraces("lskdl[ssxssd"))
// console.log(validBraces("((()))()([])"))
// console.log(validBraces(14.33))




/*
Example - fizzbuzz(15) would log the following (each element on its own line):
    1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz

BONUS 1: Validate the user input. 
    If the function is not passed a positive number, 
    either throw an error or return null.

Example - fizzbuzz("fifteen") would throw the following error:
    Parameter must be a positive number

BONUS 2: Rather than have the function log each element, 
    return a nicely formatted string with all the elements. 
    Include commas where appropriate to make it easier to read.

Example - fizzbuzz(15) would return the following string:
    1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, and FizzBuzz.
*/

function fizzBuzzLia(num) {
    s = "";
    for (let i = 1; i <= num; i++) {

        if (i % 3 == 0) {
            s += "Fizz";
        }
        if (i % 5 == 0) {
            s += "Buzz";
        }
        if (i % 3 != 0 && i % 5 != 0) {
            s += i
        }
        s += " ";
    }
    return s;
}

// console.log(fizzBuzzLia(15))

function fizzBuzzBonus2(num) {
    
    // some validation
    if(typeof num === 'string'){
        return "Please input a number, not a string";
    }

    let s = "";
    for (let i = 1; i <= num; i++) {

        if (i % 3 == 0 || i % 5 == 0) {
            if (i % 3 == 0) {
                s += "Fizz";
            }
            if (i % 5 == 0) {
                s += "Buzz";
            }
        } else {
            s += i
        }

        if(i != num){
            s += ",";
        } else {
            s += ".";
        }
        if (i == num -1 ){
            s += " and";
        }
        s += " ";
    }
    return s
}
// console.log(fizzBuzzBonus2(15))
// console.log(fizzBuzzBonus2("fifteen"))

// 1. Iterate over an array

function iterateOverArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], " at the index", i)
    }
}

// iterateOverArray([20,21,22,23,24])

// 2. Construct a string

text = "na na na na,";
text += "hey hey hey, good bye \nnew line? \t with a tab in the middel";
// console.log(text)

// 3. Use the return statement

function returnSomething(la) {
    let text = "something with double shitttt\nwith a new line";
    text += "\n" + text
    console.log(text)
    return la + 4
}

/*
console.log(returnSomething(0))

Write a function that takes an array of numbers as a parameter. 
Find the maximum number, the minimum number, and the average of 
all the numbers in the array. Return these values in a nicely formatted string.

Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."
*/

function maxMinAvg(arr) {

    console.log(arr)

    let max = arr[0]
    let min = sum = max;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i]
    }

    avg = sum / arr.length;

    return "The minimum is " + min + ", the maximum is " + max + ", and the average is " + avg + ".";
}

// console.log(maxMinAvg([4,4,6,8,2,0]))
// console.log(maxMinAvg([1, -2, 9, 4]))
