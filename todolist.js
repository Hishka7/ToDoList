const body = document.getElementsByTagName("body")[0];
const email2 = document.getElementById("email2");
email2.innerHTML = localStorage.getItem("email");
email2.style.color = "white";
email2.style.fontSize = "10px";
email2.style.fontWeight = "900";
const phonenum = document.getElementById("phonenum");
phonenum.innerHTML = localStorage.getItem("phone");
phonenum.style.color = "white";
phonenum.style.fontSize = "7px";
phonenum.style.margin = "1px";
const container = document.getElementById("container");
const addButton = document.getElementById("addButton");
const input = document.getElementById("input");

function addTodo() {
  const divv = document.createElement("divv");
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");
  const doneButton = document.createElement("button");
  const completeButton = document.createElement("button");
  const date2 = document.createElement("div");
  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedTime = formatter.format(date);
  date2.innerHTML = formattedTime;
  deleteButton.style.fontSize = "5px";
  doneButton.style.fontSize = "5px";
  completeButton.style.fontSize = "5px";
  editButton.style.fontSize = "5px";
  date2.style.fontSize = "3px";
  divv.style.backgroundColor = "black";
  divv.style.color = "white";
  divv.style.display = "flex";
  divv.style.gap = "2px";
  divv.style.justifyContent = "center";
  divv.style.alignItems = "center";
  divv.style.margin = "7px";
  divv.style.borderRadius = "2px";
  divv.style.fontSize = "7px";
  divv.style.padding = "1px";
  divv.innerHTML = input.value;
  input.value = "";
  deleteButton.innerHTML = "Delete";
  doneButton.innerHTML = "Done";
  completeButton.innerHTML = "Complete";
  editButton.innerHTML = "Edit";
  container.appendChild(divv);
  divv.appendChild(deleteButton);
  divv.appendChild(editButton);
  divv.appendChild(doneButton);
  divv.appendChild(date2);
  doneButton.addEventListener("click", function () {
    divv.style.backgroundColor = "green";
    divv.appendChild(completeButton);
    divv.appendChild(date2);
    doneButton.remove();
    editButton.remove();
    deleteButton.remove();
    editInput.remove();
  });
  completeButton.addEventListener("click", function () {
    divv.style.backgroundColor = "black";
    divv.appendChild(deleteButton);
    divv.appendChild(editButton);
    divv.appendChild(doneButton);
    divv.appendChild(date2);
    completeButton.remove();
  });
  deleteButton.addEventListener("click", function () {
    divv.remove();
  });
  editButton.addEventListener("click", function () {
    const okButton = document.createElement("button");
    const editInput = document.createElement("input");
    okButton.innerHTML = "OK";
    editInput.style.fontSize = "7px";
    okButton.style.fontSize = "7px";
    divv.appendChild(editInput);
    divv.appendChild(okButton);
    editButton.style.pointerEvents = "none";
    okButton.addEventListener("click", function () {
      if (editInput.value === "") {
        alert("Ym bich!");
        alert.addEventListener("click", function () {
          divv.remove();
        });
      }
      editInput.remove();
      okButton.remove();
      divv.innerHTML = editInput.value;
      divv.appendChild(deleteButton);
      divv.appendChild(editButton);
      divv.appendChild(doneButton);
      divv.appendChild(date2);
      editButton.style.pointerEvents = "auto";
    });
  });
}
addButton.addEventListener("click", function () {
  addTodo();
});
