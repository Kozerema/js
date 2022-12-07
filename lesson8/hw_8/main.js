// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User (id, name, surname, email, phone){
//     this.id= id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }
// let users=[user1= new User(1,'olia','hhhh','jkck',9654),
//  user2= new User(9,'olia','hhhh','jkck',9654),
//  user3= new User(3,'olia','hhhh','jkck',9654),
//  user4= new User(2,'olia','hhhh','jkck',9654),
//  user5= new User(5,'olia','hhhh','jkck',9654),
//  user6= new User(6,'olia','hhhh','jkck',9654),
//  user7= new User(7,'olia','hhhh','jkck',9654),
//  user8= new User(4,'olia','hhhh','jkck',9654),
//  user9= new User(8,'olia','hhhh','jkck',9654),
//  user10= new User(10,'olia','hhhh','jkck',9654)];
//  usersNew=[];
// usersNew.push(users);
// console.log(users)
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// //
// console.log(users.filter(value => value.id % 2 === 0));
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// //
// console.log(users.sort((a, b) => a.id - b.id));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let client1 = new Client(1, 'olia', 'hhhh', 'jkck', 965, ['sofa', 'door','window']);
// let client2 = new Client(9, 'olia', 'hhhh', 'jkck', 9654, ['sofa', 'door','window','table']);
// let client3 = new Client(3, 'olia', 'hhhh', 'jkck', 9654, ['sofa', 'door','window','table','shower']);
// let client4 = new Client(2, 'olia', 'hhhh', 'jkck', 9654, ['sofa', 'door','window','table','shower','bad']);
// let client5 = new Client(5, 'olia', 'hhhh', 'jkck', 9654, ['sofa', 'door']);
// let client6 = new Client(6, 'olia', 'hhhh', 'jkck', 9654, ['sofa', 'door','window','table','shower']);
// let client7 = new Client(7, 'olia', 'hhhh', 'jkck', 9654, ['sofa', 'door','window','table','shower','bad','picture','mirror']);
// let client8 = new Client(4, 'olia', 'hhhh', 'jkck', 9654, ['sofa', 'door','window']);
// let client9 = new Client(8, 'olia', 'hhhh', 'jkck', 9654, ['sofa', 'door','window','table','shower','bad','picture']);
// let client10 = new Client(9, 'olia', 'hhhh', 'jkck', 9654, ['sofa', 'door','window','table','shower','bad']);
// let clientsNew = [];
// clientsNew.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
// console.log(clientsNew);
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let clientsSort= clientsNew.sort((a, b) =>{
// if(a.order.length>b.order.length){
//     return 1
// }else if (a.order.length<b.order.length){
//     return -1
// }else if (a.order.length=b.order.length){
//     return 0
// }}
// )
// console.log(clientsSort)


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info() - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, manufacturer, yearOfManufacture, maximumSpeed, enginCapacity) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.yearOfManufacture = yearOfManufacture;
//     this.maximumSpeed = maximumSpeed;
//     this.enginCapacity = enginCapacity;
//     this.drive=function (){
//     console.log(`їдемо зі швидкістю ${this.maximumSpeed} на гоину`)};
//     this.info=function (){
//         for (const argumentsKey in this) {
//             if(typeof this[argumentsKey]!=='function'){
//                 console.log(`${argumentsKey}:${this[argumentsKey]}`)
//             }
//         }
//         }
//
//     this.increaseMaxSpeed=function (newSpeed){
//         this.maximumSpeed +=newSpeed
//         return newSpeed
//     }
//  this.changeYear=function (newValue){
//         this.yearOfManufacture=newValue;
//         return newValue
//  }
//  this.addDriver=function (driver){
//      this.driver=driver;
//  }
//
// }
// let car1= new Car('bmw','Dermany',2007,260,3)
// console.log(car1);
// car1.drive()
// car1.info()
// car1.increaseMaxSpeed(50)
// car1.changeYear(1999)
// car1.addDriver('Petro')
// console.log(car1)


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, manufacturer, yearOfManufacture, maximumSpeed, enginCapacity) {
//
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.yearOfManufacture = yearOfManufacture;
//         this.maximumSpeed = maximumSpeed;
//         this.enginCapacity = enginCapacity;}
//         drive () {
//             console.log(`їдемо зі швидкістю ${this.maximumSpeed} на гоину`)
//         };
//         info () {
//             for (const argumentsKey in this) {
//                 if (typeof this[argumentsKey] !== 'function') {
//                     console.log(`${argumentsKey}:${this[argumentsKey]}`)
//                 }
//             }
//         }
//
//         increaseMaxSpeed (newSpeed) {
//             this.maximumSpeed += newSpeed
//             return newSpeed
//         }
//         changeYear(newValue) {
//             this.yearOfManufacture = newValue;
//             return newValue
//         }
//         addDriver (driver) {
//             this.driver = driver;
//         }
//
// }
// let car1= new Car('bmw','Dermany',2007,260,3)
// console.log(car1);
// car1.drive()
// car1.info()
// car1.increaseMaxSpeed(50)
// car1.changeYear(1999)
// car1.addDriver('Petro')
// console.log(car1)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
// function Girl (name, age, foodSize){
//     this.name=name;
//     this.age=age;
//     this.foodSize=foodSize;
// }
// let girls=[
//     girl1= new Girl('Sonia',22,36),
//     girl2= new Girl('Lisa',24,37),
//     girl3= new Girl('Tania',26,38),
//     girl4= new Girl('Mania',27,39),
//     girl5= new Girl('Lilia',29,37),
//     girl6= new Girl('Mia',21,37,7),
//     girl7= new Girl('Soia',29,38,7),
//     girl8= new Girl('Halia',28,40),
//     girl9= new Girl('Roksolana',22,34),
//     girl10= new Girl('Nadia',21,39,2)]
//
// class Boy{
//     constructor(name, age, foodSize) {
//         this.name=name;
//         this.age=age;
//         this.foodSize=foodSize;
//     }
// }
// let boy= new Boy('Leo',29,36);
//
// let couple=function (girls,boy){
//     for (const girl of girls) {
//        if(girl.foodSize===boy.foodSize){
//            console.log(`${girl.name}+${boy.name}`)
//        }
//
//     }
// }
// couple(girls,boy)
// // Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// function findGirl(array,callback){
//     let findArr=[];
//     for (const arrayElement of array) {
//       if(  callback(arrayElement)){
//           findArr.push(arrayElement)
//       }
//     }
//    return findArr
// }
//
// console.log(findGirl(girls, (girl) => girl.foodSize === boy.foodSize));