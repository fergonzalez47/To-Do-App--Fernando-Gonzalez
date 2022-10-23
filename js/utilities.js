import {
    listUl,
    checkboxList,
    toDoList
} from "./localStorage.js";

export function displayCompleted() {
    const arrayFromtaskList = GetFromLocalStorage("toDoList");
    const ListLi = listUl.getElementsByTagName("li");
    const ListLiArray = Array.from(ListLi);
    
    for (let i = 0; i < arrayFromtaskList.length; i++) {
        if (arrayFromtaskList[i].completed == false) {
            ListLiArray[i].classList.add('hidden');
        
    }
    }
}

export function displayActive() {
    const arrayFromtaskList = GetFromLocalStorage("toDoList");
    const ListLi = listUl.getElementsByTagName("li");
    const ListLiArray = Array.from(ListLi);
    
    for (let i = 0; i < arrayFromtaskList.length; i++) {
        if (arrayFromtaskList[i].completed == true) {
            ListLiArray[i].classList.add('hidden');
        
    }
    }
}

export function displayAll() {;
    const ListLi = listUl.getElementsByTagName("li");
    const ListLiArray = Array.from(ListLi);
    
    for (let i = 0; i < ListLiArray.length; i++) {
        if (ListLiArray[i].classList.contains("hidden")) {
            ListLiArray[i].classList.remove("hidden");
        
    }
    }
}

export function checkCompleted() {

    const todoList = GetFromLocalStorage("toDoList");
    const arrayBoxes = GetArrayBoxes();

    arrayBoxes.forEach(box => {
        box.addEventListener("change", (e) => {
            if (box.checked) {
                const i = arrayBoxes.indexOf(box);
                todoList[i].completed = true;
                LinedElement(i,todoList);
                



            } else if (box.checked == false) {
                const i = arrayBoxes.indexOf(box);
                todoList[i].completed = false;
                LinedElement(i,todoList);
                
            }
        })

    });
}


export function LinedElement(itemIndex, TDList) {
    const listLi = listUl.getElementsByTagName("li");
    //const verify = GetFromLocalStorage("toDoList");
    if (TDList[itemIndex].completed === true) {
        listLi[itemIndex].classList.add('lined');
        WriteInLocalStorage("toDoList", TDList);
    } else {
        listLi[itemIndex].classList.remove('lined');
        WriteInLocalStorage("toDoList", TDList);
        
    }



}



export function WriteInLocalStorage(keyName ,data) {
    localStorage.setItem(keyName, JSON.stringify(data));
}

export function GetFromLocalStorage(data) {
    return JSON.parse(localStorage.getItem(data));
}

export function RemovefromLocaStorage(data) {
    return
}

export function GetArrayBoxes() {
    return [...checkboxList];
}