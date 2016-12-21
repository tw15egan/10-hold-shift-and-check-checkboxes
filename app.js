const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
  // Check if shift key is pressed
  // and they are checking it (not unchecking)
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // Loop over all the checkboxes
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', handleCheck);
});

