import "./style.css";

const projects = [["General"]];

const addProject = (name) => {
  //eventlistener and use this function to add the content of input (outside this function)
  projects.push([name]);
};
//DOM
const listView = () => {
  const listexisting = document.querySelector(".listexisting");
  listexisting.textContent = ""; //Clears entire area each time.
  const newform = document.createElement("form");
  newform.setAttribute("onsubmit", "return false;");
  listexisting.appendChild(newform);

  for (let i = 0; i < projects.length; i++) {
    const newdiv = document.createElement("div");
    const button = document.createElement("button");
    button.classList.add("projectname");
    button.textContent = projects[i][0];
    newform.append(newdiv, button);
  }
};
//DOM
const createProject = (() => {
  const inputfield = document.querySelector(".newproject");
  const submit = document.querySelector(".submitproject");
  submit.addEventListener("click", () => {
    if (inputfield.value != "") {
      addProject(inputfield.value); //adds the inputfield to projectarray
      listView(); // makes the list again of projects in array
      inputfield.value = "";
    } else {
      return;
    }
  });
})();

const addToDo = (name) => {
  //Need to be implemented at "X" in each project [][X]
  return { name };
};
const addToDoDOM = () => {};

const listProjectToDo = (() => {
  //function here
  const mainarea = document.querySelector(".mainarea");
  // mainarea.textContent = projects[0][0];
})();

const onPageLoad = (() => {
  listView();
})();

//Make it so that the projects first index (the name) is shown as the header
//in the mainarea, then the rest of the project are listed as objects beneath.
//Take date and prio last, use same logic as listview function.
