//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = +prompt('Ведіть числове значення');
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Не вірно');
// };

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години
// let time=15;
// if (time>=0&&time<16){
//     console.log('1 чверть')
// }else if(time>=16&&time<31){
//     console.log('2 чверть')
// }else if(time>=31&&time<46){
//     console.log('3 чверть')
// }else if(time>=46&&time<60){
//     console.log('4 чверть')
// }else {
//     console.log(' Введіть коректне значення');
// }

//Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// switch (6) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sanday');
//         break;
//     default:
//         console.log(' Введіть значення від 1 до 7');
// }

// Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
// let y=5;
// let z=7;
// if (y>z){
//     console.log(y)
// }else if(z>y){
//     console.log(z)
// }else if(z===y){
//     console.log(z)
// }else {console.log(' Введіть коректні значення');}


//У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = 15;
// day >= 1 && day <= 10 ? console.log('first') : day >= 11 && day <= 20 ? console.log('second') : day >= 21 && day <= 31 ? console.log('third') : console.log('error');

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
// let x=+prompt()||'default';
// console.log(x);
//or
// let x='';
// if (!!x ==false) //прирівнюю до bool; ! - ні, !!- прирівняння до bool
// {
//     console.log('default');
// } else {
//     console.log('heloo');
// }
//
// //or
//
// let x='';
// if (!x !==false) //
// {
//     console.log('default');
// } else {
//     console.log('heloo');
// }
//
//
// //or
//
// let x =4;
// if (x) //прирівнюю до bool ! - ні, !!- прирівняння до bool
// {
//     console.log('hello');
// } else {
//     console.log('default');
// }
