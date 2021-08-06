// A function that hides or shows a selected element
function toggle() {
	
    // Select the element with id "bottom-bar-links"
    var x = document.getElementById("bottom-bar-links");
    
    // If selected element is hidden
    if (x.style.display === "none") {
    
      // Show the hidden element
      x.style.display = "block";
      
      // Else if the selected element is shown
    } else {
    
      // Hide the element
      x.style.display = "none";
    }
  }
  