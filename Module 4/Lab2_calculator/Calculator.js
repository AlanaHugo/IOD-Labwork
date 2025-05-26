//function to validate when result button is clicked whether the inputs are numbers

document.addEventListener("DOMContentLoaded", function () {
  const input1 = document.getElementById("input-1");
  const input2 = document.getElementById("input-2");
  const resultButton = document.getElementById("result");

  resultButton.addEventListener("click", function () {
    const val1 = input1.value.trim();
    const val2 = input2.value.trim();

    // Check if either input is not a valid number
    if (isNaN(val1) || val1 === "" || isNaN(val2) || val2 === "") {
      alert("Please enter valid numbers in both fields.");
    }

  });
});

//determine which operator was selected, then calculate result based on the operator

document.addEventListener("DOMContentLoaded", function () {
  const input1 = document.getElementById("input-1");
  const input2 = document.getElementById("input-2");
  const resultButton = document.getElementById("result");
  const opButtons = document.querySelectorAll(".opButton");
  let selectedOperator = null;

  // Track selected operator
  opButtons.forEach(button => {
    button.addEventListener("click", function () {
      // Remove previous selection styling
      opButtons.forEach(btn => btn.classList.remove("selected"));
      this.classList.add("selected");
      selectedOperator = this.id;
    });
  });

  resultButton.addEventListener("click", function () {
    const val1 = parseFloat(input1.value.trim());
    const val2 = parseFloat(input2.value.trim());

    // Validation
    if (isNaN(val1) || isNaN(val2)) {
      alert("Please enter valid numbers in both fields.");
      input1.style.borderColor = isNaN(val1) ? "red" : "lightgrey";
      input2.style.borderColor = isNaN(val2) ? "red" : "lightgrey";
      return;
    }

    if (!selectedOperator) {
      alert("Please select an operator.");
      return;
    }

    // Calculate result based on selected operator using a switch block
    let result;
    switch (selectedOperator) {
      case "add":
        result = val1 + val2;
        break;
      case "subtract":
        result = val1 - val2;
        break;
      case "multiply":
        result = val1 * val2;
        break;
      case "divide":
        result = val2 !== 0 ? val1 / val2 : "Cannot divide by zero";
        break;
      default:
        result = "Unknown operation";
    }

    // result display
    alert("Result: " + result);
  });
});

//location.reload function to refresh the page when the refresh button is clicked

document.addEventListener("DOMContentLoaded", function () {
  const refreshButton = document.getElementById("refresh");

  const refreshPage = () => {
    location.reload();
  };

  refreshButton.addEventListener("click", refreshPage);
});