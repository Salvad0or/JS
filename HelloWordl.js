//<->Массивы
//#region 

let mass = ['aa','sdf'];

let empty = [];

empty.unshift('Добавить в начало массива')
empty.push('Добавить в конец массива')

let lenght = empty.length;


//#endregion

//<->Переменные
//#region 
let flag = true;

let x = 7;
let y = .7;
let z = 0.8;
let u = 8.;

let str = `hi`;
let str1 = "hi\n";
let str2 = 'hi';

//#endregion

//<->Объекты
//#region

//------------Syntacsis--------------
//#region 
let Alex = {
    name:'Sasha',
    age : 17,
    work : 'Sales-manager'
};

Alex.IsMarried = true; // взмахом крыла мы добавили новое св-во
delete Alex.age; // и так же легко удалили.

let name = Alex.name; // просто присвоили в переменную значения из объекта

let Swap = {}; // создание пустого объекта

let Test = {
    Date_ : {day: 28, month: 'March', year: 2023}
}

Test.Date_.day = 29; // Вот так создаются вложенные объекты. Считай класс в классе.

//#endregion

//------------Методы в объектах--------------
//#region 
{
    let Alex = {
        name : 'Alex',
        age: function(){
            return Math.random() * 56;
        }, // так работают методы, логика естественно норрмальная

        namePlusAge: function(){
            return 'Name:' + this.name + toString(this.age); // через ключевое слово this мы можем обращаться к свойствам объекта
        },

        shortMethod(){
            // укороченная версия метода
        }
        
    }

    // ДжаваСкриптеры называют функции внутри объектов - методами
}
//#endregion

//------------Смешивание объектов-------------
//#region 
{
    let fridge  = {
        top: 'Banana',
        bot: 'Apple'
    };

    let table = {
        onTable:'Water'
    };

    let pepole = {
        ...fridge,
        ...table,
    }

    pepole.onTable = 'Я не знаю почему я придумал такие свойства, кажется я устал просто после работы малям\nСуть в том, что мы берем все свойства из объектов и мешаем в новый';
}
//#endregion

//------------Перебор объектов-------------

{
    let Alex = {
        name: "sasha",
        age: 18,
        isMarried: true,
    };

    let values = Object.values(Alex);

    for (const value of values) {
        console.log(key); // все значения в свойствах объекта
    }

    let keys = Object.keys(Alex);

    for (const keys of object) {
        console.log(keys); // все ключи в объекте
    }

    let entires = Object.entries();

    for (const [key,value] of entires) {
        
        console.log(`Key: ${key}, Value: ${value}`) // Очень читаемо и классно
    };
}

//#endregion

//<->Рандом
//#region 

let random = Math.random();

let random2 = Math.round(Math.random() * 100) // 1 - 100

let random3 = Math.round(Math.random() * (3 - 1) + 1); // 1 - 3

while (Math.random() > 0.3) {
    //do someshing
}

//#endregion

//<->Тернарный оператор
//#region 

let tern = 1;

console.log(tern > 10 ? 'Да' : 'Нет');

{
    let flag = true;

    console.log(flag ? 'True' : 'False');
}

//#endregion

//<->Функции
//#region 

//------------Syntacsis--------------

function func(params) {
    // That is how does function look
}

//------------Cheats--------------

// Можно объявить функцию через переменную. Разница в том, что объявленная так функция не может быть вызвана откуда угодно в коде.
// А вот просто созданная функция может
// Пример :

let funcTest = function(){
    console.log('Hi');
}

func();
funcTest(); // вызываются одинаково

//------------Default--------------

function name(params = 'DefaultValue') {
    // Как в C# можно задать дефолтное значение в аргументе функции
}


//-----------Возвращяемые значения----------------


function ReturnFunction(x){
    x += 10;
    return x;

    // Вот так возвращяют значения из функции.
    // Указывать ничего не надо, всё в названии Функции.
}

//-----------Undefined----------------

//Если функция ничего не возвращяет, то она возвращяет undefined 
//Переменная которая пытается получить значение из функции которая ничего не возвращяет ей присвоится undefined
//Переменная которая созданная и которой не присвоено значение тоже undefined
//undefined это по сути дефолтное значение в JS

// https://doka.guide/js/undefined/#:~:text=Undefined%20%E2%80%94%20%D1%8D%D1%82%D0%BE%20%D0%BF%D1%80%D0%B8%D0%BC%D0%B8%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9%20%D1%82%D0%B8%D0%BF,%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%B5%20%D0%BD%D0%B5%20%D0%B1%D1%8B%D0%BB%D0%B8%20%D0%BF%D1%80%D0%BE%D0%B8%D0%BD%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D1%8B%20%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC 

{
    let mass = ['1','2','3'];

    console.log(mass[-1] === undefined) //true
    console.log(mass[1] === undefined) //false


}


//#endregion

//<->Функции полезные
//#region 

let str_
parseInt(str_) // парсим строку в инт

Number.isNaN(str_) // Проверит на NaN
Number.isFinite(str_) // Вернет true если поместили число 

Object.keys(Alex); // получить все названия свойств объекта в массив 
Object.values(Alex); // получить все значения свойств объекта в массив 
Object.entries(Alex); // получить и то, и то вместе в массив

let a = {
    a: 1,
    b: 2,
}

let clone = Object.assign({}, a); // копирует все свойства в объект clone

//#endregion

//<->Циклы
//#region 


for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

/// forOF (тот же Foreach из C#)
let mass2 = ['a','б','в'];
for (let iterator of mass2) {
    console.log(iterator);
}

/// forIN
let mass3 = ['1','2','3'];
for (const i in mass3) {
    
    // Переменная i принимает не значения mass3, а лишь индекс
}

while (condition) {
    //std
}

do {
    //std
} while (condition);

// continue and breake the same what  in C#

//#endregion

// <-> TypeOf

//#region 

console.log('TypeOf возвращяет тип объекта строкой');

{ 
    let x = 1;

    typeof x; // number

    typeof null; // object - исторически неверная тема, не проверяй на null через typeof

    // и так далее
}
//#endregion