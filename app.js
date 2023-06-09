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

  userInfo.innerHTML =
    "dipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum!Lorem, ipsum dolor sit amet consectetur";

  userInfo.classList.add("animate__animated animate__fadeIn");
});

img2.addEventListener("click", () => {
  caret.style.left = "18.5%";

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

  userInfo.innerHTML =
    "dipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum!Lorem, ipsum dolor sit amet consectetur eligendi quo ab autem nostrum! Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Lorem, ipsum dolor sit";

  userInfo.classList.add("animate__animated animate__fadeIn");
});

img3.addEventListener("click", () => {
  caret.style.left = "34%";

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

  userInfo.innerHTML =
    " illo explicabo est rem accusantium eligendi quo ab autem nostrum!Lorem, ipsum dolor sit amet consectetur eligendi quo dipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio ab autem nostrum! Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Lorem, ipsum dolor sit";

  userInfo.classList.add("animate__animated animate__fadeIn");
});

img4.addEventListener("click", () => {
  caret.style.left = "49.5%";

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

  userInfo.innerHTML =
    " illo explicabo Odio ab autem nostrum! Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Lorem, ipsum dolor sit est rem accusantium eligendi quo ab autem nostrum!Lorem, ipsum dolor sit amet consectetur eligendi quo dipisicing rem accusantium amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est";

  userInfo.classList.add("animate__animated animate__fadeIn");
});

img5.addEventListener("click", () => {
  caret.style.left = "65%";

  img1.style.opacity = ".5";
  img2.style.opacity = ".5";
  img3.style.opacity = ".5";
  img4.style.opacity = ".5";
  img5.style.opacity = "1";

  console.log(img5);

  testiMonialContentsFive.classList.add("show");
  testiMonialContentsOne.classList.remove("show");
  testiMonialContentsTwo.classList.remove("show");
  testiMonialContentsThree.classList.remove("show");
  testiMonialContentsFour.classList.remove("show");

  userInfo.innerHTML =
    "dipisicing rem accusantium amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est illo explicabo Odio ab autem nostrum! Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Lorem, ipsum dolor sit est rem accusantium eligendi quo ab autem nostrum!Lorem, ipsum dolor sit amet consectetur eligendi quo";
  userInfo.classList.add("animate__animated animate__fadeIn");
});
