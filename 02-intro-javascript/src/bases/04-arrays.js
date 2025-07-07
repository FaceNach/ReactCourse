

// const testing = new Array();
const testing = [1,2,3,4];
// testing.push(1);
// testing.push(2);
// testing.push(3);
// testing.push(4);

let testing2 = [...testing, 5];
// testing2.push(5);

 const testing3 = testing2.map((number) => {
     return number * 2;
 });


console.log(testing);
console.log(testing2);
console.log(testing3);
