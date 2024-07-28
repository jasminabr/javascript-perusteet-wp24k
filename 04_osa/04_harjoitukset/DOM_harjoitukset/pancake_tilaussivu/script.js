document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-container");

  const pancakePriceCalc = () => {
    const typeSelect = document.querySelector("#type");
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const totalPriceElement = document.querySelector("#totalPrice");
    const priceBanner = document.querySelector(".price-banner");

    let total = parseInt(typeSelect.value);

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        total += parseInt(checkbox.value);
      }
    });

    totalPriceElement.textContent = `${total}€`;

    priceBanner.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.05)" },
        { transform: "scale(1)" },
      ],
      {
        duration: 100,
        iterations: 1,
      }
    );
  };

  form.addEventListener("change", pancakePriceCalc);
});
