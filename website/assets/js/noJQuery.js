(function(){
})();

document.addEventListener("DOMContentLoaded", function(){
  // When the user scrolls down 20px from the top of the document, show the button
  var topBtn = document.getElementById("topBtn");
  window.addEventListener("scroll", function(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 20) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  // When the user clicks on the button, scroll to the top of the document
  topBtn.addEventListener("click", function(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
});
