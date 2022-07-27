import "./style.css";

const projects = [];
const inbox = [];
const mainarea = document.querySelector(".mainarea");
const sidebar = document.querySelector(".sidebar");
const topbar = document.querySelector(".topbar");

//DOM
const showProjectHeader = (name) => {
  //Create the header
  const projectname = document.createElement("div");
  projectname.classList.add(".projectname");
  projectname.textContent = name;
  //Create the add button
  const addNewTodo = document.createElement("button");
  addNewTodo.classList.add("addnewtodobtn");
  addNewTodo.textContent = "+";
  //Adding the project name as value
  addNewTodo.value = name;
  //Adding the DOM to mainarea
  projectname.appendChild(addNewTodo);
  mainarea.appendChild(projectname);
};

//Loading into project on new pageload using a Module
const onWindowLoad = (() => {
  showProjectHeader("Inbox");
})();

//Logic
const todoFactory = (project, name, prio, date, desc) => {
  projects.push(project);
  return { project, name, prio, date, desc };
};

const createToDoForm = () => {
  const form = document.createElement("form");
  const name = document.createElement("input");
  name.setAttribute("type", "text");
  //Prio as selection
  //date as date
  //desc as textarea
  //Make it a modal using no HTML?
};

const addToDoToProject = () => {
  const addnewtodobtn = document.querySelector(".addnewtodobtn");
  addnewtodobtn.onclick = function () {
    //function that displays modal/form
  };
};

// const showTodo () => {

// }
// const showProjectToDo = () => {
//   for (let i = 0; i < projects.length; i++) {
//     if (projects[i].project == "PROSJEKTNAVN") {
//       //kjør funksjon? Display alle todos
//       showTodo();
//     }
//   }
// };
