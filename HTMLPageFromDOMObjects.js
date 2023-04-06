(function () {

    function createTitle(name){
        let title = document.createElement('h2');
        title.textContent = name;
        return title;
    }

    function createToDoDiv(){

        let form = document.createElement('form');
        
        let input = document.createElement('input');
        let button = document.createElement('button');
        let div = document.createElement('div');    
        button.textContent = 'Добавить дело'

        
        div.append(button);
        form.append(input);
        form.append(div);

        return{
            form, 
            input,
            div,
        };
    }

    function createToDoList(){
        let ul = document.createElement('ul');
        return ul;
    }

    function createToDoItem(title){

        item = document.createElement('li');
      
        buttonTrue = document.createElement('button');
        buttonTrue.textContent = 'Сделано'

        buttonFalse = document.createElement('button');
        buttonFalse.textContent = 'Удолить'

        span = document.createElement('span');

        div = document.createElement('div');

        span.textContent = title;
        div.append(span);
        div.append(buttonTrue);
        div.append(buttonFalse);
        

        item.append(div);

        return{
            item,
            buttonTrue,
            buttonFalse,

        }
    };

    document.addEventListener('DOMContentLoaded', function(){

        let container = document.getElementById('todo-list');

        let title = createTitle('Title');
        let toDoItemForm = createToDoDiv();
        let list = createToDoList();

        container.append(title);
        container.append(toDoItemForm.form);
        container.append(list);

       

        toDoItemForm.form.addEventListener('submit',function(e){

            e.preventDefault();

            if(!toDoItemForm.input.value){
                return;
            }

            let toDoItem = createToDoItem(toDoItemForm.input.value);

            toDoItem.buttonTrue.addEventListener('click',function(){
                console.log('true');
            });

            toDoItem.buttonFalse.addEventListener('click',function(){
              confirm('Are you sure about it?')
            });

            list.append(toDoItem.item);
            
            toDoItemForm.input.value = '';
        })

    })


}());

