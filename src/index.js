import "./style.css";

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
  const projects = [];
  const newproject = document.querySelector(".inputnew");
  const submit = document.querySelector(".submitnew");
  submit.addEventListener("click", () => {
    console.log("HEI");
    //Sett opp slik at det ikke går hvis dette fieldet er tomt
    console.log(newproject.value);
    projects.push(newproject.value);
    console.log(projects);
  });
})();

// createSidebar();
// createProject();
