import { checkCompleted, WriteInLocalStorage, GetFromLocalStorage , LinedElement, GetArrayBoxes} from "./utilities.js";

const btn = document.getElementById("btn");
const todoInput = document.getElementById("todo-input");
export const listUl = document.getElementById("RenderList");
export const checkboxList = document.getElementsByName("tasks");
export const btnCompleted = document.getElementById("items-completed");
export const btnActive = document.getElementById("items-active");
export const btnShowAll = document.getElementById("items-all");
export const ShowItems = document.getElementById("Show-Items");



export const toDoList = [];


export function KnowingItems(amount) {
    ShowItems.innerHTML = `There are ${amount} Items`;
}

export function returnTodoList() {
    return toDoList;
}

/*what this function does is receive the value that is in the input*/ 

export function getTask() {
    if (todoInput.value === '' || todoInput.value.length < 2) {
        console.log("ESTA VACIO");
    } else {
        CreateToDo();
        checkCompleted();
        
    }
}


//this function is called by the previous function; what it does is create a new object inside the TODO array

export function CreateToDo() {

    //const RevoveryArray = GetFromLocalStorage("toDoList");

    const moment = new Date();
    const todo = { id : moment.getTime(), content: todoInput.value, completed: false};
   //toDoList.push(todo);

    if (GetFromLocalStorage("toDoList")) {
        const toDoListExisting = GetFromLocalStorage("toDoList");
        toDoListExisting.push(todo);
        WriteInLocalStorage("toDoList" ,toDoListExisting);
    } else {
        toDoList.push(todo);
        WriteInLocalStorage("toDoList" ,toDoList);
    }
    
    


        /*Next, a call is made to the function that displays the list of Items; but, one of 
    the parameters is the list of objects; however, it is passed to a Json file 
    first and saved to LocalStorage */


    showListToDo(listUl);
    



}

export function CreateTodoLi(item) {
    const itemLi = document.createElement('li');
    itemLi.innerHTML = `<input type="checkbox" name="tasks" class="task"> ${item.content}
    <button class="removeItem" type="button">X</button>`;
    return itemLi;
    

}


export function showListToDo(parent = listUl) {
    if (GetFromLocalStorage("toDoList")) {
        parent.innerHTML = "";

        //The following variable receives the parameter that was passed to it
        // (the list) and converts it from a Json file to a Javascript object in 
        //order to work with it.
    
        const objectsInList = GetFromLocalStorage("toDoList");
    
        for (let i = 0; i < objectsInList.length; i++) {
            const element = objectsInList[i];
            parent.appendChild(CreateTodoLi(element));
            LinedElement(i, objectsInList);

        } 
        const CheckBoxes = document.querySelectorAll( 'input[type=checkbox]' );
        KnowingItems(objectsInList.length);
        
        for (let i = 0; i < objectsInList.length; i++) {
            const element = objectsInList[i];
            if (element.completed == true) {
                CheckBoxes[i].checked = true;
            }
            
        }
    } else {
        parent.innerHTML = "The is no data to show.";
    }

}




btn.addEventListener("click", getTask);
showListToDo(listUl);
checkCompleted();