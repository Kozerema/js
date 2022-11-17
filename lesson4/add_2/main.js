//1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let arr = [];
// for (let i = 0, j = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         arr[j] = i
//         j++
//     }
// }
// console.log(arr);

//  let arr=[];
// for (let i = 0, j=0; i < 100; i++) {
//     if(i%2){
//         arr[j]=i;
//     }
//     console.log(arr)
// }

// let arr=[];
// for (let i = 0; i < 20; i++) {
//     arr[i] =Math.floor(Math.random()*100);
// }
// console.log(arr)

 let arr = [];
 for (let i = 0; i < 20; i++) {
    arr[i] = Math.floor(Math.random() * (732 - 8) + 8)

 }
 console.log(arr)

//2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 0; i < arr.length; i+=3) {
//    console.log(arr[i])
// }

//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 0; i < arr.length; i+=3) {
//     const arrElement = arr[i];
//     if (arrElement % 2 === 0) {
//         console.log(arrElement)
//     }
// }

//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let a=[];
// for (let i = 0,j=0; i < arr.length; i+=3) {
//     if(arr[i]%2===0){
//         a[j]=arr[i]
//         j++
//     }
// }
// console.log(a)

//  5. Вивести кожен елемент масиву, сусід справа якого є парним
// let arr=[ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i+1]%2===0){
//         console.log(arr[i])
//     }
//
// }



























