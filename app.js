const d = document;

const imgUrl = "./assets/img/trash-icon.svg";

let getItems = function () {
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

  //   -----------------
  let textItem = d.createTextNode(itemSub);
  label.appendChild(textItem);
  label.appendChild(div);
  div.appendChild(check);
  div.appendChild(buttonDelete);
  buttonDelete.appendChild(img);
  item.appendChild(label);

  d.querySelector(".items-list").appendChild(item);

  d.getElementById("items-submit").value = "";

  if (
    img.addEventListener("click", function () {
      item.remove();
    })
  );

  // modify desktop version
  check.addEventListener("change", function () {
    if (check.checked) {
      item.style.textDecoration = "line-through";
      item.style.opacity = "0.5";
      let chekedItems = d.getElementById("items-done");
      chekedItems.appendChild(item);
    } else {
      item.style.textDecoration = "none";
      item.style.opacity = "1";
      d.querySelector(".items-list").appendChild(item);
    }
  });
};

let actions = function () {
  const addButton = d.getElementById("add");

  addButton.addEventListener("click", getItems);
  checked();
};

d.addEventListener("DOMContentLoaded", actions);
