// CHAPTER : 21-25 

// Task : 1
// var firstName = prompt("Please enter your First name");
// var lastName = prompt("Please enter your last name");
// var fullName = firstName + " " + lastName;
// alert("Hi " + fullName + ", Welcome to our website!");

// Task : 2
// var mobileModel = prompt("Enter your favorite mobile phone model");
// var length = mobileModel.length;
// document.write("My favorite phone is: " + mobileModel + "<br> Length of string: " + length);

// Task : 3
// var string = "Pakistani";
// var index = string.indexOf('n');
// document.write("String: " + string + "<br> Index of 'n': " + index);

// Task : 4
// var string = "Hello World";
// var index = string.lastIndexOf('l');
// document.write("String: " + string + "<br> Index of 'l': " + index);

// Task : 5
// var string = "Pakistani";
// var index = string.charAt(3);
// document.write("String: " + string + "<br> Character at Index 3: " + index);

// Task : 6
// var firstName = prompt("Please enter your First name");
// var lastName = prompt("Please enter your last name");
// var fullName = firstName.concat(" ",lastName);
// alert("Hi " + fullName + ", Welcome to our website!");

// Task : 7
// var word = "Hyderabad";
// var replaceword = word.replace("Hyder","Islam");
// document.write("City: " + word + "<br> After replacement: " + replaceword);

// Task : 8
// var message = "Ali and Sami are best friends. They play cricket and football together";
// var change_message = message.replace(/and/g, "&");
// document.write(change_message);

// Task : 9
// var a = "471";
// var b = +a;
// document.write("Value: " + a + "<br> Type: " + typeof a);
// document.write("<br>Value: " + b + "<br> Type: " + typeof b);

// Task : 10
// var input = prompt("Enter any word to convert it to capital letters");
// document.write("User input: " + input + "<br> Convert input: " + input.toUpperCase());

// Task : 11
// var input = prompt("Enter any word to convert to title case");
// var convert_input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
// document.write("User input: " + input + "<br> Converted: " + convert_input);

// Task : 12
// var num = 35.36;
// var str = num.toString();
// var a = str.replace('.','');
// document.write("Number: " + num + "<br> Result: " + a);



//Task :14
// var arr = ["cake","apple pie","cookie","chips","patties"];
// var bakery = prompt("Enter your bakery items");
// bakery = bakery.toLowerCase();
// var bakeryItems = arr.indexOf(bakery);
// if(arr.indexOf(bakery) !=-1)
// {
//     alert(bakery + " is available at index " + bakeryItems + " in our bakery");
// }
// else{
//     alert(bakery + " is not available in our bakery");
// }


//Task : 16
// var university = "University of Karachi";
// var a = university.split('');
// for(var i=0; i<a.length; i++)
// {
//     document.write(a[i]+"<br>");
// }

//Task :17
// var user = prompt("Enter name");
// document.write("User Input : " + user + "<br>");
// var last = user.charAt(user.length-1);
// document.write("Last character of input : " + last);

//Task : 18
// var text = "The quick brown fox jumps over the lazy dog";
// document.write("Text : "+text+"<br>");
// var convert = text.toLowerCase();
// var count = convert.match(/the/g).length;
// document.write("There are " +count+ " occurrence(s) of word 'the'" );


// CHAPTER : 26-30

// Task : 1
// var num = +prompt("Enter a postive number");
// document.write("number: " + num +"<br>");
// var round = Math.round(num);
// document.write("round off value: "+ round + "<br>");
// var floor = Math.floor(num);
// document.write("floor value: " +floor+ "<br>");
// var ceil = Math.ceil(num);
// document.write("ceil value: " +ceil );

// Task : 2
// var num = +prompt("Enter a negative floating number");
// document.write("number: " + num +"<br>");
// var round = Math.round(num);
// document.write("round off value: "+ round + "<br>");
// var floor = Math.floor(num);
// document.write("floor value: " +floor+ "<br>");
// var ceil = Math.ceil(num);
// document.write("ceil value: " +ceil );


// Task : 3
// var value = +prompt("Enter the absolute value");
// var value1 = Math.abs(value);
// document.write("The absolute value of " + value + " is "+value1);


// Task : 4
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write('You rolled value: ' + diceRoll);

// Task : 5
// var head = 1;
// var tail = 2;

// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     document.write("0 <br> Random Coin Value: Head")
// } else if(floor === 1)
// {
//     document.write("1 <br> Random Coin Value: Tails")
// }

// Task : 6
// var num =Math.floor(Math.random()*100);
// document.write("random number between 1 and 100: "+num);


// CHAPTER : 31-34

//Task : 1
// var a = new Date();
// document.write(a);

//Task : 2
// var monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"];
// var d = new Date();
// document.write("The current month is " + monthNames[d.getMonth()]);

//Task : 3
// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,3);
// alert("Today is " +c);

//Task : 4
// var a = new Date();
// if( a === "Sat" || a === "Sun")
// {
//     alert("It's Fun day");
// }
// else{
//     alert("It's not a Fun day")
// }

//Task :5
// var a = new Date();
// if(a === (1<=15))
// {
//     alert("First fifteen days of the month");

// }
// else{
//     alert("Last days of the month");
// }

//Task : 6
// var a = new Date("Dec 5,2015,22:32:23");
// document.write("Current Date :" + a + "<br>");
// var b = a.getTime();
// document.write("Elapsed milliseconds since January 1, 1970 :  " +b + "<br>")
// var b = new Date("Jan 1,1970")
// var c=a.getSeconds();
// document.write("Elapsed minutes since January 1, 1970 : " +c + "<br>")

//Task : 7
// var a = new Date();
// var b = a.getHours;
// if(b>=12)
// {
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// }

//Task : 8
// var laterdate = new Date("Dec 31,2020");
// document.write("Later date: "+ laterdate);

//Task : 9
// var a = new Date("Jun 18,2015");
// alert(a)



// CHAPTER : 35-38

//Task : 1
// function date()
// {
//  var a = new Date();
//  document.write(a)
// }
// date();


//Task : 2
// function fullName(firstName,lastName)
// {
//     return firstName + lastName;
// }
// var a = fullName("Bushra","Fatima");
// alert("Full Name : "+a);


//Task : 3
// function add ()
// {
//   num1 = +prompt("Enter first number");
//   num2 = +prompt("Enter second number");
//   var num = num1+num2;
//   return num;
// }
// var a = add();
// document.write("Sum of two number : " + a);


//Task : 4
// function calc (num1,opr,num2)
// {
//     if(opr === "+")
//     {
//         return num1 + num2;
//         }
//         else if(opr === "-")
//         {
//             return num2 - num1;
//         }
//         else if(opr === "*")
//         {
//             return num1 * num2;
//         }
//         else{
//             return "Incorrect operator";
//         }
// }
// var result = calc(5,"-",5);
// var result1 = calc(4,"*",6);
// var result2 = calc(4,"$",9);
// document.write(result + "<br>");
// document.write(result1 + "<br>");
// document.write(result2 + "<br>");


//Task : 5
// function square(x)
// {
//     return x * x;
// }
// var a = square(5);
// document.write("Square argument : " + a);

//Task : 6
// function factorial(x) 
// { 
//   if (x === 0)
//  {
//     return 1;
//  }
//   return x * factorial(x-1);
         
// }
// document.write(factorial(6));


//Task : 7
// function count()
// {
//     num1 = +prompt("Enter start number");
//     num2 = +prompt("Enter end number"); 
// for (var b=num1; b<=num2; b++)
// {
//     document.write(b + "<br>");
// }
// }
// count();

//Task : 10
// var word = prompt("Enter your word");
// var check="";
// function palindromefun(){
// for(var i =word.length-1; i>=0; i--)
// {
//   check += word[i];
// }

// if(check === word)
// {
//     document.write(word + " is palindrome word")
// }
// else
// {
//     document.write(word + " is not palindrome word")
// }
// }
// palindromefun();


