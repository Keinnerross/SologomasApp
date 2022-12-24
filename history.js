/********History Logic******/

let toggleHistory = false;

const buttonHistory = document.querySelector(".history-button");
const backHistoryButton = document.querySelector(".back-history");
const historyContainer = document.querySelector(".history-container");

buttonHistory.addEventListener("click", () => {
  toggleHistory = !toggleHistory;
  toggleHistory
    ? (historyContainer.className = "history-container")
    : (historyContainer.className = "history-container hidden");
});

backHistoryButton.addEventListener("click", () => {
  toggleHistory = !toggleHistory;
  toggleHistory
    ? (historyContainer.className = "history-container")
    : (historyContainer.className = "hidden");
});
