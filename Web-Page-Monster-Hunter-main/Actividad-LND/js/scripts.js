let hideMe = document.getElementById("hide-me");
let toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", hidePhoto);

function hidePhoto() {
  if (hideMe.style.display === "none") {
    hideMe.style.display = "block";
  } else {
    hideMe.style.display = "none";
  }
}

const try_div = document.getElementById("main-container-1");

// try_div.addEventListener("mouseover", showBiology);
// try_div.addEventListener("mouseout", hideBiology);

// function showBiology() {
//   let showDiv = document.getElementById("monster-ecology")
//   if (try_div.event = "mouseover") {
//     showDiv.style.display = "block";

//     console.log(showDiv);
//   } else {
//     showDiv.style.display = "none";
//   }
// }

// function hideBiology() {
//   let showDiv = document.getElementById("monster-ecology")
//   if (try_div.event = "mouseover") {
//     showDiv.style.display = "none";
//   } else {
//     showDiv.style.display = "block";
//   }
// }

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal, {passive: true});
