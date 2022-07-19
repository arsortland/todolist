import "./style.css";

const projects = [["General"]];

const addToDo = (name) => {
  //Need to be implemented at "X" in each project [][X]
  return { name };
};

const projectEvent = (() => {
  const inputfield = document.querySelector(".newtodo");
  const submit = document.querySelector(".submittodo");
  submit.addEventListener("click", () => {
    // console.log(inputfield.value);
    addProject(inputfield.value);
    listView(); // makes the list again
  });
})();

const addProject = (name) => {
  //eventlistener and use this function to add the content of input (outside this function)
  projects.push([name]);
};

const listProject = () => {
  //function here
};

const listView = () => {
  const listexisting = document.querySelector(".listexisting");
  listexisting.textContent = ""; //Clears entire area each time.
  const newform = document.createElement("form");
  listexisting.appendChild(newform);

  for (let i = 0; i < projects.length; i++) {
    const newdiv = document.createElement("div");
    const button = document.createElement("button");
    button.textContent = projects[i][0];
    newform.append(newdiv, button);
  }
};

listView();

//Make it so that the projects first index (the name) is shown as the header
//in the mainarea, then the rest of the project are listed as objects beneath.
//Take date and prio last, use same logic as listview function.
