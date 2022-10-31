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

  /*Servicio de Borrado */

  // export class BookService {
  //     constructor() {
  //       this.URL = "https://api-heros-production.up.railway.app/api/heros";
  //     }

  //     async getBook() {
  //       const response = await fetch(this.URL);
  //       const books = await response.json();
  //       console.log(books);
  //     }
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
  //     async postBook(book) {
  //       try {
  //         const response = await fetch(this.URL, {
  //           method: "POST",
  //           headers: { "Content-Type": "application/json" },
  //           body: book,
  //         });
  //       } catch (error) {
  //         console.log(error);
  //         console.log(book);
  //       }
  //     }

  //     async deleteBook(bookId) {
  //       try {
  //         const response = await fetch(`${this.URL}/${bookId}`, {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           method: "DELETE",
  //         });
  //         const data = await response.json();
  //         console.log(data);
  //       } catch {
  //         console.log("Algo salio mal, no te preocupes, lo resolverás.");
  //       }
  //     }
  //   }
  //}

  async deleteService(bookId) {
    try {
      const response = await fetch(`${this.url}/${bookId}`, {
        method: "DELETE",
      });
      const data = response.json();
      console.log("Eliminado con éxito");
      const ui = new UI();
      console.log(bookId)
      ui.renderGet();
    } catch {
      console.log("Algo salio mal, no te preocupes, lo resolverás");
    }
  }
}
