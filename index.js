const displayEl = document.getElementById("display");

function append_to_display(input) {
  displayEl.value += input;

}

function calculate() {
  try {
    displayEl.value = eval(displayEl.value);

  } catch (error) {
    displayEl.value = "error";
  }


}

function clear_display() {
  displayEl.value = "";

}
