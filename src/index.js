import "./style.css";

const addtodofactory = (name, prio, date, desc) => {
  return { name, prio, date, desc };
};

const test1 = addtodofactory("test", "noe1", "noe1", "noe1");
const test2 = addtodofactory("test", "noe2", "noe2", "noe2");

const projects = [];
projects.push(test1, test2);

console.log(projects);
