import "./style.css";
import { createSidebar } from "./dom";

const projects = [];

const createProject = (() => {
  const newproject = document.querySelector(".inputnew");
  const submit = document.querySelector(".submitnew");
  submit.addEventListener("click", () => {
    //Sett opp slik at det ikke går hvis dette fieldet er tomt
    projects.push(newproject.value);
    listProjects();
  });
})();

const defaultProject = (() => {
  const listexisting = document.querySelector(".makenew");
  let general = document.createElement("div");
  general.textContent = "General";
  listexisting.appendChild(general);
})();

const listProjects = () => {
  const listexisting = document.querySelector(".listexisting");
  listexisting.textContent = "";
  for (let val of projects) {
    //Create a div template here with more elements for the todo? Like a form maybe?
    let newdiv = document.createElement("button");
    newdiv.classList.add("aproject");
    newdiv.textContent = val;
    listexisting.appendChild(newdiv);
  }
  showProject();
};

const showProject = () => {
  const allProjects = document.querySelectorAll(".aproject");
  const mainarea = document.querySelector(".mainarea");
  allProjects.forEach((project) => {
    project.addEventListener("click", () => {
      mainarea.innerHTML = "";
      console.log(project.innerHTML);
      const currproject = document.createElement("div");
      currproject.textContent = project.innerHTML;
      mainarea.appendChild(currproject);
    });
  });
};

/**
 * Make each project an array
 * each array contains the todos
 * list all todos in mainarea of selected project
 */
