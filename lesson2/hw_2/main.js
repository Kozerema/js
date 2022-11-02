//Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [155, 3.14, 100, false, true, 'yes', 'no', 2000, 20, 'why'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
console.log(arr.length);
//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {title: 'evening', pageCount: 50, genre: 'horror'};
console.log(book1);
let book2 = {title: 'my travelling', pageCount: 30, genre: 'adventure'};
console.log(book2);
let book3 = {title: 'napoleon', pageCount: 100, genre: 'history'};
console.log(book3);
//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age
let book4 = {title: 'John and Lisa', pageCount: 550, genre: 'novel'};
let book5 = {title: 'princess', pageCount: 20, genre: 'tale'};
let book6 = {title: 'joke', pageCount: 150, genre:'comedy',author:[{name:'Will',age:18}]};
book4.author=[{name:'Lisa',age:26}];
book5.author=[{name:'Tom',age:30}];
console.log(book4);
console.log(book5);
console.log(book6);
//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let customers=[{name:'John',username:'Nelson',password:3747493},
    {name:'Emmy',username:'Mitchel',password:4654937},
    {name:'Bonny',username:'Martins',password:4663435},
    {name:'Lyy',username:'Poter',password:6760000},
    {name:'lily',username:'Danwer',password:9012702},
    {name:'Robert',username:'Hurington',password:4878340},
    {name:'Sam',username:'Damer',password:3479843},
    {name:'Rob',username:'Wilson',password:3450990},
    {name:'Monica',username:'Martin',password:9203402},
    {name:'March',username:'Lengdon',password:483679}];
console.log(customers[0].password);
console.log(customers[1].password);
console.log(customers[2].password);
console.log(customers[3].password);
console.log(customers[4].password);
console.log(customers[5].password);
console.log(customers[6].password);
console.log(customers[7].password);
console.log(customers[8].password);
console.log(customers[9].password);
