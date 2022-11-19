//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// const minimal = function (a,b,c){
//     if(a<b&&a<c){
//         console.log(a)
//     } else if(b<a&&b<c){
//         console.log(b);
//     } else if(c<a&&c<b){
//         console.log(c);
//     }else{
//         console.log('error')
//     }
// }
// const num=minimal(16,19,-9);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const minimal = function (a,b,c){
//     if(a>b&&a>c){
//         console.log(a)
//     } else if(b>a&&b>c){
//         console.log(b);
//     } else if(c>a&&c>b){
//         console.log(c);
//     }else{
//         console.log('error')
//     }
// }
// const num=minimal(16,19,-7);

// - створити функцію яка повертає найбільше число з масиву
// let arr=function (array){
//     let array2=[0];
//     for (const arrayElement of array) {
//         if(arrayElement>array2){
//             array2=arrayElement
//         }
//     }
//     return array2
// }
// let matrix=[56,-8,10];
// let a=arr(matrix)
// console.log(a);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr=function (array){
//     let sum =0;
//     for (let i = 0; i < array.length; i++) {
//         sum+=array[i]
//
//     }
// return sum/array.length
// }
//
// let matrix=[56,-8,10];
// let a=arr(matrix)
// console.log(a);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let arr=function (array){
//     let min=[0];
//     let max=[0]
//     for (const arrayElement of array) {
//         if(arrayElement<min ){
//             min=arrayElement
//             return min
//         }
//         if(arrayElement>max){
//             max=arrayElement
//             console.log(max)
//         }
//     }
// }
// let matrix=[56,-8,10];
// let a=arr(matrix)
// console.log(a);

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function argum(){
//     if(arguments.length===1){
//         console.log(arguments[0])
//     }else if(arguments.length===2){
//         console.log(arguments[0]+arguments[1])
//     }
// }
// argum(2,'g')

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
// let array =[]
// function arr() {
//     for (let i = 0; i < 15; i++) {
//          array[i] =Math.round(Math.random()*100);
//     }
//     console.log(array)
// }
// arr()

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
// let array=[];
// function arr(limit){
//
//    for (let i = 0; i < limit; i++) {
//         array[i] =Math.round(Math.random()*limit);
//    }
//    console.log(array)
// }
// arr(5)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr1=[6,3,9,4];
// function arr(array){
//     let arrNew=[];
//     for (let i = array.length - 1, j=0; i >= 0; i--) {
//        arrNew[j]=array[i]
//         j++
//     }
//
// return arrNew
// }
// console.log(arr(arr1))

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
//
// let matrix1=[6,-7,4];
// let matrix2=[4,8,1];
// function arrSum(arr1,arr2){
// let arrNew=[];
//     for (let i = 0, j=0; i < arr1.length, i < arr2.length; i++,j++) {
//         arrNew[j]=arr1[i]+arr2[i]
//
//     }
//     return arrNew
// }
// console.log(arrSum(matrix1,matrix2));

//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//[{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
// let user= [{name: 'Dima', age: 13},
//     {model: 'Camry'}]
// function arr (array){
//     let arrNew=[];
//     for (let i = 0,j=0; i < array.length; i++) {
//         for (const key in array[i]) {
//             arrNew[j++]=key
//         }
//
//     }
//     return arrNew
// }
// console.log(arr(user));

//- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
// let user= [{name: 'Dima', age: 13},
//     {model: 'Camry'}]
// function arr(array){
//     let arrNew=[];
//     for (let i = 0, j=0; i < array.length; i++) {
//         for (const arrNewKey in array[i]) {
//             arrNew[j++]=array[i][arrNewKey]
//         }
//     }
//     return arrNew
// }
// console.log(arr(user));











