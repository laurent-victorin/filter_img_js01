// Get Elements from DOM //
const btns = document.querySelectorAll(".buttons button");
const imgs = document.querySelectorAll(".images img");

// Add a click event to all buttons //
for (let i = 1; i < btns.length; i++) {
  btns[i].addEventListener("click", filterImg);
}

// Set active button on click //
function setActiveBtn(e) {
  //remove active class from all buttons //
  btns.forEach((btn) => {
    btn.classList.remove("btn-clicked");
  });

  // Add active class to clicked button //
  e.target.classList.add("btn-clicked");
}

// Filter Images //
function filterImg(e) {
  // Run the active button function //
  setActiveBtn(e);

  // Loop through all images //
  imgs.forEach((img) => {
    //Expand all images //
    img.classList.remove("img-shrink");
    img.classList.add("img-expand");

    // Get data from data attributes
    // Get image type data
    const imgType = parseInt(img.dataset.img);
    // Get button type data
    const btnType = parseInt(e.target.dataset.btn);

    /* If the image type and the type of the clicked btn are not the same */
    if (imgType !== btnType) {
      // Hide the image
      img.classList.remove("img-expand");
      img.classList.add("img-shrink");
    }
  });
}

// Set click event for the All Button //
btns[0].addEventListener("click", (e) => {
  // Run the active button function
  setActiveBtn(e);
  //Loop through all images
  imgs.forEach((img) => {
    //Expand all images
    img.classList.remove("img-shrink");
    img.classList.add("img-expanded");
  });
});
