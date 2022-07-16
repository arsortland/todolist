export const createSidebar = () => {
  const makenew = document.querySelector(".makenew");
  const inputnew = document.createElement("input");
  const submitnew = document.createElement("submit");

  inputnew.setAttribute("type", "text");
  makenew.appendChild(inputnew);
};
