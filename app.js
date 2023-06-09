// slider caret
const caret = document.querySelector(".slider-svg");

//  All hidden text contents of the testimonials
const testiMonialContentsOne = document.querySelector(
  ".testimonial-content-one"
);
const testiMonialContentsTwo = document.querySelector(
  ".testimonial-content-two"
);
const testiMonialContentsThree = document.querySelector(
  ".testimonial-content-three"
);
const testiMonialContentsFour = document.querySelector(
  ".testimonial-content-four"
);
const testiMonialContentsFive = document.querySelector(
  ".testimonial-content-five"
);

// All images of testimonials
const img1 = document.querySelector(".image-one");
const img2 = document.querySelector(".image-two");
const img3 = document.querySelector(".image-three");
const img4 = document.querySelector(".image-four");
const img5 = document.querySelector(".image-five");

// event listeners for all the imgs
img1.addEventListener("click", () => {
  caret.style.left = "3%";
  testiMonialContentsOne.classList.add("show");

  testiMonialContentsTwo.classList.remove("show");
  testiMonialContentsThree.classList.remove("show");
  testiMonialContentsFour.classList.remove("show");
  testiMonialContentsFive.classList.remove("show");
});
img2.addEventListener("click", () => {
  caret.style.left = "18.5%";
  testiMonialContentsTwo.classList.add("show");

  testiMonialContentsOne.classList.remove("show");
  testiMonialContentsThree.classList.remove("show");
  testiMonialContentsFour.classList.remove("show");
  testiMonialContentsFive.classList.remove("show");
});
img3.addEventListener("click", () => {
  caret.style.left = "34%";
  testiMonialContentsThree.classList.add("show");

  testiMonialContentsOne.classList.remove("show");
  testiMonialContentsTwo.classList.remove("show");
  testiMonialContentsFour.classList.remove("show");
  testiMonialContentsFive.classList.remove("show");
});
img4.addEventListener("click", () => {
  caret.style.left = "49.5%";
  testiMonialContentsFour.classList.add("show");

  testiMonialContentsOne.classList.remove("show");
  testiMonialContentsTwo.classList.remove("show");
  testiMonialContentsThree.classList.remove("show");
  testiMonialContentsFive.classList.remove("show");
});
img5.addEventListener("click", () => {
  caret.style.left = "65%";
  testiMonialContentsFive.classList.add("show");

  testiMonialContentsOne.classList.remove("show");
  testiMonialContentsTwo.classList.remove("show");
  testiMonialContentsThree.classList.remove("show");
  testiMonialContentsFour.classList.remove("show");
});
