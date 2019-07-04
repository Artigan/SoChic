// CONTACT
function openContact() {
  document.getElementById("contact").style.width = "96%";
}

function closeContact() {
  document.getElementById("contact").style.width = "0%";
}


// FILTER
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "sur-mesure";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// SCROLL SMOUTH
$(function() {
  /**
   * Smooth scrolling to page anchor on click
   **/
  $("a[href*='#']:not([href='#'])").click(function() {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
      if (anchor.length) {
        $("html, body").animate({
          scrollTop: anchor.offset().top
        }, 1200);
      }
    }
  });
});

// CONTACT_BTN VISIBILITY
window.onscroll = function() {
  contactBtn()
};

function contactBtn() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 45)
    document.getElementById("contactBtnJs").className = "contactOn";
  else
    document.getElementById("contactBtnJs").className = "contactBtn h2 span";
}
