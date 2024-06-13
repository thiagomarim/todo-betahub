// Seleciona os elementos
const form = document.getElementById("taskForm");
const input = document.querySelector("input");
const button = document.querySelector("button");

// Seleciona a div que tem os conteúdos das tarefas
const containerTasks = document.getElementById("tarefas-container");

// Adiciona um evento de submit, e pega o valor do input
form.onsubmit = (event) => {
  event.preventDefault();

  let inputValue = input.value;

  onSubmitValue(inputValue);
};

// Uma função que cria a card de tarefas
function onSubmitValue(value) {
  // Cria a div dos items de tarefas
  const containerList = document.createElement("div");
  containerList.classList.add("card-tarefa");

  // Adiciona o elemento de imagem com o icone de circulo dentro
  const circleIcon = document.createElement("img");
  circleIcon.setAttribute("src", "assets/circle-icon.svg");
  circleIcon.setAttribute("alt", "Icone de um circulo");

  // Ao clicar faz com que troque o icone de circulo para check
  circleIcon.addEventListener("click", () => {
    circleIcon.setAttribute("src", "assets/check-icon.svg");
    containerList.classList.remove("card-tarefa");
    containerList.classList.add("card-tarefa-checked");
  });

  // Adiciona o elemento de paragrafo com a tarefa escrita
  const containerItem = document.createElement("p");
  containerItem.classList.add("tarefa");
  // Substitui o valor do paragrafo pelo o valor que foi escrito no input
  containerItem.innerText = value;

  // Adiciona o elemento de imagem com o icone de lixeira dentro
  const trashIcon = document.createElement("img");
  trashIcon.setAttribute("src", "assets/delete-icon.svg");
  trashIcon.setAttribute("alt", "Icone de uma lixeira");

  // Adiciona um evento que remove o conteúdo por inteiro
  trashIcon.addEventListener("click", () => {
    containerList.remove();
  });

  // Adiciona todos os elementos criado dentro do container da lista
  containerList.append(circleIcon, containerItem, trashIcon);
  containerTasks.append(containerList);
}
