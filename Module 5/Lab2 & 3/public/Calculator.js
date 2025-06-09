let selectedOperation = null;

document.getElementById("add").addEventListener("click", () => {
  selectedOperation = "add";
});
document.getElementById("subtract").addEventListener("click", () => {
  selectedOperation = "subtract";
});
document.getElementById("multiply").addEventListener("click", () => {
  selectedOperation = "multiply";
});
document.getElementById("divide").addEventListener("click", () => {
  selectedOperation = "divide";
});

document.getElementById("result").addEventListener("click", () => {
  const a = document.getElementById("input-1").value;
  const b = document.getElementById("input-2").value;

  if (!selectedOperation) {
    alert("Please select an operation (+, -, ×, ÷) first.");
    return;
  }

  fetch(`/calculator/${selectedOperation}?a=${a}&b=${b}`)
    .then((res) => {
      if (!res.ok) throw new Error("Invalid input or server error.");
      return res.text();
    })
    .then((data) => {
      alert(data); // Or insert it into the page if you prefer
    })
    .catch((err) => {
      alert("Error: " + err.message);
    });
});

document.getElementById("refresh").addEventListener("click", () => {
  document.getElementById("input-1").value = "";
  document.getElementById("input-2").value = "";
  selectedOperation = null;
});
