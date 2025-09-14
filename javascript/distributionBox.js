document.addEventListener("click", function (event) {
  const distributionHeader = event.target.closest(".distributionHeader");

  if (distributionHeader) {
    const distributionBox = distributionHeader.closest(".distributionInfoBox");
    if (distributionBox) {
      distributionBox.classList.toggle("expanded");
    }
  }
});
