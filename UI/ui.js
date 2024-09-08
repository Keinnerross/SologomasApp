import { BookService } from "../services/services.js";

const t = $("#table-belts").DataTable({
  lengthMenu: [
    [25, 50, 75, -1],
    [25, 50, 75, "All"],
  ],
  dom: "Bftrip",
  buttons: ["copy", "csv", "excel"],
  paging: false, // Desactiva la paginación

  language: {
    lengthMenu: "Display _MENU_ records per page",
    zeroRecords: "No hay ningún resultado 😖",
    sSearch: "Buscar",
    info: "Viendo página _PAGE_ de _PAGES_",
    infoEmpty: "No hay información disponible",
    infoFiltered: "(filtered from _MAX_ total records)",
  },
});

export class UI {
  async renderGet() {
    const service = new BookService();
    // const get = await service.getService();


    //A modo de ejemplo toma este array de obj para renderizar.
    const get = [
      {
        belt: "4pk890",
        stock: "Volkswagen Amarok 1.6, 1.8, 2.0",
        price: "Accesorios/Alternador",
      },

      {
        belt: "4pk810",
        stock: "Ford Mustang GT 5.0, 2022",
        price: "Accesorios/Alternador",
      },
      {
        belt: "4pk825",
        stock: "Toyota Camry 2.5 Hybrid, 2023",
        price: "Accesorios/Alternador",
      },
      {
        belt: "4pk910",
        stock: "Hyundai Tucson 2.4 GDI, 2022 ",
        price: "Accesorios/Alternador",
      },
      {
        belt: "4pk907",
        stock: "Honda Civic Si 1.5 Turbo, 2020",
        price: "Accesorios/Alternador",
      },
      {
        belt: "4pk1200",
        stock: "Mercedes-Benz E-Class E300, 2022",
        price: "Accesorios/Alternador",
      },
      {
        belt: "4pk844",
        stock: "Chevrolet Corvette Stingray 6.2, 2023",
        price: "Accesorios/Alternador",
      },
      {
        belt: "4pk1010",
        stock: "Mercedes-Benz E-Class E300, 2022",
        price: "Accesorios/Alternador",
      },
      {
        belt: "5pk1015",
        stock: "BMW 5 Series, 2021",
        price: "Accesorios/Alternador",
      },
      {
        belt: "6pk1020",
        stock: "Audi A6, 2023",
        price: "Accesorios/Alternador",
      },
      {
        belt: "4pk1025",
        stock: "Toyota Camry, 2022",
        price: "Accesorios/Alternador",
      },
      {
        belt: "5pk1030",
        stock: "Honda Accord, 2022",
        price: "Accesorios/Alternador",
      },
      {
        belt: "6pk1035",
        stock: "Nissan Altima, 2021",
        price: "Accesorios/Alternador",
      },
      {
        belt: "4pk1040",
        stock: "Ford Fusion, 2022",
        price: "Accesorios/Alternador",
      },
      {
        belt: "5pk1045",
        stock: "Chevrolet Malibu, 2023",
        price: "Accesorios/Alternador",
      },
      {
        belt: "4pk1050",
        stock: "Volkswagen Passat, 2022",
        price: "Accesorios/Alternador",
      },
      {
        belt: "5pk1055",
        stock: "Volvo S60, 2021",
        price: "Accesorios/Alternador",
      },
      {
        belt: "6pk1060",
        stock: "Mercedes-Benz C-Class C200, 2022",
        price: "Accesorios/Alternador",
      },
      {
        belt: "4pk1065",
        stock: "Toyota Corolla, 2022",
        price: "Accesorios/Alternador",
      },
      {
        belt: "5pk1070",
        stock: "Honda Civic, 2022",
        price: "Accesorios/Alternador",
      },
      {
        belt: "6pk1075",
        stock: "Nissan Sentra, 2021",
        price: "Accesorios/Alternador",
      },
      {
        belt: "4pk1080",
        stock: "Ford Focus, 2022",
        price: "Accesorios/Alternador",
      },
      {
        belt: "5pk1085",
        stock: "Chevrolet Cruze, 2023",
        price: "Accesorios/Alternador",
      },
      {
        belt: "4pk1090",
        stock: "Volkswagen Jetta, 2022",
        price: "Accesorios/Alternador",
      },
      {
        belt: "5pk1095",
        stock: "Hyundai Elantra, 2021",
        price: "Accesorios/Alternador",
      },
      {
        belt: "6pk1100",
        stock: "Kia Forte, 2022",
        price: "Accesorios/Alternador",
      },
      {
        belt: "4pk1105",
        stock: "Mazda3, 2022",
        price: "Accesorios/Alternador",
      },
      {
        belt: "5pk1110",
        stock: "Subaru Impreza, 2021",
        price: "Accesorios/Alternador",
      },
      {
        belt: "6pk1115",
        stock: "Toyota Camry, 2023",
        price: "Accesorios/Alternador",
      },
      {
        belt: "4pk1120",
        stock: "Honda Accord, 2022",
        price: "Accesorios/Alternador",
      },
      {
        belt: "5pk1125",
        stock: "Nissan Altima, 2021",
        price: "Accesorios/Alternador",
      },
      {
        belt: "4pk1130",
        stock: "Ford Fusion, 2022",
        price: "Accesorios/Alternador",
      },
      {
        belt: "5pk1135",
        stock: "Chevrolet Malibu, 2023",
        price: "Accesorios/Alternador",
      },
      {
        belt: "4pk1140",
        stock: "Volkswagen Passat, 2022",
        price: "Accesorios/Alternador",
      },
      {
        belt: "5pk1145",
        stock: "Volvo S60, 2021",
        price: "Accesorios/Alternador",
      },
      {
        belt: "6pk1150",
        stock: "Mercedes-Benz C-Class C200, 2022",
        price: "Accesorios/Alternador",
      },
    ];
    const t = $("#table-belts").DataTable();
    t.clear();
    t.draw();
    get.map((pk) => {
      t.row
        .add([
          `<span class="belt-container ">${pk.belt}</span>`,
          `<span class="stock-container">${pk.stock}</span>`,
          `<span class="price-container">${pk.price}</span>`,
          `<div id=${pk.id} class="button-container">
           <span id="${pk.stock}" class="btn btn-dark update-btn">Cotizar</span>
           </div>`,
        ])
        .draw(false);
    });
  }
}
