const arr = [10,20,30,40,50]

console.log('the vallue of arr is ' , arr);

const newArr = [...arr,60,70,80,90,100]
console.log('the valueof new arr is ' , newArr);
const newPrevArr = [1,2,3,4,5,...newArr];
console.log('the value of newPrevArr is ' , newPrevArr);

let obj1 = {
    name: 'abc',
    age: 20
}

console.log('the value of obj1 is ' , obj1);

const newObj1 = {...obj1,city:'mumbai'}
console.log('the value of newObj1 is ', newObj1);
console.log('the value of Date.now() is ' , Date.now());

console.log('now changing the value of obj1',{...obj1,age:22});
obj1 = {...obj1, age:22}
console.log('now changing the value of obj',obj1);

const Name = "hello world";
console.log('the value of name is ', {Name});

const filterArray = [10,20,30,40,50,60,70,80,90,100]
console.log('before the value of filterArray is ' ,filterArray);
const newfilterArray = filterArray.filter((value,index)=>index !== 9);

console.log('the value of filterArray is ' ,newfilterArray);
console.log('the value of newfilterArray',newfilterArray);