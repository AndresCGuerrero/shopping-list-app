const d = document;

const addButton = d.getElementById("add");

let getItems = function () {
  const itemSub = d.getElementById("items-submit").value;
  if (itemSub === "") {
    return false;
  }

  let item = d.createElement("li");
  item.classList.add("item");
  let label = d.createElement("label");
  //   ------
  let check = d.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("class", "listcheck");

  //   -----------------
  let textItem = d.createTextNode(itemSub);
  label.appendChild(textItem);
  label.appendChild(check);
  item.appendChild(label);
  //   -----

  d.querySelector(".items-list").appendChild(item);

  d.getElementById("items-submit").value = "";
};

let addItem = function () {
  addButton.addEventListener("click", getItems);
};

d.addEventListener("DOMContentLoaded", addItem);
