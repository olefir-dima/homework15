document.addEventListener("DOMContentLoaded", function () {
  const inputText = document.getElementById("inputText");
  const itemList = document.getElementById("itemList");

  addBtn.addEventListener("click", function () {
    const text = inputText.value.trim();

    if (text !== "") {
      addItem(text);
      inputText.value = "";
    }
  });

  itemList.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("removeBtn")) {
      deleteItem(target.parentElement);
    }
  });

  function addItem(text) {
    const listItem = document.createElement("li");
    listItem.innerHTML = text + ' <button class="removeBtn">Remove</button>';
    itemList.appendChild(listItem);
  }

  function deleteItem(item) {
    itemList.removeChild(item);
  }
});
