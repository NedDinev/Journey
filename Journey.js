function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let bulgaria = 100;
  let balkans = 1000;
  let europe = 1000;

  let destinationPrice;
  let destinationName;
  let place;

  if (budget <= 100) {
    destinationPrice = bulgaria;
    destinationName = "Bulgaria";
    if (season == "summer") {
      budget = budget * 0.3;
      place = "Camp";
    } else if (season == "winter") {
      budget = budget * 0.7;
      place = "Hotel";
    }
  } else if (budget <= 1000) {
    destinationPrice = balkans;
    destinationName = "Balkans";
    if (season == "summer") {
      budget = budget * 0.4;
      place = "Camp";
    } else if (season == "winter") {
      budget = budget * 0.8;
      place = "Hotel";
    }
  } else if (budget > 1000) {
    destinationPrice = europe;
    destinationName = "Europe";
    if (season == "summer" || season == "winter") {
      budget = budget * 0.9;
      place = "Hotel";
    }
  }

  console.log(`Somewhere in ${destinationName}`);
  console.log(`${place} - ${budget.toFixed(2)}`);
}

journey(["1500", "summer"]);
