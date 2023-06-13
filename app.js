//------------ FOR DESKTOP VIEW ------------//
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

// All parents testimonials div
const firstTestimonial = document.querySelector(".first-testimonial");
const secondTestimonial = document.querySelector(".second-testimonial");
const thirdTestimonial = document.querySelector(".third-testimonial");
const fourthTestimonial = document.querySelector(".fourth-testimonial");
const fifthTestimonial = document.querySelector(".fifth-testimonial");

firstTestimonial.style.width = "16.25%";
secondTestimonial.style.width = "16.25%";
thirdTestimonial.style.width = "35%";
fourthTestimonial.style.width = "16.25%";
fifthTestimonial.style.width = "16.25%";

// All images of testimonials
const img1 = document.querySelector(".image-one");
const img2 = document.querySelector(".image-two");
const img3 = document.querySelector(".image-three");
const img4 = document.querySelector(".image-four");
const img5 = document.querySelector(".image-five");

img1.style.opacity = ".5";
img2.style.opacity = ".5";
img3.style.opacity = "1";
img4.style.opacity = ".5";
img5.style.opacity = ".5";

// event listeners for all the imgs
img1.addEventListener("click", () => {
  // caret.style.left = "3%";
  caret.style.left = "calc(30px)";

  img1.style.opacity = "1";
  img2.style.opacity = ".5";
  img3.style.opacity = ".5";
  img4.style.opacity = ".5";
  img5.style.opacity = ".5";

  testiMonialContentsOne.style.display = "flex";
  testiMonialContentsTwo.style.display = "none";
  testiMonialContentsThree.style.display = "none";
  testiMonialContentsFour.style.display = "none";
  testiMonialContentsFive.style.display = "none";

  firstTestimonial.classList.add("show");
  secondTestimonial.classList.remove("show");
  thirdTestimonial.classList.remove("show");
  fourthTestimonial.classList.remove("show");
  fifthTestimonial.classList.remove("show");

  firstTestimonial.style.width = "35%";
  secondTestimonial.style.width = "16.25%";
  thirdTestimonial.style.width = "16.25%";
  fourthTestimonial.style.width = "16.25%";
  fifthTestimonial.style.width = "16.25%";

  // firstTestimonial.style.flexGrow = "2";
  // secondTestimonial.style.flexGrow = "1";
  // thirdTestimonial.style.flexGrow = "1";
  // fourthTestimonial.style.flexGrow = "1";
  // fifthTestimonial.style.flexGrow = "1";

  userInfo.innerHTML =
    "dipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum!Lorem, ipsum dolor sit amet consectetur";

  userInfo.classList.add("animate__fadeIn");
  setTimeout(() => {
    userInfo.classList.remove("animate__fadeIn");
  }, 300);
});

img2.addEventListener("click", () => {
  // caret.style.left = "17%";
  caret.style.left = "calc(16.25% + 30px)";

  img1.style.opacity = ".5";
  img2.style.opacity = "1";
  img3.style.opacity = ".5";
  img4.style.opacity = ".5";
  img5.style.opacity = ".5";

  testiMonialContentsOne.style.display = "none";
  testiMonialContentsTwo.style.display = "flex";
  testiMonialContentsThree.style.display = "none";
  testiMonialContentsFour.style.display = "none";
  testiMonialContentsFive.style.display = "none";

  firstTestimonial.classList.remove("show");
  secondTestimonial.classList.add("show");
  thirdTestimonial.classList.remove("show");
  fourthTestimonial.classList.remove("show");
  fifthTestimonial.classList.remove("show");

  firstTestimonial.style.width = "16.25%";
  secondTestimonial.style.width = "35%";
  thirdTestimonial.style.width = "16.25%";
  fourthTestimonial.style.width = "16.25%";
  fifthTestimonial.style.width = "16.25%";

  // testiMonialContentsTwo.classList.add("show");
  // testiMonialContentsOne.classList.remove("show");
  // testiMonialContentsThree.classList.remove("show");
  // testiMonialContentsFour.classList.remove("show");
  // testiMonialContentsFive.classList.remove("show");

  // firstTestimonial.style.flexGrow = "1";
  // secondTestimonial.style.flexGrow = "2";
  // thirdTestimonial.style.flexGrow = "1";
  // fourthTestimonial.style.flexGrow = "1";
  // fifthTestimonial.style.flexGrow = "1";

  userInfo.innerHTML =
    "dipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum!Lorem, ipsum dolor sit amet consectetur eligendi quo ab autem nostrum! Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Lorem, ipsum dolor sit";

  userInfo.classList.add("animate__fadeIn");
  setTimeout(() => {
    userInfo.classList.remove("animate__fadeIn");
  }, 300);
});

img3.addEventListener("click", () => {
  // caret.style.left = "31.5%";
  caret.style.left = "calc(32.5% + 30px)";

  img1.style.opacity = ".5";
  img2.style.opacity = ".5";
  img3.style.opacity = "1";
  img4.style.opacity = ".5";
  img5.style.opacity = ".5";

  testiMonialContentsOne.style.display = "none";
  testiMonialContentsTwo.style.display = "none";
  testiMonialContentsThree.style.display = "flex";
  testiMonialContentsFour.style.display = "none";
  testiMonialContentsFive.style.display = "none";

  firstTestimonial.classList.remove("show");
  secondTestimonial.classList.remove("show");
  thirdTestimonial.classList.add("show");
  fourthTestimonial.classList.remove("show");
  fifthTestimonial.classList.remove("show");

  firstTestimonial.style.width = "16.25%";
  secondTestimonial.style.width = "16.25%";
  thirdTestimonial.style.width = "35%";
  fourthTestimonial.style.width = "16.25%";
  fifthTestimonial.style.width = "16.25%";

  // testiMonialContentsThree.classList.add("show");
  // testiMonialContentsOne.classList.remove("show");
  // testiMonialContentsTwo.classList.remove("show");
  // testiMonialContentsFour.classList.remove("show");
  // testiMonialContentsFive.classList.remove("show");

  // firstTestimonial.style.flexGrow = "1";
  // secondTestimonial.style.flexGrow = "1";
  // thirdTestimonial.style.flexGrow = "2";
  // fourthTestimonial.style.flexGrow = "1";
  // fifthTestimonial.style.flexGrow = "1";

  userInfo.innerHTML =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum!";
  userInfo.classList.add("animate__fadeIn");
  setTimeout(() => {
    userInfo.classList.remove("animate__fadeIn");
  }, 300);
});

img4.addEventListener("click", () => {
  // caret.style.left = "44%";
  caret.style.left = "calc(48.75% + 30px)";

  img1.style.opacity = ".5";
  img2.style.opacity = ".5";
  img3.style.opacity = ".5";
  img4.style.opacity = "1";
  img5.style.opacity = ".5";

  testiMonialContentsOne.style.display = "none";
  testiMonialContentsTwo.style.display = "none";
  testiMonialContentsThree.style.display = "none";
  testiMonialContentsFour.style.display = "flex";
  testiMonialContentsFive.style.display = "none";

  firstTestimonial.classList.remove("show");
  secondTestimonial.classList.remove("show");
  thirdTestimonial.classList.remove("show");
  fourthTestimonial.classList.add("show");
  fifthTestimonial.classList.remove("show");

  firstTestimonial.style.width = "16.25%";
  secondTestimonial.style.width = "16.25%";
  thirdTestimonial.style.width = "16.25%";
  fourthTestimonial.style.width = "35%";
  fifthTestimonial.style.width = "16.25%";

  // testiMonialContentsFour.classList.add("show");
  // testiMonialContentsOne.classList.remove("show");
  // testiMonialContentsTwo.classList.remove("show");
  // testiMonialContentsThree.classList.remove("show");
  // testiMonialContentsFive.classList.remove("show");

  // firstTestimonial.style.flexGrow = "1";
  // secondTestimonial.style.flexGrow = "1";
  // thirdTestimonial.style.flexGrow = "1";
  // fourthTestimonial.style.flexGrow = "4";
  // fifthTestimonial.style.flexGrow = "1";

  userInfo.innerHTML =
    " illo explicabo Odio ab autem nostrum! Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Lorem, ipsum dolor sit est rem accusantium eligendi quo ab autem nostrum!Lorem, ipsum dolor sit amet consectetur eligendi quo dipisicing rem accusantium amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est";

  userInfo.classList.add("animate__fadeIn");
  setTimeout(() => {
    userInfo.classList.remove("animate__fadeIn");
  }, 300);
});

img5.addEventListener("click", () => {
  // caret.style.left = "57%";
  caret.style.left = "calc(65% + 30px)";

  img1.style.opacity = ".5";
  img2.style.opacity = ".5";
  img3.style.opacity = ".5";
  img4.style.opacity = ".5";
  img5.style.opacity = "1";

  testiMonialContentsOne.style.display = "none";
  testiMonialContentsTwo.style.display = "none";
  testiMonialContentsThree.style.display = "none";
  testiMonialContentsFour.style.display = "none";
  testiMonialContentsFive.style.display = "flex";

  firstTestimonial.classList.remove("show");
  secondTestimonial.classList.remove("show");
  thirdTestimonial.classList.remove("show");
  fourthTestimonial.classList.remove("show");
  fifthTestimonial.classList.add("show");

  firstTestimonial.style.width = "16.25%";
  secondTestimonial.style.width = "16.25%";
  thirdTestimonial.style.width = "16.25%";
  fourthTestimonial.style.width = "16.25%";
  fifthTestimonial.style.width = "35%";

  // testiMonialContentsFive.classList.add("show");
  // testiMonialContentsOne.classList.remove("show");
  // testiMonialContentsTwo.classList.remove("show");
  // testiMonialContentsThree.classList.remove("show");
  // testiMonialContentsFour.classList.remove("show");

  // firstTestimonial.style.flexGrow = "1";
  // secondTestimonial.style.flexGrow = "1";
  // thirdTestimonial.style.flexGrow = "1";
  // fourthTestimonial.style.flexGrow = "1";
  // fifthTestimonial.style.flexGrow = "5";

  userInfo.innerHTML =
    "dipisicing rem accusantium amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est illo explicabo Odio ab autem nostrum! Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Lorem, ipsum dolor sit est rem accusantium eligendi quo ab autem nostrum!Lorem, ipsum dolor sit amet consectetur eligendi quo";

  userInfo.classList.add("animate__fadeIn");
  setTimeout(() => {
    userInfo.classList.remove("animate__fadeIn");
  }, 300);
});

//------------ FOR MOBILE VIEW ------------//

// slider caret
const mobileCaret = document.querySelector(".mobile-slider-svg");

// user info div
const mobileUserInfo = document.querySelector(".mobile-user-info");

//  All hidden text contents of the testimonials
const mobileTestiMonialContentsOne = document.querySelector(
  ".mobile-testimonial-content-one"
);
const mobileTestiMonialContentsTwo = document.querySelector(
  ".mobile-testimonial-content-two"
);
const mobileTestiMonialContentsThree = document.querySelector(
  ".mobile-testimonial-content-three"
);
const mobileTestiMonialContentsFour = document.querySelector(
  ".mobile-testimonial-content-four"
);
const mobileTestiMonialContentsFive = document.querySelector(
  ".mobile-testimonial-content-five"
);

mobileTestiMonialContentsThree.style.display = "block";

//  All testimonials main parent
const mobileFirstTestimonial = document.querySelector(
  ".mobile-first-testimonial"
);
const mobileSecondTestimonial = document.querySelector(
  ".mobile-second-testimonial"
);
const mobileThirdTestimonial = document.querySelector(
  ".mobile-third-testimonial"
);
const mobileFourthTestimonial = document.querySelector(
  ".mobile-fourth-testimonial"
);
const mobileFifthTestimonial = document.querySelector(
  ".mobile-fifth-testimonial"
);

// All images of testimonials
const mobileImg1 = document.querySelector(".mobile-image-one");
const mobileImg2 = document.querySelector(".mobile-image-two");
const mobileImg3 = document.querySelector(".mobile-image-three");
const mobileImg4 = document.querySelector(".mobile-image-four");
const mobileImg5 = document.querySelector(".mobile-image-five");

mobileImg1.style.opacity = ".5";
mobileImg2.style.opacity = ".5";
mobileImg3.style.opacity = "1";
mobileImg4.style.opacity = ".5";
mobileImg5.style.opacity = ".5";

// All usernames
const firstUsername = document.querySelector(".mobile-username-one");
const secondUsername = document.querySelector(".mobile-username-two");
const thirdUsername = document.querySelector(".mobile-username-three");
const fourthUsername = document.querySelector(".mobile-username-four");
const fifthUsername = document.querySelector(".mobile-username-five");

firstUsername.style.opacity = ".5";
secondUsername.style.opacity = ".5";
thirdUsername.style.opacity = "1";
fourthUsername.style.opacity = ".5";
fifthUsername.style.opacity = ".5";

// All usernames
const firstAbout = document.querySelector(".mobile-user-about-one");
const secondAbout = document.querySelector(".mobile-user-about-two");
const thirdAbout = document.querySelector(".mobile-user-about-three");
const fourthAbout = document.querySelector(".mobile-user-about-four");
const fifthAbout = document.querySelector(".mobile-user-about-five");

firstAbout.style.opacity = ".5";
secondAbout.style.opacity = ".5";
thirdAbout.style.opacity = "1";
fourthAbout.style.opacity = ".5";
fifthAbout.style.opacity = ".5";

// event listeners for all the imgs
mobileImg1.addEventListener("click", () => {
  mobileCaret.style.top = "5.5vh";

  mobileImg1.style.opacity = "1";
  mobileImg2.style.opacity = ".5";
  mobileImg3.style.opacity = ".5";
  mobileImg4.style.opacity = ".5";
  mobileImg5.style.opacity = ".5";

  firstUsername.style.opacity = "1";
  secondUsername.style.opacity = ".5";
  thirdUsername.style.opacity = ".5";
  fourthUsername.style.opacity = ".5";
  fifthUsername.style.opacity = ".5";

  firstAbout.style.opacity = "1";
  secondAbout.style.opacity = ".5";
  thirdAbout.style.opacity = ".5";
  fourthAbout.style.opacity = ".5";
  fifthAbout.style.opacity = ".5";

  if (screen.width <= 425) {
    mobileTestiMonialContentsOne.style.display = "block";
    mobileTestiMonialContentsTwo.style.display = "none";
    mobileTestiMonialContentsThree.style.display = "none";
    mobileTestiMonialContentsFour.style.display = "none";
    mobileTestiMonialContentsFive.style.display = "none";
  }

  mobileUserInfo.innerHTML =
    "dipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum!Lorem, ipsum dolor sit amet consectetur";

  mobileUserInfo.classList.add("animate__fadeIn");
  setTimeout(() => {
    mobileUserInfo.classList.remove("animate__fadeIn");
  }, 300);
});

mobileImg2.addEventListener("click", () => {
  mobileCaret.style.top = "25vh";

  mobileImg1.style.opacity = ".5";
  mobileImg2.style.opacity = "1";
  mobileImg3.style.opacity = ".5";
  mobileImg4.style.opacity = ".5";
  mobileImg5.style.opacity = ".5";

  firstUsername.style.opacity = ".5";
  secondUsername.style.opacity = "1";
  thirdUsername.style.opacity = ".5";
  fourthUsername.style.opacity = ".5";
  fifthUsername.style.opacity = ".5";

  firstAbout.style.opacity = ".5";
  secondAbout.style.opacity = "1";
  thirdAbout.style.opacity = ".5";
  fourthAbout.style.opacity = ".5";
  fifthAbout.style.opacity = ".5";

  if (screen.width <= 425) {
    mobileTestiMonialContentsOne.style.display = "none";
    mobileTestiMonialContentsTwo.style.display = "block";
    mobileTestiMonialContentsThree.style.display = "none";
    mobileTestiMonialContentsFour.style.display = "none";
    mobileTestiMonialContentsFive.style.display = "none";
  }

  mobileUserInfo.innerHTML =
    "dipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum!Lorem, ipsum dolor sit amet consectetur eligendi quo ab autem nostrum! Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Lorem, ipsum dolor sit";

  mobileUserInfo.classList.add("animate__fadeIn");
  setTimeout(() => {
    mobileUserInfo.classList.remove("animate__fadeIn");
  }, 300);
});

mobileImg3.addEventListener("click", () => {
  mobileCaret.style.top = "44vh";

  mobileImg1.style.opacity = ".5";
  mobileImg2.style.opacity = ".5";
  mobileImg3.style.opacity = "1";
  mobileImg4.style.opacity = ".5";
  mobileImg5.style.opacity = ".5";

  firstUsername.style.opacity = ".5";
  secondUsername.style.opacity = ".5";
  thirdUsername.style.opacity = "1";
  fourthUsername.style.opacity = ".5";
  fifthUsername.style.opacity = ".5";

  firstAbout.style.opacity = ".5";
  secondAbout.style.opacity = ".5";
  thirdAbout.style.opacity = "1";
  fourthAbout.style.opacity = ".5";
  fifthAbout.style.opacity = ".5";

  if (screen.width <= 425) {
    mobileTestiMonialContentsOne.style.display = "none";
    mobileTestiMonialContentsTwo.style.display = "none";
    mobileTestiMonialContentsThree.style.display = "block";
    mobileTestiMonialContentsFour.style.display = "none";
    mobileTestiMonialContentsFive.style.display = "none";
  }

  mobileUserInfo.innerHTML =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum!";
  mobileUserInfo.classList.add("animate__fadeIn");
  setTimeout(() => {
    mobileUserInfo.classList.remove("animate__fadeIn");
  }, 300);
});

mobileImg4.addEventListener("click", () => {
  mobileCaret.style.top = "63vh";

  mobileImg1.style.opacity = ".5";
  mobileImg2.style.opacity = ".5";
  mobileImg3.style.opacity = ".5";
  mobileImg4.style.opacity = "1";
  mobileImg5.style.opacity = ".5";

  firstUsername.style.opacity = ".5";
  secondUsername.style.opacity = ".5";
  thirdUsername.style.opacity = ".5";
  fourthUsername.style.opacity = "1";
  fifthUsername.style.opacity = ".5";

  firstAbout.style.opacity = ".5";
  secondAbout.style.opacity = ".5";
  thirdAbout.style.opacity = ".5";
  fourthAbout.style.opacity = "1";
  fifthAbout.style.opacity = ".5";

  if (screen.width <= 425) {
    mobileTestiMonialContentsOne.style.display = "none";
    mobileTestiMonialContentsTwo.style.display = "none";
    mobileTestiMonialContentsThree.style.display = "none";
    mobileTestiMonialContentsFour.style.display = "block";
    mobileTestiMonialContentsFive.style.display = "none";
  }

  mobileUserInfo.innerHTML =
    " illo explicabo Odio ab autem nostrum! Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Lorem, ipsum dolor sit est rem accusantium eligendi quo ab autem nostrum!Lorem, ipsum dolor sit amet consectetur eligendi quo dipisicing rem accusantium amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est";

  mobileUserInfo.classList.add("animate__fadeIn");
  setTimeout(() => {
    mobileUserInfo.classList.remove("animate__fadeIn");
  }, 300);
});

mobileImg5.addEventListener("click", () => {
  mobileCaret.style.top = "81.5vh";

  mobileImg1.style.opacity = ".5";
  mobileImg2.style.opacity = ".5";
  mobileImg3.style.opacity = ".5";
  mobileImg4.style.opacity = ".5";
  mobileImg5.style.opacity = "1";

  firstUsername.style.opacity = ".5";
  secondUsername.style.opacity = ".5";
  thirdUsername.style.opacity = ".5";
  fourthUsername.style.opacity = ".5";
  fifthUsername.style.opacity = "1";

  firstAbout.style.opacity = ".5";
  secondAbout.style.opacity = ".5";
  thirdAbout.style.opacity = ".5";
  fourthAbout.style.opacity = ".5";
  fifthAbout.style.opacity = "1";

  if (screen.width <= 425) {
    mobileTestiMonialContentsOne.style.display = "none";
    mobileTestiMonialContentsTwo.style.display = "none";
    mobileTestiMonialContentsThree.style.display = "none";
    mobileTestiMonialContentsFour.style.display = "none";
    mobileTestiMonialContentsFive.style.display = "block";
  }

  mobileUserInfo.innerHTML =
    "dipisicing rem accusantium amet consectetur adipisicing elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. elit. Repudiandae ut veniam minus id eum nobis ipsam quam sunt provident. Odio illo explicabo est illo explicabo Odio ab autem nostrum! Odio illo explicabo est rem accusantium eligendi quo ab autem nostrum! Lorem, ipsum dolor sit est rem accusantium eligendi quo ab autem nostrum!Lorem, ipsum dolor sit amet consectetur eligendi quo";

  mobileUserInfo.classList.add("animate__fadeIn");
  setTimeout(() => {
    mobileUserInfo.classList.remove("animate__fadeIn");
  }, 300);
});
