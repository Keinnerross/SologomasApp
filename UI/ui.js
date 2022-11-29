import { BookService } from "../services/services.js";

const t = $("#table-belts").DataTable( {
  lengthMenu: [
    [25, 50, 75, -1],
    [25, 50, 75, 'All'],
],
  dom: 'Bftrip',
        buttons: [
          'copy', 'csv', 'excel'  
        ],
  "language": {
      "lengthMenu": "Display _MENU_ records per page",
      "zeroRecords": "No hay ningún resultado 😖",
      "sSearch" : "Buscar",
      "info": "Viendo página _PAGE_ de _PAGES_",
      "infoEmpty": "No hay información disponible",
      "infoFiltered": "(filtered from _MAX_ total records)"
  }
} );

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
          
          `<span class="belt-container">${pk.belt}</span>`,
          `<span class="stock-container">${pk.stock}</span>`,
          `<span class="price-container">${pk.price}</span>`,
          `<div id=${pk.id} class="button-container">
           <span id="${pk.stock}" class="btn btn-dark update-btn">Vender</span>
           </div>`,
        ])
        .draw(false);
    });
  }
}



