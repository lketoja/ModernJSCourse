//function declaration
//these ar hoisted (=moved to the top) so one can call a function
//before declaring it
function greet(){
    console.log('hello there!');
}

//function expression
//must allways be before function call!!!
const greet2 = function(){
    console.log('good day!');
};

greet();
greet2();

//luigi and night are default values!
const speak = function(name = 'luigi', time = 'night'){
    console.log(`good ${time} ${name}`);    
};

speak('mario', 'morning');
speak();
speak('shaun');

//the are of a circle
const calcArea = function(radius){
    return 3.14 * radius**2;
}

//the same with arrow function!
const calcAreaArrow = radius => 3.14 * radius**2;

console.log('area is:', calcArea(5));
console.log('with arrow function:', calcAreaArrow(5));

//REGULAR FUNCTION
const sayHello = function(){
    return 'hello, world';
}

//ARROW FUNCTION
const sayHelloArrow = () => 'hello, world';

//REGULAR
const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

//REGULAR
const billArrow = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

//callback
const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
}

myFunc(value => console.log(value));

//ForEach
let people = ['Lotta', 'Jussi', 'Pekka', 'Titta'];

people.forEach((person, index) => console.log(index, person));

//and the same with callback function
console.log('and the same with callback function:')
const logPerson = (person, index) => {
    console.log(index, person);
};

people.forEach(logPerson);

//callback and ForEach in action!
const ul = document.querySelector('.people');
let html = ``;

people.forEach(person => {
    html += `<li> ${person} </li>`;
});

ul.innerHTML = html;