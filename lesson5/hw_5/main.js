//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//  function s(a,b){
//          return a*b
//  }
//  let s1=s(20,15)
//  console.log(s1);
//  let s =(a,b)=>a*b;
// console.log(s(12,2))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//  function s(radius){
//          return 2*Math.PI*radius;
//  }
//  let s1 = s(4)
//  console.log(s1)
// const S=(r)=>Math.PI*Math.pow(r,2)
//  console.log(s(2))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//  function s(hight,radius){
//          return Math.floor(2*Math.PI*radius*(hight+radius))
//  }
//  let s1 =s(3,2);
//  console.log(s1);

// - створити функцію яка приймає масив та виводить кожен його елемент
// function array(arr){
//         for (let i = 0; i < arr.length; i++) {
//
//                 console.log(arr[i]);
//         }
// }
// let matrix= ['dkcn',7444,true]
// array(matrix)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function title(text){
// document.write(`<p>${text}</p>`)
//
// }
// title('hi')

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function html(text) {
//     document.write(`<ul><li>${text}</li>
// <li>${text}</li>
// <li>${text}</li></ul>`)
// }
// console.log(html('hello'))

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function html(text,num){
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
//
// html('hi',5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// const arr=function (array){
//     document.write(`<ul>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
// let matrix=[483,'fije',true]
// console.log(arr(matrix))

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// const users=[{name:'valia',age:16},
// {name: 'vasya', age:30}]
// function arr (array){
//     for (const arrayElement of array) {
//         document.write(` <div>${arrayElement.name}${arrayElement.age}</div>`)
//     }
// }
// console.log(arr(users))

// - створити функцію яка повертає найменьше число з масиву
//  function arr(array){
//      let arr2=[0];
//     for (let i = 0,j=0; i < array.length; i++) {
//         const arrayElement = array[i];
//         if(arrayElement<arr2){
//             arr2[j]=arrayElement
//             j++
//         }
//
//     }
// return arr2
// }
// let matrix=[6,-7,15];
// let a = arr(matrix)
// console.log(a)
//другий масив не потрібний

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function arr(array){
//     let sum =0;
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         sum+=arrayElement; //sum = sum + arrayElement
//     }
//     return sum;
//
// }
// let matrix =[15,15,15]
// let a= arr(matrix)
//   console.log(a);

