//1.Write a function that capitalizes the first letter of each string argument it receives.

function letterCapitalise(array=[]){
    const result = [];
    array.forEach(element => {
        if (element!=Number(element) ){
            const [firstLetter] = element;
            const replaceLetter = firstLetter.toUpperCase();
            element = element.replace(firstLetter, replaceLetter);
            result.push(element);
        }
        
    });

    return result;
}

console.log(letterCapitalise(['hello', 'there', 'ES', 6, 740]))


// 2.Write a function that calculates sale tax that should be paid for the product of the given price.
//Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).

function calculateTax(products =[]){
    const result = [];
    const tax = 0.2;
    products.forEach((product) =>{
    const taxAmount = product.price *tax;
    result.push (taxAmount);
    })
    return result;
}
console.log(calculateTax([{ name: 'Banana', price: 120 }, {name: 'Orange',  price: 100}]))

// Price with tax
function calculatePriceWithTax(products =[]){
    const tax = 0.2;
    products.forEach((product) =>{
    const taxAmount = product.price *tax;
    product.price +=taxAmount;
   
    })
    return products;
}
console.log(calculatePriceWithTax([{ name: 'Banana', price: 120 }, {name: 'Orange',  price: 100}]))


//3. Write a function that increases each element of the given array by the given value. If the value is
//omitted, increase each element of the array by 1.

function increaseElement(array=[], value = 1){
    const result =[];
    array.forEach(element =>{
      element +=value;
     result.push(element)
    })
    return result;
}
console.log(increaseElement([4, 6, 11, -9, 2.1],2));

//drugi nacin 
function increaseElement(array=[], value = 1){
    const result = array.map((item)=> item*value);
    return result;
}
console.log(increaseElement([4, 6, 11, -9, 2.1],2));

//4.Write a function that filters all even elements of the array.

function allEven(array =[]){ 
    return array.filter((item )=> item %2==0);
}

console.log(allEven([6, 11, 9, 0, 3]))

//5. Write a function that filters all the strings from the given array that contain substring JS or js.
function filterByCondition(input = [], condition = '') {
    return input.filter(item => item.toLowerCase().includes(condition.toLowerCase()));
}

console.log(filterByCondition( ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'], 'JS'))

//6.Write a function that filters all integer numbers from the given array.

function allInt(array =[]){ 
    return array.filter((item)=> Number.isInteger(item));
}

console.log(allInt([1.6, 11.34, 9.23, 7, 3.11, 8]))

//7. Write a function that filters all integer arguments that contain digit 5.
function filterByCondition(input = [], condition) {
    return input.filter((item)=>Number.isInteger(item)).filter((item) => item.toString().includes(condition.toString()));
}
console.log(filterByCondition([23, 11.5, 9, 'abc', 45, 28, 553], 5))

//8. Write a function that returns indexes of the elements greater than 10.

function allGraterThen10(array =[]){ 
    const result =[];
    let index = 0;
     array.forEach(item =>{
        
   index =array.findIndex((item) => item > 10);
        result.push(index);    
        
     })
     return result 
} console.log(allGraterThen10([1.6, 11.34, 29.23, 7, 3.11, 18]))

//9.Create an array of persons. A person should be an object with name and age properties.
//Experiment with enhanced object literals.

const personArr = [{name:"John Doe", age:65}, {name:"John Waine", age:104}, {name:"Petar Petrovic",age:18}, {name:"Jovan Jovanovic", age:30}
,{name:"Jovana Jovic", age:10}];

//a. Write a function that prints out the names of persons older than 25.
function ageMore(array =[]){
    return array.filter(person => person.age>25)
}console.log(ageMore(personArr))

//b.Write a function that check if there is a person older than 40.
function ageMore40(array =[]){
    return array.some(person => person.age>40 ? true :false)
}console.log(ageMore40(personArr))

//c. Write a function that checks if all persons are older than 20.
function ageMore20(array =[]){
    return array.every(person => person.age>20 ? true :false)
}console.log(ageMore20(personArr))

//10.10. Write a function that checks if the given array is an array of positive integer values.

function isPositive(array =[]){
    return array.every(element => element>0 ? true : false)
}console.log(isPositive([3, 11, 9, 5, 6]))
console.log(isPositive([3, -12, 4, 11]))



//11. Write a function that calculates the product of the elements of the array.

function allProduct(array =[]){ 
    let result =1;
     array.forEach((item )=> {
        result= result*item;
    })
        return result; 
} console.log(allProduct([2, 8, 3]))

//12. Write a function that calculates the maximum of the given array.
function findMax(array=[]){
    return Math.max(...array);
}console.log(findMax([2, 7, 3, 8, 5.4]))

