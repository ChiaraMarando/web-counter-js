// Selezione del body

const body = document.querySelector("body");

// Funzioni di supporto (DRY)

function aggiungiClassi(el, classi) {
  if (classi.length) el.classList.add(...classi);
}

function modificaTesto(el, testo) {
  if (testo !== undefined && testo !== null) el.textContent = testo;
}

function aggiungiAttributo(el, nome, valore) {
  el.setAttribute(nome, valore);
}

function creaElemento(tag, classi = [], testo = "") {
  const el = document.createElement(tag);
  aggiungiClassi(el, classi);
  modificaTesto(el, testo);
  return el;
}

function aggiungiFigli(genitore, ...figli) {
  figli.forEach(figlio => genitore.appendChild(figlio));
}

// Costruzione interfaccia

const container = creaElemento("div",["container"]);
const contatore = creaElemento("p", ["contatore"], "0");
const containerBtn = creaElemento("div", ["containerBtn"]);
const incrementoBtn = creaElemento("button", ["incrementoBtn", "btn"], "+");
const resetBtn = creaElemento("button", ["resetBtn", "btn"], "Reset");
const decrementoBtn = creaElemento("button", ["decrementoBtn", "btn"], "-");

// Accessibilità

aggiungiAttributo(incrementoBtn, "aria-label", "Incrementa contatore");
aggiungiAttributo(decrementoBtn, "aria-label", "Decrementa contatore");
aggiungiAttributo(resetBtn, "aria-label", "Resetta contatore");

// Composizione struttura

aggiungiFigli(container, contatore, containerBtn);
aggiungiFigli(containerBtn, decrementoBtn, resetBtn, incrementoBtn);

body.appendChild(container);

// Logica del contatore

let valoreContatore = Number(localStorage.getItem("counter")) || 0;

function aggiornaContatore() {
  modificaTesto(contatore, valoreContatore);
  localStorage.setItem("counter", valoreContatore);
}

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

// Event delegation

containerBtn.addEventListener("click", function(event) {
  if (event.target.classList.contains("incrementoBtn")) {
    incrementa();
  } else if (event.target.classList.contains("decrementoBtn")) {
    decrementa();
  } else if (event.target.classList.contains("resetBtn")) {
    resetta();
  }
});

