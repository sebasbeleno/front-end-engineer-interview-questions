
const input = document.getElementById("search");
const resultComponent = document.getElementById("result");
const itemsComponent = document.getElementById("items");

const URL = "https://api.frontendeval.com/fake/food/";
let items = [];

let debounceTimer;

async function search(query) {
  const request = await fetch(URL + query);
  const response = await request.json();

  return response;
}

input.addEventListener("input", onUserType);

function onUserType(event) {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(async () => {
    const inputValue = event.target.value;

    const response = await search(inputValue);
    displaySearchResul(response);
  }, 1000);
}

function displaySearchResul(searchResult) {
  openSearchResultComponent();
  searchResult.forEach((result) => {
    const item = document.createElement("div");
    item.className = "resultItem";

    item.textContent = result;

    item.addEventListener("click", () => {
      onAddElement(result);
    });

    resultComponent.appendChild(item);
  });
}

function onAddElement(element) {
  const newElement = {
    text: element,
    done: false,
  };

  items.push(newElement);
  closeSearchResultComponent();
  updateList();
}

function updateList() {
  const childrens = items.map((item) => {
    const itemElement = document.createElement("div");
    itemElement.className = "item";

    const rightElement = document.createElement("div");
    rightElement.className = "rightItemComponent";

    const checkItem = document.createElement("div");
    checkItem.className = "checkItem";
    checkItem.textContent = "✓";

    const textElement = document.createElement("div");
    textElement.className = "textItem";
    textElement.textContent = item.text;

    rightElement.appendChild(checkItem);
    rightElement.appendChild(textElement);

    const leftElement = document.createElement("div");
    leftElement.className = "leftComponent";
    leftElement.textContent = "X";

    itemElement.appendChild(rightElement);
    itemElement.appendChild(leftElement);

    leftElement.addEventListener("click", onRemoveItem);
    checkItem.addEventListener("click", onDoneItem);

    if (item.done) {
      textElement.classList.add("itemCompleted");
    }

    return itemElement;
  });

  itemsComponent.replaceChildren(...childrens);
}

function onRemoveItem(event) {
  const itemElement =
    event.srcElement.previousSibling.getElementsByClassName("textItem");
  const itemToRemove = itemElement[0].textContent;

  const newItemArray = items.filter((item) => {
    return item.text != itemToRemove;
  });

  items = newItemArray;

  updateList();
}

function onDoneItem(event) {
  console.log(event);
  const itemToEdit = event.srcElement.nextSibling.childNodes[0].wholeText;

  const modifiedItems = items.map((item) => {
    if (item.text === itemToEdit) {
      return {
        ...item,
        done: true,
      };
    }

    return item;
  });
  items = modifiedItems;

  updateList();
}

function closeSearchResultComponent() {
  resultComponent.className = "hide";
}

function openSearchResultComponent() {
  resultComponent.className = "result"
}

function clearUserInput() {
  input.vale = ""
}