// Seleciona os elementos
const form = document.getElementById("taskForm");
const input = document.querySelector("input");
const button = document.querySelector("button");

// Seleciona a div que tem os conteúdos das tarefas
const containerTasks = document.getElementById("tarefas-container");

// Seleciona o numero de tarefas
const tasks = document.getElementById("quantidade-tarefas");
const completedTasks = document.getElementById("quantidade-concluida");

// Seleciona a div com a mensagem de "Voce não possui tarefas"
const noTasks = document.getElementById("sem-tarefas");

// Valor inicial das tarefas concluídas
let c = 0;

// Executa uma função quando o formulário for enviado
form.onsubmit = (event) => {
  event.preventDefault();

  // Pega o valor que foi digitado no input
  let inputValue = input.value;

  // Oculta a mensagem de "Voce não possui tarefas", quando criar uma tarefa
  noTasks.classList.add("ocultar");

  // Passa as variáveis para a função
  onSubmitValue(inputValue);

  // Seta o valor do input - vazio, quando for enviado o formulário
  input.value = "";
  // Seleciona o focus para o input
  input.focus();
};

// Adiciona um evento de submit, e pega o valor do input

// Uma função que cria a card de tarefas
function onSubmitValue(value) {
  try {
    // Cria uma lista dos items de tarefas
    const containerList = document.createElement("li");
    containerList.classList.add("card-tarefa");

    // Adiciona o elemento de imagem com o ícone de circulo dentro
    const circleIcon = document.createElement("span");
    circleIcon.classList.add("circle-icon");

    // Ao clicar faz com que troque o ícone de circulo para check
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

    // Adiciona o elemento de imagem com o ícone de lixeira dentro
    const trashIcon = document.createElement("img");
    trashIcon.setAttribute("src", "assets/delete-icon.svg");
    trashIcon.setAttribute("alt", "Ícone de uma lixeira");

    // Adiciona um evento que remove o conteúdo por inteiro
    trashIcon.addEventListener("click", () => {
      containerList.remove();
      // Mostra no elemento a quantidade de tarefas
      tasks.innerText = Number(tasks.innerText) - 1;

      if (circleIcon.classList.value === "circle-icon check-icon") {
        completedTasks.innerText = --c;
      }
    });

    // Adiciona todos os elementos criado dentro do container da lista
    containerList.append(circleIcon, containerItem, trashIcon);
    containerTasks.append(containerList);

    // Atualiza o valor total de items que tem na lista
    updateTotals();
  } catch (error) {
    console.log(error);
  }
}

// Pega a quantidade de items que a lista possui
function updateTotals() {
  try {
    const items = containerTasks.children.length;
    console.log(items);
    tasks.innerText = items - 1;
  } catch (error) {
    console.log(error);
  }
}
