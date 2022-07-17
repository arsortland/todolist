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
    console.log(projects);
  });
})();

const listProjects = () => {
  //   for (let val in projects) {
  //     console.log("Her:" + val);
  //   }
  for (let i = 0; i < projects.length; i++) {
    console.log(projects[i]);
  }
};

listProjects();
