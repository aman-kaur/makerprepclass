//Fix the syntax & style issues with the three objects below:
var fullname={firstName:'Josh',lastname:'Lehman'};
var values={a:1,b:2,c:3,d:4};
var animaltype={
    animal:'dog',
    noise:'bark',
        age: 3,
  type:'Labrador',
     color:'Yellow',
}
//Create an object that represents you. It should contain your first name, last name, age and hometown.
var you={
	firstname:'aman',
	lastname:'bhullar',
	age:26,
	hometown:'fremont',
	name:'firstname'
}
var you2={
	firstname:'aman',
	lastname:'bhullar',
	age:26,
	singlename:{
	 firstname:'aman',
	 lastname:'bhullar'
	}
}
you.FavoriteShow='jess'
you.Occupation='study'
you.DateofBirth=29
you.petsname='cat'
var obj={};
var my={
Title:"dirctor",
Director:"hero",
Yearreleased:2014,
Rating:"top",
Actors:"kaa"
}

var obj={};
obj.hello="world";
obj["numbers"]=26;
obj.Favoritecolor="green"
//Fix the attempts to access values in the person object
var key = "name";
var key2="hometown";
var person = {
    name: {
    	first: "aman",
    	middle: "deep",
    	last: "bhullar"
    },
    age: 26,
    hometown: "somewhere"
};
//person[age]; // => 26
//person.key; // => "Alyssa P. Hacker"
//person["somewhere"] // => ???
//Write a function formatName that takes the person object that you created to represent yourself as an argument, and returns your full name.
function formatName (person){
	return first+""+middle+""+last;
}
//Add the object representing yourself to this array of people (if your name key does not have the same "shape" as the ones above, change it to look like these).
 var people=[
 {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
   {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21},
  {name: {first: "aman", last: "bhullar"}, age: 26}
];
//Write a function that, when passed people as an argument, returns an array of their full names. Can you make use of your formatName function here?
//Represent at least two of the following using an object (create variables with objects as their values):

//Your car (or a favorite model)
//The system specs of your computer (RAM, CPU, storage, etc.)
//Your pet
//Another person that you know
var car={
	name:"GTR",
	color:"white",
	model:2015
};
var pet={
	name:'rockey',
	color:'brown',
	age:20
};
//Write a function called squareNumericValues that takes an object as a parameter and returns an object with all of the numeric values in the object squared, e.g.
var obj=
{a: 4,
 b: 7, 
 c: 2
};
function squareNumericValues(obj) {
	var res={};
	for(var key in obj){
		if(typeof obj[key]==='number'){
			res[key] =obj[key]*obj[key];
}
else if(typeof obj[key]==='string'){
	res[key]=obj[key];
}
	}
  return res;// TODO: Your co
 }
//squareNumericValues({a: 4, b: 7, c: 2}); // => {a: 16, b: 49, c: 4}
//squareNumericValues({name: "Phuong", age: 25}); // => {name: "Phuong", age: 625}
//To handle this, you will need to use the typeof operator to determine each value's type. Enter the following into a console to get an idea of how typeof works:

//typeof 1; // => "number"
//typeof "hello"; // => "stri


//typeof true; // => "boolean