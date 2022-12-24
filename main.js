import { BookService } from "./services/services.js";
import { UI } from "./UI/ui.js";

// hacer render de la interfaz
const ui = new UI();

window.addEventListener("DOMContentLoaded", ui.renderGet());

// form crear correa //
const buttonCloseForm = document.querySelector(".close-form");
const buttonOpenFrom = document.querySelector(".add-product-button");
const formCreateContainer = document.querySelector(".add-belt-container-form");
const inputEntry = document.getElementById("stock-entry");

buttonCloseForm.addEventListener("click", () => {
  formCreateContainer.classList.add("disabled");
});

buttonOpenFrom.addEventListener("click", () => {
  formCreateContainer.classList.remove("disabled");
});

//form Acutalizar correa //
const formUpdateContainer = document.querySelector(
  ".update-belt-container-form"
);
const buttonCloseFormUpdate = document.querySelector(".close-form-update");
const tablaView = document.querySelector("#view-data-table");
let idCapture;
let stockCapture;

buttonCloseFormUpdate.addEventListener("click", () => {
  formUpdateContainer.classList.add("disabled");
});

tablaView.addEventListener("click", (e) => {
  const click = e.target;
  idCapture = click.parentNode.id;
  stockCapture = click.id;
  if (click.classList.contains("update-btn")) {
    formUpdateContainer.classList.remove("disabled");
    inputEntry.focus();
    console.log(idCapture);
    console.log(stockCapture);
  }
});

// Manejo del envío del formulario "Crear Correa" //

const form = document.getElementById("form-create-belt");
const service = new BookService();

form.addEventListener("submit", async (e) => {
  const belt = document.getElementById("belt").value;
  const price = document.getElementById("stock").value;
  const stock = document.getElementById("price").value;

  const data = { belt: belt, stock: stock, price: price };
  const json = JSON.stringify(data);
  service.postService(json);
  formCreateContainer.classList.add("disabled");
  form.reset();
  e.preventDefault();
});

/*Eliminacion de correa */

tablaView.addEventListener("click", (e) => {
  const click = e.target;
  const deleteProgress = () => {
    console.log("soy el boton");
    const id = click.parentNode.id;
    console.log(id);
    service.deleteService(id);
  };

  if (click.classList.contains("delete-btn")) {
    confirm("😲¡CUIDADO! Estas a punto de borrar una correa.")
      ? deleteProgress()
      : console.log("No ha pasado nada (:");
  }
});

/*Actualización de producto */

const formUpdate = document.getElementById("form-update-belt");

formUpdate.addEventListener("submit", (e) => {
  const inputValueBelt = inputEntry.value;
  const data = { stock: stockCapture - inputValueBelt };
  const id = parseInt(idCapture);
  const json = JSON.stringify(data);
  console.log(json, id);
  service.updateBook(json, id);
  formUpdateContainer.classList.add("disabled");
  formUpdate.reset();
  e.preventDefault();
});

const buttonCloseFormExcel = document.querySelector(".close-form-excel");
const buttonOpenFromExcel = document.querySelector(".add-excel-button");
const formExcelContainer = document.querySelector(".excel-container-form");

buttonCloseFormExcel.addEventListener("click", () => {
  formExcelContainer.classList.add("disabled");
});

buttonOpenFromExcel.addEventListener("click", () => {
  formExcelContainer.classList.remove("disabled");
});

/********History Logic******/
