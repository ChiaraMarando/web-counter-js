const body = document.querySelector("body");

function creaElemento(tag, classi = [], text = "") {
  const el = document.createElement(tag);
  if (classi.length) el.classList.add(...classi);
  if (text) el.textContent = text;
  return el;
}

const container = creaElemento("div",["container"]);
const contatore = creaElemento("p", ["contatore"], "0");
const containerBtn = creaElemento("div", ["containerBtn"]);
const incrementoBtn = creaElemento("button", ["incrementoBtn", "btn"], "+");
const resetBtn = creaElemento("button", ["resetBtn", "btn"], "Reset");
const decrementoBtn = creaElemento("button", ["decrementoBtn", "btn"], "-");

incrementoBtn.setAttribute("aria-label", "Incrementa contatore");
decrementoBtn.setAttribute("aria-label", "Decrementa contatore");
resetBtn.setAttribute("aria-label", "Resetta contatore");

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

containerBtn.addEventListener("click", function(event) {
  if (event.target.classList.contains("incrementoBtn")) {
    incrementa();
  } else if (event.target.classList.contains("decrementoBtn")) {
    decrementa();
  } else if (event.target.classList.contains("resetBtn")) {
    resetta();
  }
});

