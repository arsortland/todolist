export const createSidebar = (() => {
  const makenew = document.querySelector(".makenew");
  const inputnew = document.createElement("input");
  const submitnew = document.createElement("button");

  inputnew.setAttribute("type", "text");
  submitnew.textContent = "Add Project";
  inputnew.classList.add("inputnew");
  submitnew.classList.add("submitnew");
  makenew.appendChild(inputnew);
  makenew.appendChild(submitnew);
})();
