// let arr=[2,17,13,6,22,31,45,66,100,-18];
//1. перебрати його циклом while
// let i=0;
// while( i<=arr.length){
// console.log(arr[i]);
// i++;
// }

//2. перебрати його циклом for
// for(let i=0; i<=arr.length; i++){
//     console.log(arr[i])
// }

//3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i=0;
// while(arr[i]<=arr.length){
//     let arrEl=arr[i]
//     if(i%2!=0){
//     console.log(arrEl)};
//     i++;
//}

//4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for(let i=0; i<=arr.length; i++){
//     if(arr[i]%2!==0){
//         console.log(arr[i])
//     }
// }

//5. перебрати циклом while та вивести  числа тільки парні  значення
// let i=0;
// while(i<=arr.length ){
//     if(arr[i]%2===0){
//         console.log(arr[i]);}
//     i++;
// }

//6. перебрати циклом for та вивести  числа тільки парні  значення
// for(let i=0; i<=arr.length; i++){
//     if(arr[i]%2===0){
//         console.log(arr[i])
//     }
// }

//7. замінити кожне число кратне 3 на слово "okten"
// for (let i of arr) {
//     if(arr[i]%3===0){
//         console.log('okten')
//     }
//
// }

//8. вивести масив в зворотньому порядку.
// for(let i=arr.length-1; i>=0; i--){
//     console.log(arr[i])
// }

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0]=49;
// arr[1]=3;
// arr[2]=2;
// arr[3]=3;
// arr[4]=2;
// arr[5]=3;
// arr[6]=2;
// arr[7]=3;
// arr[8]=2;
// arr[9]=3;
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr=[];
// arr[0]='a';
// arr[1]='q';
// arr[2]='b';
// arr[3]='c';
// arr[4]='d';
// arr[5]='e';
// arr[6]='f';
// arr[7]='a';
// arr[8]='g';
// arr[9]='j';
// for(let i=0; i<arr.length; i++ ){
//     console.log(arr[i])
// }

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr=['kvfl',5,49398,true,5>7,'lndscl',873459,7492,false,9<2]
// for (let i = 0; i < arr.length; i++) {
// console.log(arr[i])
// }

//- Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
// let arr=['kvfl',5,49398,NaN,5>7,'lndscl',873459,7492,false,9<2]
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if(typeof (arrElement)==="boolean"){
//         console.log(arrElement)
//     }
// }

//- Створити масив з 10 елементів числового, стірчкового і булевого типу.
//    За допомогою if та typeof вивести тільки числові елементи
// let arr=['kvfl',5,49398,NaN,5>7,'lndscl',873459,7492,false,9<2]
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if(typeof (arrElement) === "number"){
//         console.log(arrElement)
//     }
// }

//- Створити масив з 10 елементів числового, стрічкового і булевого типу
// За допомогою if та typeof вивести тільки рядкові елементи
// let arr=['kvfl',5,49398,NaN,5>7,'lndscl',873459,7492,false,9<2]
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if(typeof (arrElement) === "string"){
//         console.log(arrElement)
//     }
// }

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// let arr=[];
// arr[1]='fk';
// arr[0]=3849;
// arr[2]='mmm';
// arr[3]=false;
// arr[4]='hhh';
// arr[5]=89;
// arr[6]='felmcs';
// arr[7]=5>8;
// arr[8]='fk';
// arr[9]=false;

// Вивести в консоль всі його елементи в циклі.
// for(let i of arr){
//     console.log(i)
// }

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i=0; i<=10; i++){
//     console.log(i)
//     document.write(i)
// }

//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i =0; i<=100; i++){
//     console.log(i)
//     document.write(`<div>${i}; </div> `)
// }

//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for(let i=0; i<101; i+=2){
//     console.log(i)
//     document.write(`<div>${i}; </div>`)
// }

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for(let i=0; i<101; i++){
//     if(i%2===0){
//     console.log(i)
//     document.write(`<div>${i}; </div>`)
// }}

//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for(let i=0; i<101; i++){if(i%2!==0){
//     console.log(i)
//     document.write(`<div>${i}; </div>`)
// }}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// let books = [{title: 'evening ljemamk', pageCount: 50, genre: 'horrovdml ', authors: ['Loo']},
//     {title: 'my trg ms', pageCount: 30, genre: 'adv vdv мам', authors: ['Loo', 'Jo']},
//     {title: 'napoleongnrkj', pageCount: 100, genre: 'history g', authors: ['Loo', 'Jo', 'Ben']}]

// -знайти наібльшу книжку.
// let a = books[0];
// for (const book of books) {
//  if(book.pageCount>a.pageCount){
// a=book
//   console.log(book.title)
//  }
// }

//- знайти книжку/ки з найдовшою назвою
// let a = books[0];
// for (let book of books) {
//     if (
//        book.title.length >a.title.length
//     ) {
// a=book
//         console.log(book.title)
//     }
//
// }

//- знайти книжку/ки з найбільшою кількістю жанрів
// let a = books[0];
// for (const book of books) {
//     if (book.genre.length > a.genre.length) {
//         a=book
//         console.log(book.title)
//     }
//
// }

//знайти книжку/ки які писали 2 автори
// let a = books[0];
// for (const book of books) {
//     if (book.authors.length === 2) {
//         a = book;
//         console.log(book.title)
//     }
// }

//- знайти книжку/ки які писав 1 автор
// let a =books[0];
// for(let book of books){
//     if(book.authors.length===1){
//         a=book;
//         console.log(book.title)
//     }
// }






