function calculateFuel() {
  const distance = parseFloat(document.getElementById("distance").value);
  const mileage = parseFloat(document.getElementById("mileage").value);
  const fuelPrice = parseFloat(document.getElementById("fuelPrice").value);

  const error = document.getElementById("error");

  if (!distance || distance <= 0) {
    error.textContent = "Please enter a valid distance.";
    return;
  }

  if (!mileage || mileage <= 0) {
    error.textContent = "Please enter a valid vehicle mileage.";
    return;
  }

  if (fuelPrice === undefined || isNaN(fuelPrice) || fuelPrice < 0) {
    error.textContent = "Please enter a valid fuel price.";
    return;
  }

  error.textContent = "";

  // Fuel required = Distance / Mileage
  const fuelRequired = distance / mileage;

  // Total cost = Fuel required * Fuel price
  const totalCost = fuelRequired * fuelPrice;

  // Cost per kilometer
  const costPerKm = totalCost / distance;

  document.getElementById("fuelRequired").textContent =
    fuelRequired.toFixed(2) + " L";

  document.getElementById("totalCost").textContent =
    totalCost.toFixed(2) + " BDT";

  document.getElementById("costPerKm").textContent =
    costPerKm.toFixed(2) + " BDT";
}

function resetCalculator() {
  document.getElementById("distance").value = "";
  document.getElementById("mileage").value = "";
  document.getElementById("fuelPrice").value = "";

  document.getElementById("fuelRequired").textContent = "0.00 L";
  document.getElementById("totalCost").textContent = "0.00 BDT";
  document.getElementById("costPerKm").textContent = "0.00 BDT";
  document.getElementById("error").textContent = "";
}
