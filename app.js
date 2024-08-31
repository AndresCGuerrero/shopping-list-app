const d = document;
const addButton = d.getElementById("add");
const IMG_URL = "./assets/img/trash-icon.svg";
const itemAddedTitle = d.querySelector("#items-added h2");
const itemDoneTitle = d.querySelector("#items-done h2");
const itemsList = d.querySelector(".items-list");
const doneList = d.getElementById("items-done");

const checkIfListIsEmpty = () => {
  if (!itemsList.hasChildNodes()) {
    itemAddedTitle.classList.add("hidden");
  } else {
    itemAddedTitle.classList.remove("hidden");
  }
};

const addItemToList = () => {
  const itemInputElement = d.getElementById("items-submit");
  const itemInput = itemInputElement.value.trim();

  if (itemInput === "") return;

  // create elements
  const item = d.createElement("li");
  const label = d.createElement("label");
  const div = d.createElement("div");
  const check = d.createElement("input");
  const buttonDelete = d.createElement("button");
  const img = d.createElement("img");

  // add classes & attributes
  item.classList.add("item");
  div.classList.add("interaction-btns");
  check.type = "checkbox";
  check.classList.add("listcheck");
  buttonDelete.type = "button";
  img.src = IMG_URL;
  img.alt = "Delete button";
  img.classList.add("delete-item");

  //   append items
  label.textContent = itemInput;
  label.appendChild(div);
  div.appendChild(check);
  div.appendChild(buttonDelete);
  buttonDelete.appendChild(img);
  item.appendChild(label);

  itemsList.appendChild(item);
  itemAddedTitle.classList.remove("hidden");
  itemInputElement.value = "";

  img.addEventListener("click", () => {
    item.remove();
    checkIfListIsEmpty();
  });

  check.addEventListener("change", () => {
    if (check.checked) {
      item.style.textDecoration = "line-through";
      item.style.opacity = "0.5";
      doneList.appendChild(item);
      itemDoneTitle.classList.remove("hidden");
    } else {
      item.style.textDecoration = "none";
      item.style.opacity = "1";
      itemsList.appendChild(item);
      checkIfListIsEmpty();
    }
    checkIfListIsEmpty();
  });

  checkIfListIsEmpty();
};

const initialize = () => {
  addButton.addEventListener("click", addItemToList);
};

d.addEventListener("DOMContentLoaded", initialize);
