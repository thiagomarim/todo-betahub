const form = document.getElementById("taskForm");
const input = document.querySelector("input");
const button = document.querySelector("button");

const containerTasks = document.getElementById("tarefas-container");

form.onsubmit = (event) => {
  event.preventDefault();

  let inputValue = input.value;

  onSubmitValue(inputValue);
};

function onSubmitValue(value) {
  const containerList = document.createElement("div");
  containerList.classList.add("card-tarefa");

  const circleIcon = document.createElement("img");
  circleIcon.setAttribute("src", "assets/circle-icon.svg");
  circleIcon.setAttribute("alt", "Icone de um circulo");

  circleIcon.addEventListener("click", () => {
    circleIcon.setAttribute("src", "assets/check-icon.svg");
    containerList.classList.remove("card-tarefa");
    containerList.classList.add("card-tarefa-checked");
  });

  const containerItem = document.createElement("p");
  containerItem.classList.add("tarefa");
  containerItem.innerText = value;

  const trashIcon = document.createElement("img");
  trashIcon.setAttribute("src", "assets/delete-icon.svg");
  trashIcon.setAttribute("alt", "Icone de uma lixeira");

  trashIcon.addEventListener("click", () => {
    containerList.remove();
  });

  containerList.append(circleIcon, containerItem, trashIcon);
  containerTasks.append(containerList);
}
