// массивы
//#region 

let mass = ['aa','sdf'];

let empty = [];

empty.unshift('Добавить в начало массива')
empty.push('Добавить в конец массива')

let lenght = empty.length;


//#endregion

// переменные
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

// рандом
//#region 

let random = Math.random();

let random2 = Math.round(Math.random() * 100) // 1 - 100

let random3 = Math.round(Math.random() * (3 - 1) + 1); // 1 - 3

while (Math.random() > 0.3) {
    //do someshing
}

//#endregion

// тернарный оператор
//#region 

let tern = 1;

console.log(tern > 10 ? 'Да' : 'Нет');

{
    let flag = true;

    console.log(flag ? 'True' : 'False');
}

//#endregion

//функции
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

// функции полезные
//#region 

let str_
parseInt(str_) // парсим строку в инт

Number.isNaN(str_) // Проверит на NaN
Number.isFinite(str_) // Вернет true если поместили число 

//#endregion

// циклы
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