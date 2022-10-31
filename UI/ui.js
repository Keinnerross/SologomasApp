import { BookService } from "../services/services.js";
const viewDataTable = document.getElementById("view-data-table");

export class UI {
  async renderGet() {
    const service = new BookService();
    const get = await service.getService();

    let view = "";
    view = `
        ${get
          .map(
            (pk) =>
              `<tr id="${pk.id}" class="body-tab">
         <td>${pk.belt}</td>
         <td>${pk.stock}u.</td>
         <td>$${pk.price}</td>
             <td>
         <div class="button-container">
         <span class="btn btn-secondary delete-btn">Delate</span>
         <span class="btn btn-info update-btn">Update</span>
         </div>
         
         </td>
      </tr>`
          )
          .join("")}`;
    viewDataTable.innerHTML = view;
    console.log("render");
  }
}

