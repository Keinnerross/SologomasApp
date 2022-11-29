import { BookService } from "../services/services.js";
const service = new BookService();
const formExcelContainer = document.querySelector(".excel-container-form");

let selectFile;

const excelInput = document
  .getElementById("excel-input")
  .addEventListener("change", (e) => {
    selectFile = e.target.files[0];
  });
  /* Transformación del archivo a Json */

const excelButton = document
  .getElementById("upload-excel")
  .addEventListener("click", () => {
    if (selectFile) {
      const fileReader = new FileReader();
      fileReader.readAsBinaryString(selectFile);
      fileReader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        workbook.SheetNames.forEach((sheet) => {
          const item = XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheet]
          );

          const sendExcel = () => {
            service.deleteAllService();
            item.map((correa) => {
              const itemJson = JSON.stringify(correa);
              service.postService(itemJson);
              console.log(itemJson);
            });
            formExcelContainer.classList.add("disabled");
          };
          confirm("¿Estas seguro de enviar el excel?")
            ? sendExcel()
            : console.log("Operación Cancelada");
        });
      };
    }
  });
