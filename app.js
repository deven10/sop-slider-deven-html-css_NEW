// slider caret
const caret = document.querySelector(".slider-svg");

// user info div
const userInfo = document.querySelector(".user-info");

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

const firstTestimonial = document.querySelector(".first-testimonial");
const secondTestimonial = document.querySelector(".second-testimonial");
const thirdTestimonial = document.querySelector(".third-testimonial");
const fourthTestimonial = document.querySelector(".fourth-testimonial");
const fifthTestimonial = document.querySelector(".fifth-testimonial");

// All images of testimonials
const img1 = document.querySelector(".image-one");
const img2 = document.querySelector(".image-two");
const img3 = document.querySelector(".image-three");
const img4 = document.querySelector(".image-four");
const img5 = document.querySelector(".image-five");

img3.style.opacity = "1";
img1.style.opacity = ".5";
img2.style.opacity = ".5";
img4.style.opacity = ".5";
img5.style.opacity = ".5";

// event listeners for all the imgs
img1.addEventListener("click", () => {
  caret.style.left = "3%";

  img1.style.opacity = "1";
  img2.style.opacity = ".5";
  img3.style.opacity = ".5";
  img4.style.opacity = ".5";
  img5.style.opacity = ".5";

  testiMonialContentsOne.classList.add("show");
  testiMonialContentsTwo.classList.remove("show");
  testiMonialContentsThree.classList.remove("show");
  testiMonialContentsFour.classList.remove("show");
  testiMonialContentsFive.classList.remove("show");

  firstTestimonial.style.flexGrow = "2";
  secondTestimonial.style.flexGrow = "1";
  thirdTestimonial.style.flexGrow = "1";
  fourthTestimonial.style.flexGrow = "1";
  fifthTestimonial.style.flexGrow = "1";

  userInfo.innerHTML =
    "dipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum!Lorem, ipsum dolor sit amet consectetur";

  userInfo.classList.add("animate__fadeIn");
  setTimeout(() => {
    userInfo.classList.remove("animate__fadeIn");
  }, 300);
});

img2.addEventListener("click", () => {
  caret.style.left = "17%";

  img1.style.opacity = ".5";
  img2.style.opacity = "1";
  img3.style.opacity = ".5";
  img4.style.opacity = ".5";
  img5.style.opacity = ".5";

  testiMonialContentsTwo.classList.add("show");
  testiMonialContentsOne.classList.remove("show");
  testiMonialContentsThree.classList.remove("show");
  testiMonialContentsFour.classList.remove("show");
  testiMonialContentsFive.classList.remove("show");

  firstTestimonial.style.flexGrow = "1";
  secondTestimonial.style.flexGrow = "2";
  thirdTestimonial.style.flexGrow = "1";
  fourthTestimonial.style.flexGrow = "1";
  fifthTestimonial.style.flexGrow = "1";

  userInfo.innerHTML =
    "dipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum!Lorem, ipsum dolor sit amet consectetur eligendi quo ab autem nostrum! Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Lorem, ipsum dolor sit";

  userInfo.classList.add("animate__fadeIn");
  setTimeout(() => {
    userInfo.classList.remove("animate__fadeIn");
  }, 300);
});

img3.addEventListener("click", () => {
  caret.style.left = "31.5%";

  img1.style.opacity = ".5";
  img2.style.opacity = ".5";
  img3.style.opacity = "1";
  img4.style.opacity = ".5";
  img5.style.opacity = ".5";

  testiMonialContentsThree.classList.add("show");
  testiMonialContentsOne.classList.remove("show");
  testiMonialContentsTwo.classList.remove("show");
  testiMonialContentsFour.classList.remove("show");
  testiMonialContentsFive.classList.remove("show");

  firstTestimonial.style.flexGrow = "1";
  secondTestimonial.style.flexGrow = "1";
  thirdTestimonial.style.flexGrow = "2";
  fourthTestimonial.style.flexGrow = "1";
  fifthTestimonial.style.flexGrow = "1";

  userInfo.innerHTML =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum!";
  userInfo.classList.add("animate__fadeIn");
  setTimeout(() => {
    userInfo.classList.remove("animate__fadeIn");
  }, 300);
});

img4.addEventListener("click", () => {
  caret.style.left = "44%";

  img1.style.opacity = ".5";
  img2.style.opacity = ".5";
  img3.style.opacity = ".5";
  img4.style.opacity = "1";
  img5.style.opacity = ".5";

  testiMonialContentsFour.classList.add("show");
  testiMonialContentsOne.classList.remove("show");
  testiMonialContentsTwo.classList.remove("show");
  testiMonialContentsThree.classList.remove("show");
  testiMonialContentsFive.classList.remove("show");

  firstTestimonial.style.flexGrow = "1";
  secondTestimonial.style.flexGrow = "1";
  thirdTestimonial.style.flexGrow = "1";
  fourthTestimonial.style.flexGrow = "4";
  fifthTestimonial.style.flexGrow = "1";

  userInfo.innerHTML =
    " illo explicabo Odio ab autem nostrum! Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Lorem, ipsum dolor sit est rem accusantium eligendi quo ab autem nostrum!Lorem, ipsum dolor sit amet consectetur eligendi quo dipisicing rem accusantium amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est";

  userInfo.classList.add("animate__fadeIn");
  setTimeout(() => {
    userInfo.classList.remove("animate__fadeIn");
  }, 300);
});

img5.addEventListener("click", () => {
  caret.style.left = "57%";

  img1.style.opacity = ".5";
  img2.style.opacity = ".5";
  img3.style.opacity = ".5";
  img4.style.opacity = ".5";
  img5.style.opacity = "1";

  testiMonialContentsFive.classList.add("show");
  testiMonialContentsOne.classList.remove("show");
  testiMonialContentsTwo.classList.remove("show");
  testiMonialContentsThree.classList.remove("show");
  testiMonialContentsFour.classList.remove("show");

  firstTestimonial.style.flexGrow = "1";
  secondTestimonial.style.flexGrow = "1";
  thirdTestimonial.style.flexGrow = "1";
  fourthTestimonial.style.flexGrow = "1";
  fifthTestimonial.style.flexGrow = "5";

  userInfo.innerHTML =
    "dipisicing rem accusantium amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est illo explicabo Odio ab autem nostrum! Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Lorem, ipsum dolor sit est rem accusantium eligendi quo ab autem nostrum!Lorem, ipsum dolor sit amet consectetur eligendi quo";

  userInfo.classList.add("animate__fadeIn");
  setTimeout(() => {
    userInfo.classList.remove("animate__fadeIn");
  }, 300);
});

console.log(userInfo);
