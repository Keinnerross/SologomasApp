import { UI } from "../UI/ui.js";

export class BookService {
  constructor() {
    this.url = "http://localhost:3000/api/pkbelts";
  }
  /*Servicio de Obtención*/
  async getService() {
    const response = await fetch(this.url);
    const books = await response.json();
    return books;
  }

  /*Servicio de Creación*/  

  async postService(book) {
    const response = await fetch(this.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: book,
    });
    const data = await response.json();
    const ui = new UI();
    ui.renderGet();
    console.log(book);
    console.log(data);
  }

  /*Servicio de Actualización*/
  async updateBook(book, bookId) {
    try {
      const response = await fetch(`${this.url}/${bookId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: book,
      });
      const data = await response.json();
      console.log(book);
      console.log(data);
      const ui = new UI();
      ui.renderGet();
    } catch {
      console("¡Ya casi lo logras! ¡¡¡VAMOOOOOS!!!!");
    }
  }

  /*Servicio de Borrado*/
  async deleteService(bookId) {
    try {
      const response = await fetch(`${this.url}/${bookId}`, {
        method: "DELETE",
      });
      const data = response.json();
      const ui = new UI();
      console.log(bookId);
      console.log(data);
      ui.renderGet();
    } catch {
      console.log("Algo salio mal, no te preocupes, lo resolverás");
    }
  }

  async deleteAllService() {
    try {
      const response = await fetch(`${this.url}`, {
        method: "DELETE",
      });
      const data = response.json();
      console.log(data);
      console.log("Se ejecuto AllDelete")
      
    } catch {
      console.log("Algo salio mal, no te preocupes, lo resolverás");
    }
  }
}

/*Borrar Todo */
