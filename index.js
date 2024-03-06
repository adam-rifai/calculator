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

function delete_last_element() {
  displayEl.value = displayEl.value.slice(0, -1);
}

function copy_content() {
  displayEl.select();
  displayEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(displayEl.value);
}
