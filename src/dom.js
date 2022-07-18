const projects = [];

export const createSidebar = (() => {
  const form = document.querySelector(".form");
  const inputnew = document.createElement("input");
  const submitnew = document.createElement("button");

  inputnew.setAttribute("type", "text");
  submitnew.textContent = "Add Project";
  inputnew.classList.add("inputnew");
  submitnew.classList.add("submitnew");
  form.appendChild(inputnew);
  form.appendChild(submitnew);
})();

export const createProject = (() => {
  const newproject = document.querySelector(".inputnew");
  const submit = document.querySelector(".submitnew");
  submit.addEventListener("click", () => {
    //Sett opp slik at det ikke går hvis dette fieldet er tomt
    projects.push(newproject.value);
    listProjects();
  });
})();

// const defaultProject = (() => {
//   const listexisting = document.querySelector(".form");
//   let general = document.createElement("div");
//   general.textContent = "General";
//   listexisting.appendChild(general);
// })();

export const listProjects = () => {
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

export const showProject = () => {
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
