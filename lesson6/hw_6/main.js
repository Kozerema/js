//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
// console.log('hello world'.length);
// console.log('lorem ipsum'.length);
// console.log('javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// console.log('hello world'.toUpperCase());
// console.log('lorem ipsum'.toUpperCase());
// console.log('javascript is cool'.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log('HELLO WORLD'.toLowerCase());
// console.log('LOREM IPSUM'.toLowerCase());
// console.log('JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let stringToarray=(str)=>str.split(' ')
// console.log(stringToarray('Ревуть воли як ясла повні'))

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//  let arr=[10,8,-7,55,987,-1011,0,1050,0];
// console.log(arr.map(value => (value.toString())));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
 //sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
// function arr(array,direction){
//     if(direction===1){
//         array.sort((a, b) => a-b)
//     }else if(direction===-1){
//         array.sort((a,b) => b-a)
//     }else{
//         console.log('error');
//     }
//     return array
// }
//
// console.log(arr(nums, -1));

//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let coursesAndDurationArray = [
//      {title: 'JavaScript Complex', monthDuration: 5},
//      {title: 'Java Complex', monthDuration: 6},
//      {title: 'Python Complex', monthDuration: 6},
//      {title: 'QA Complex', monthDuration: 4},
//      {title: 'FullStack', monthDuration: 7},
//      {title: 'Frontend', monthDuration: 4}
//  ];
// console.log(coursesAndDurationArray.sort((a, b) =>
//     b.monthDuration - a.monthDuration));
//
// console.log(coursesAndDurationArray.filter((item) => item.monthDuration > 5));

//  описати колоду карт
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
//
// let deck = [
//     {cardSuit:'Spade', value: 6, color:'Black'},
//     {cardSuit:'Clubs', value: 6, color:'Black'},
//     {cardSuit:'Hearts', value: 6, color:'Red'},
//     {cardSuit:'Diamonds', value: 6, color:'Red'},
//     {cardSuit:'Spade', value: 7, color:'Black'},
//     {cardSuit:'Clubs', value: 7, color:'Black'},
//     {cardSuit:'Hearts', value: 7, color:'Red'},
//     {cardSuit:'Diamonds', value: 7, color:'Red'},
//     {cardSuit:'Spade', value: 8, color:'Black'},
//     {cardSuit:'Clubs', value: 8, color:'Black'},
//     {cardSuit:'Hearts', value: 8, color:'Red'},
//     {cardSuit:'Diamonds', value: 8, color:'Red'},
//     {cardSuit:'Spade', value: 9, color:'Black'},
//     {cardSuit:'Clubs', value: 9, color:'Black'},
//     {cardSuit:'Hearts', value: 9, color:'Red'},
//     {cardSuit:'Diamonds', value: 9, color:'Red'},
//     {cardSuit:'Spade', value: 10, color:'Black'},
//     {cardSuit:'Clubs', value: 10, color:'Black'},
//     {cardSuit:'Hearts', value: 10, color:'Red'},
//     {cardSuit:'Diamonds', value: 10, color:'Red'},
//     {cardSuit:'Spade', value: 'Jack', color:'Black'},
//     {cardSuit:'Clubs', value: 'Jack', color:'Black'},
//     {cardSuit:'Hearts', value: 'Jack', color:'Red'},
//     {cardSuit:'Diamonds', value: 'Jack', color:'Red'},
//     {cardSuit:'Spade', value: 'Queen', color:'Black'},
//     {cardSuit:'Clubs', value: 'Queen', color:'Black'},
//     {cardSuit:'Hearts', value: 'Queen', color:'Red'},
//     {cardSuit:'Diamonds', value: 'Queen', color:'Red'},
//     {cardSuit:'Spade', value: 'King', color:'Black'},
//     {cardSuit:'Clubs', value: 'King', color:'Black'},
//     {cardSuit:'Hearts', value: 'King', color:'Red'},
//     {cardSuit:'Diamonds', value: 'King', color:'Red'},
//     {cardSuit:'Spade', value: 'Ace', color:'Black'},
//     {cardSuit:'Clubs', value: 'Ace', color:'Black'},
//     {cardSuit:'Hearts', value: 'Ace', color:'Red'},
//     {cardSuit:'Diamonds', value: 'Ace', color:'Red'}
// ];
// console.log(deck.filter(value => value.cardSuit === "Spade" && value.value === 'Ace'));
// console.log(deck.filter(value => value.value === 6));
// console.log(deck.filter(value => value.color === 'Red'));
// console.log(deck.filter(value => value.cardSuit === 'Diamonds'));
// console.log(deck.filter((value, index) => value.cardSuit === 'Clubs' && index>12 ))
//
// let result=deck.reduce((acc, Suit) => {
//     if(Suit.cardSuit==='Diamonds'){
//         acc.Diamonds.push(Suit)
//     }else if(Suit.cardSuit==='Clubs'){
//         acc.Clubs.push(Suit)
//     }else if(Suit.cardSuit==='Hearts'){
//         acc.Hearts.push(Suit)
//     }else if(Suit.cardSuit==='Spade'){
//         acc.Spade.push(Suit)
//     }
//     return acc
// },{Spade:[],
//     Clubs:[],
//     Hearts:[],
//     Diamonds:[]})
// console.log(result);



