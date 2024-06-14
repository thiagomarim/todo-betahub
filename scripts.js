// Seleciona os elementos
const form = document.getElementById("taskForm");
const input = document.querySelector("input");
const button = document.querySelector("button");

// Seleciona a div que tem os conteúdos das tarefas
const containerTasks = document.getElementById("tarefas-container");

// Seleciona o numero de tarefas
const tasks = document.getElementById("quantidade-tarefas");
const completedTasks = document.getElementById("quantidade-concluida");

const noTasks = document.getElementById("sem-tarefas");

// Valor inicial das quantidades de tarefas
let i = 0;

// Valor inicial das tarefas concluídas
let c = 0;

form.onsubmit = (event) => {
  event.preventDefault();

  let inputValue = input.value;

  noTasks.classList.add("ocultar");

  // Adiciona mais um tarefa quando o formulário receber um submit
  const qntTasks = (tasks.innerText = ++i);

  // Passa para a função as variáveis
  onSubmitValue(inputValue, qntTasks);

  input.value = "";
};

// Adiciona um evento de submit, e pega o valor do input

// Uma função que cria a card de tarefas
function onSubmitValue(value, qnt) {
  // Cria a div dos items de tarefas
  const containerList = document.createElement("div");
  containerList.classList.add("card-tarefa");

  // Adiciona o elemento de imagem com o icone de circulo dentro
  const circleIcon = document.createElement("span");
  circleIcon.classList.add("circle-icon");

  // Ao clicar faz com que troque o icone de circulo para check
  circleIcon.addEventListener("click", () => {
    circleIcon.classList.toggle("check-icon");
    // Checa se o span de marcar como a tarefa concluída possui a classe check-icon
    if (circleIcon.classList.value === "circle-icon check-icon") {
      // Caso tiver a classe de check-icon irá adicionar +1 nas tarefas concluídas
      completedTasks.innerText = ++c;
      containerList.classList.add("card-tarefa-checked");
      containerList.classList.remove("card-tarefa");
      containerItem.classList.add("task-checked-text");
    } else {
      // Caso não houver a classe selecionada, irá retirar -1 nas tarefas concluídas
      completedTasks.innerText = --c;
      containerList.classList.add("card-tarefa");
      containerItem.classList.remove("task-checked-text");
    }
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
    // Subtrai por 1 o valor variável de tarefas quando deletar a tarefa
    i = qnt - 1;
    // Mostra no elemento a quantidade de tarefas
    tasks.innerText = i;

    completedTasks.innerText = --c;
  });

  // Adiciona todos os elementos criado dentro do container da lista
  containerList.append(circleIcon, containerItem, trashIcon);
  containerTasks.append(containerList);
}
