console.log("yande translate");

//abbreviations
const d = document;
d.qs = d.querySelector;
const log = console.log;

const collectionBtn = d.qs("#collectionsOption");
log("collectionBtn", collectionBtn);
if (collectionBtn) {
  collectionBtn.addEventListener("click", () => {
    log("click collectionsOption");

    d.qs("li.collection-item").addEventListener("click", () => {
      const flex = d.qs(".collection-icons");
      const newItem = d.createElement("a");
      newItem.innerHTML = "new";
      newItem.href = "www.google.com";
      flex.insertAdjacentElement("afterbegin", newItem);
      log("click collection item");
    });
  });
}
