const labels = document.querySelectorAll(".form-control label");

// map ----> defined function ----> defined array --> defined function grabs items
//from the defined array ---> then the map creates new array with those items.

labels.forEach(function (label) {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join("");
});
