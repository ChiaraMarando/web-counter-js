const body = document.querySelector("body");

const container = document.createElement("div");
const contatore = document.createElement("p");
const containerBtn = document.createElement("div");
const incrementoBtn = document.createElement("button");
const resetBtn = document.createElement("button");
const decrementoBtn = document.createElement("button");

contatore.textContent = 0;
incrementoBtn.textContent = "+";
resetBtn.textContent = "Reset";
decrementoBtn.textContent = "-"

container.classList.add("container");
contatore.classList.add("contatore");
containerBtn.classList.add("containerBtn");
incrementoBtn.classList.add("incrementoBtn", "btn");
resetBtn.classList.add("reseteBtn", "btn");
decrementoBtn.classList.add("decrementoBtn", "btn");


container.appendChild(contatore);
container.appendChild(containerBtn);
containerBtn.appendChild(decrementoBtn);
containerBtn.appendChild(resetBtn);
containerBtn.appendChild(incrementoBtn);


body.appendChild(container);

let valoreContatore = 0;

function aggiornaContatore() {
  contatore.textContent = valoreContatore
  localStorage.setItem("counter", valoreContatore);
}

valoreContatore = Number(localStorage.getItem("counter")) || 0;
aggiornaContatore();

function incrementa() {
  valoreContatore++;
  aggiornaContatore();
}

function decrementa() {
  if(valoreContatore>0){
  valoreContatore--;
  aggiornaContatore();
  }
}

function resetta() {
  valoreContatore = 0;
  aggiornaContatore();
}

incrementoBtn.addEventListener("click", incrementa);
decrementoBtn.addEventListener("click", decrementa);
resetBtn.addEventListener("click", resetta);

