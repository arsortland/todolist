import "./style.css";

const projects = [];

const createSidebar = (() => {
  const makenew = document.querySelector(".makenew");
  const inputnew = document.createElement("input");
  const submitnew = document.createElement("button");

  inputnew.setAttribute("type", "text");
  inputnew.setAttribute("required", "");
  submitnew.textContent = "Add Project";
  inputnew.classList.add("inputnew");
  submitnew.classList.add("submitnew");
  makenew.appendChild(inputnew);
  makenew.appendChild(submitnew);
})();

const createProject = (() => {
  const newproject = document.querySelector(".inputnew");
  const submit = document.querySelector(".submitnew");
  submit.addEventListener("click", () => {
    //Sett opp slik at det ikke går hvis dette fieldet er tomt
    projects.push(newproject.value);
    // console.log(projects);
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
      console.log(project.innerHTML);
      const currproject = document.createElement("div");
      currproject.textContent = project.innerHTML;
      mainarea.appendChild(currproject);
    });
  });
};

listProjects();

/**
 * Make each project an array
 * each array contains the todos
 * list all todos in mainarea of selected project
 */
