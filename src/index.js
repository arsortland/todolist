import "./style.css";
import { createSidebar } from "./dom";

/**
 * Make each project an array
 * each array contains the todos
 * list all todos in mainarea of selected project
 */

const toDo = (name) => {};

const addToDo = () => {
  const mainarea = document.querySelector(".mainarea");
  const tododiv = document.createElement("div");
  const form = document.createElement("form");
  const inputname = document.createElement("input");
  inputname.setAttribute("type", "text");
  inputname.setAttribute("placeholder", "New todo");
  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Add ToDo");
  const date = document.createElement("input");
  date.setAttribute("type", "date");

  const checkboxdiv = document.createElement("div");

  const label = document.createElement("label");
  label.setAttribute("for", "done");
  label.textContent = "Done";
  const done = document.createElement("input");
  done.setAttribute("type", "checkbox");
  done.setAttribute("name", "done");
  checkboxdiv.append(label, done);

  form.append(inputname, date, checkboxdiv, submit);
  tododiv.append(form);
  mainarea.appendChild(tododiv);
};

addToDo();
