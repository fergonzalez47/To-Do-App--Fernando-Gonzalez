import {listUl, getTask, CreateToDo, btnCompleted , btnActive,  toDoList, btnShowAll, } from "./localStorage.js";
import {displayCompleted, displayActive, displayAll} from "./utilities.js";

btnCompleted.addEventListener("click", displayCompleted);
btnActive.addEventListener("click", displayActive);
btnShowAll.addEventListener("click", displayAll);