import { BookService } from "../services/services.js";
const viewDataTable = document.getElementById("view-data-table");
const t = $("#table-belts").DataTable();

export class UI {
  async renderGet() {
    const service = new BookService();
    const get = await service.getService();
    const t = $("#table-belts").DataTable();
    t.clear();
    t.draw();
    get.map((pk) => {
      t.row
        .add([
          pk.belt,
          pk.stock,
          pk.price,
          `<div id=${pk.id} class="button-container">
           <span class="btn btn-secondary delete-btn">Delate</span>
           <span id="${pk.stock}" class="btn btn-info update-btn">Update</span>
           </div>`,
        ])
        .draw(false);
    });
  }
}
