//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше.(Без Math.min!)
// let num = (a, b, c) => {
//     if (a < b && a < c) {
//         return a
//     } else if (b < a && b < c) {
//         return b
//     } else if (c < a && c < b) {
//         return c
//     } else {
//         return 'error'
//     }
// }
// console.log(num(4, -7, 8));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let num = (a, b, c) => {
//     if (a > b && a > c) {
//         return a
//     } else if (b > a && b > c) {
//         return b
//     } else if (c > a && c > b) {
//         return c
//     } else {
//         return 'error'
//     }
// }
// console.log(num(4, -7, 8));

// - створити функцію яка повертає найбільше число з масиву
// let matrix=[6,9,-6];
// let arr=(array)=>{
//     let arrNew=[0];
//     for (let arrayElement of array) {
//         if(arrayElement>arrNew){
//             arrNew=arrayElement
//         }
//     }
//     return arrNew
// }
// console.log(arr(matrix));

// - створити функцію яка повертає найменьше число з масиву
// let matrix=[6,9,-6];
// let arr=(array)=>{
//     let arrNew=[0]
//     for (const arrayElement of array) {
//         if(arrayElement<arrNew)
//         arrNew=arrayElement
//     }
//     return arrNew
// }
// console.log(arr(matrix));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let matrix=[3,8,1];
// let arr=(array)=>{
//     let sum=0;
//     for (let arrayElement of array) {
//         sum+=arrayElement
//     }
//     return sum
// }
// console.log(arr(matrix));

// - Дано натуральное число n. Выведите все числа от 1 до n.
//  let num=(n)=>{
//  for (let i = 1; i <= n; i++) {
//      console.log(i)
//      }
//  }
//  console.log(num(5));

// - Даны два целых числа A и В .
// Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// let numbers=(a,b)=>{
//     if(a>b){
//     for (let i = a; i >= b; i--) {
//         console.log(i)
//     }} else if(a<b){
//     for (let i = a; i <=b; i++) {
//      console.log(i)
//     }
//     }else{'error'}}
//     console.log(numbers(30, 27));

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// let matrix=[5,0,9,2,5];
// const foo=(n,array)=>{
//     for (let i = 0; i < array.length; i++) {
//         if(array[i+1]){
//             let arr2=array[n];
//             array[n]=array[n+1]
//             array[n+1]=arr2
//
//         }
//     }
//     return array
// }
// console.log(foo(2, matrix));
//
//
//  let matrix=[5,0,9,2,5];
// let foo=(array,n)=>{
//     [array[0],array[1]]=[array[1],array[0]]
//     return array
// }
// console.log(foo(matrix, 0));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// let matrix=[6,0,23,1,0,5,3]
// const foo=(array)=> {
//     let arrNew=[];
//     let container=0;
//     let index=0
//     for (let i = 0; i < array.length; i++) {
//         array[i]?arrNew[index++]=array[i]:container++
//     }
//     const num= arrNew.length
//     for (let i = num; i < num+container; i++) {
//        arrNew[i]=0;
//
//     }
//     return arrNew
// }
// console.log(foo(matrix));















