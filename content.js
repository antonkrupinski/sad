// This script modifies the grade displayed on the Canvas page

// Function to change grade display
function changeGrade(newGrade) {
  // Example: Find the grade element. You need to adapt this to match Canvas's DOM.
  // For demonstration, suppose grades are in elements with class 'grade'
  const gradeElements = document.querySelectorAll('.grade');
  gradeElements.forEach(el => {
    el.textContent = newGrade;
  });
}

// Retrieve stored desired grade and apply
chrome.storage.sync.get(['desiredGrade'], (result) => {
  if (result.desiredGrade) {
    changeGrade(result.desiredGrade);
  }
});
