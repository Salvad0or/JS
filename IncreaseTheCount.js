

document.addEventListener('DOMContentLoaded', function(){
    let input = document.querySelector('.input_color');
    let button = document.querySelector('.butClas');
    let div = document.querySelector('.divv');

    function func(){
        div.style.backgroundColor = 'black';
    }

    button.addEventListener('click',func);

});

