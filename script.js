
const photos = document.querySelectorAll(".memory-photo img");

photos.forEach(function (photo) {
  photo.addEventListener("error", function () {
    photo.style.display = "none";
  });
});

// Open and close the surprise.
const surpriseButton = document.querySelector("#surprise-button");
const surpriseMessage = document.querySelector("#surprise-message");

// Strawberry interaction.
const strawberryButton = document.querySelector("#strawberry-button");
const strawberry = document.querySelector("#strawberry");
const strawberryHint = document.querySelector("#strawberry-hint");
const biteMessage = document.querySelector("#bite-message");

let bites = 0;
const totalBites = 4;

surpriseButton.addEventListener("click", function () {
  surpriseMessage.hidden = !surpriseMessage.hidden;

  if (surpriseMessage.hidden) {
    surpriseButton.textContent = "Open your surprise ♡";
  } else {
    surpriseButton.textContent = "Close your surprise ↑";
  }
});

strawberryButton.addEventListener("click", function () {
  // Don't eat it again after it's gone.
  if (bites >= totalBites) {
    return;
  }

  bites++;

  // Change the strawberry's appearance with each bite.
  if (bites === 1) {
    strawberry.textContent = "🍓";
    strawberryButton.classList.add("is-bitten");
    strawberryHint.textContent = "One bite! 😋";
    biteMessage.textContent = "Yummy!";
  } else if (bites === 2) {
    strawberry.textContent = "🍓";
    strawberryHint.textContent = "Keep eating!";
    biteMessage.textContent = "This strawberry is good, huh?";
  } else if (bites === 3) {
    strawberry.textContent = "🍓";
    strawberryHint.textContent = "Almost finished!";
    biteMessage.textContent = "Just one more bite...";
  } else {
    strawberry.textContent = "♡";
    strawberryButton.classList.add("is-gone");
    strawberryHint.textContent = "All gone!";
    biteMessage.textContent =
      "Hehe, don't worry! I'll bring you more when we meet. ♡";
  }
});
