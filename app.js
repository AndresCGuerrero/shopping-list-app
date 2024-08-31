const d = document;

const imgUrl = "./assets/img/trash-icon.svg";
const itemAddedTitle = d.querySelector("#items-added h2");
const itemDoneTitle = d.querySelector("#items-done h2");

let getItems = () => {
  const itemSub = d.getElementById("items-submit").value;
  if (itemSub === "") {
    return false;
  }
  // create elements
  let item = d.createElement("li");
  let label = d.createElement("label");
  let img = d.createElement("img");
  let check = d.createElement("input");
  let div = d.createElement("div");
  let buttonDelete = d.createElement("button");

  // add classes
  item.classList.add("item");
  img.classList.add("delete-item");
  div.classList.add("interaction-btns");

  //  atributes & sources
  img.src = imgUrl;
  img.alt = "Delete button";
  check.setAttribute("type", "checkbox");
  check.setAttribute("class", "listcheck");
  buttonDelete.setAttribute("type", "button");

  //   append items
  let textItem = d.createTextNode(itemSub);
  label.appendChild(textItem);
  label.appendChild(div);
  div.appendChild(check);
  div.appendChild(buttonDelete);
  buttonDelete.appendChild(img);
  item.appendChild(label);

  itemAddedTitle.classList.remove("hidden");
  d.querySelector(".items-list").appendChild(item);

  d.getElementById("items-submit").value = "";

  if (
    img.addEventListener("click", function () {
      item.remove();
      checkEmptiness();
    })
  );

  check.addEventListener("change", () => {
    if (check.checked) {
      item.style.textDecoration = "line-through";
      item.style.opacity = "0.5";
      itemDoneTitle.classList.remove("hidden");
      let chekedItems = d.getElementById("items-done");
      chekedItems.appendChild(item);
    } else {
      item.style.textDecoration = "none";
      item.style.opacity = "1";
      d.querySelector(".items-list").appendChild(item);
      checkEmptiness();
    }
    checkEmptiness();
  });

  checkEmptiness();
};

let checkEmptiness = () => {
  let list = d.querySelector(".items-list");
  if (!list.hasChildNodes()) {
    itemAddedTitle.classList.add("hidden");
  } else {
    itemAddedTitle.classList.remove("hidden");
  }
};

let actions = () => {
  const addButton = d.getElementById("add");

  addButton.addEventListener("click", getItems);
};

d.addEventListener("DOMContentLoaded", actions);
