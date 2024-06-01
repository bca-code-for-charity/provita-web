const buttonsRight = document.getElementsByClassName("carousel-button-right");
const buttonsLeft = document.getElementsByClassName("carousel-button-left");
const carousels = document.getElementsByClassName("carousel");

for (let i = 0; i < buttonsRight.length || i < buttonsLeft.length; i++) {
  buttonsRight[i]?.addEventListener("click", (e) => {
    carouselNext(i);
  });
  buttonsLeft[i]?.addEventListener("click", (e) => {
    carouselPrev(i);
  });

  // store the index of the first and last visible one
  if (i >= 0 && i < carousels.length) {
    carousels[i].dataset.index = "0," +
      Math.min(4, carousels[i].getElementsByClassName("card").length);
  }
}

function carouselNext(index) {
  const carousel = carousels[index];
  const numItems = carousel.getElementsByClassName("card").length;
  const last = carousel.dataset.index.split(",").map((each) => Number(each))[1];

  if (last >= numItems + 3) {
    return;
  }

  const first =
    carousel.dataset.index.split(",").map((each) => Number(each))[0];
  const newFirst = first + 1;
  const newLast = last + 1;
  carousel.dataset.index = newFirst + "," + newLast;
  Array.from(carousel.getElementsByClassName("card")).forEach((element) => {
    element.animate([
      { transform: `translateX(-${first * 70}%)` },
      { transform: `translateX(-${newFirst * 70}%)` },
    ], {
      duration: 300,
      iterations: 1,
      fill: "forwards",
    });
  });
}

function carouselPrev(index) {
  const carousel = carousels[index];
  const numItems = carousel.getElementsByClassName("card").length;
  const first =
    carousel.dataset.index.split(",").map((each) => Number(each))[0];

  if (first < 0) {
    return;
  }

  const last = carousel.dataset.index.split(",").map((each) => Number(each))[1];
  const newFirst = first - 1;
  const newLast = last - 1;
  carousel.dataset.index = newFirst + "," + newLast;
  Array.from(carousel.getElementsByClassName("card")).forEach((element) => {
    element.animate([
      { transform: `translateX(-${first * 70}%)` },
      { transform: `translateX(-${newFirst * 70}%)` },
    ], {
      duration: 200,
      iterations: 1,
      fill: "forwards",
    });
  });
}
